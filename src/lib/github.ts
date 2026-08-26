/**
 * Aggregated GitHub statistics, fetched at build time and revalidated daily.
 *
 * Unauthenticated requests are capped at 60/hour per IP. That is plenty for a
 * build, but shared CI egress IPs can exhaust it — set GITHUB_TOKEN (a
 * fine-grained token with no scopes is enough for public data) to raise the
 * ceiling to 5,000/hour. Every failure path degrades to `null` so a rate limit
 * or an outage can never fail the build.
 */

export type GithubStats = {
  repos: number;
  stars: number;
  followers: number;
};

type GithubUser = { public_repos?: number; followers?: number };
type GithubRepo = { stargazers_count?: number; fork?: boolean };

const REVALIDATE_SECONDS = 60 * 60 * 24; // once a day

const headers = (): HeadersInit => {
  const base: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const token = process.env.GITHUB_TOKEN;
  return token ? { ...base, Authorization: `Bearer ${token}` } : base;
};

const get = async <T,>(url: string): Promise<T | null> => {
  try {
    const res = await fetch(url, {
      headers: headers(),
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.warn(`[github] ${res.status} for ${url}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (error) {
    console.warn(`[github] request failed for ${url}:`, error);
    return null;
  }
};

const statsForUser = async (username: string): Promise<GithubStats> => {
  const empty: GithubStats = { repos: 0, stars: 0, followers: 0 };
  if (!username) return empty;

  const user = await get<GithubUser>(`https://api.github.com/users/${username}`);
  if (!user) return empty;

  // Stars are only available per repo, so sum them. Forks are excluded —
  // stars on someone else's project are not yours to claim.
  const repos = await get<GithubRepo[]>(
    `https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated`
  );

  return {
    repos: user.public_repos ?? 0,
    followers: user.followers ?? 0,
    stars: (repos ?? [])
      .filter((repo) => !repo.fork)
      .reduce((sum, repo) => sum + (repo.stargazers_count ?? 0), 0),
  };
};

/** Sums stats across every configured account. Returns null if all lookups fail. */
export const getGithubStats = async (usernames: readonly string[]): Promise<GithubStats | null> => {
  const accounts = usernames.filter(Boolean);
  if (accounts.length === 0) return null;

  const results = await Promise.all(accounts.map(statsForUser));
  const total = results.reduce<GithubStats>(
    (acc, cur) => ({
      repos: acc.repos + cur.repos,
      stars: acc.stars + cur.stars,
      followers: acc.followers + cur.followers,
    }),
    { repos: 0, stars: 0, followers: 0 }
  );

  // Every account failed to resolve — let the caller fall back rather than
  // rendering a row of confident zeroes.
  return total.repos === 0 && total.followers === 0 ? null : total;
};
