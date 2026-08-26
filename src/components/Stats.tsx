import StatsCounter, { type Stat } from "./StatsCounter";
import { getGithubStats } from "@/lib/github";
import {
  GITHUB_ACCOUNTS,
  shippedSystems,
  technologyCount,
  yearsOfExperience,
} from "@/lib/site";

// Server component: GitHub is queried once at build time and revalidated
// daily, so visitors never pay for the request and the rate limit is never
// hit by traffic.
const Stats = async () => {
  const github = await getGithubStats(GITHUB_ACCOUNTS);

  const stats: Stat[] = [
    { num: yearsOfExperience(), suffix: "+", text: "Years of experience" },
    { num: shippedSystems, text: "Production systems shipped" },
    {
      num: github?.repos ?? 0,
      text: "Public repositories",
    },
    { num: technologyCount, text: "Technologies" },
  ];

  // A zero repo count means the lookup failed or the accounts are private —
  // either way, showing "0" is worse than showing nothing.
  const visible = stats.filter((stat) => stat.num > 0);

  // Stars only earn a tile when there are actually some to show.
  if (github && github.stars > 0) {
    visible.splice(3, 0, { num: github.stars, text: "GitHub stars" });
  }

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <StatsCounter stats={visible.slice(0, 4)} />
      </div>
    </section>
  );
};

export default Stats;
