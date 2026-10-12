import StatsCounter, { type Stat } from "./StatsCounter";
import {
  companiesWorkedWith,
  countriesInUse,
  shippedSystems,
  yearsOfExperience,
} from "@/lib/site";

// Numbers chosen for business owners, not developers: a client cares how much
// real work has shipped and where it runs, not how many GitHub repos or stars
// there are. (src/lib/github.ts is still there if those are wanted back.)
const Stats = () => {
  const stats: Stat[] = [
    { num: yearsOfExperience(), suffix: "+", text: "Years building for businesses" },
    { num: shippedSystems, text: "Systems built & shipped" },
    { num: companiesWorkedWith, text: "Companies I've built for" },
    { num: countriesInUse, text: "Countries my software runs in" },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <StatsCounter stats={stats.filter((stat) => stat.num > 0)} />
      </div>
    </section>
  );
};

export default Stats;
