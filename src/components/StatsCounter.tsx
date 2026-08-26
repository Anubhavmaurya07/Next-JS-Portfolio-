"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

export type Stat = { num: number; suffix?: string; text: string };

/**
 * CountUp renders an empty span until it is mounted and scrolled into view,
 * which leaves the real figures out of the server HTML entirely — invisible to
 * crawlers and to anyone without JS. So the plain value is rendered first and
 * the animated counter only takes over after mount. The first client render
 * matches the server output, so there is no hydration mismatch.
 */
const StatsCounter = ({ stats }: { stats: Stat[] }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
      {stats.map((item, index) => (
        <div
          className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
          key={index}
        >
          {mounted ? (
            <CountUp
              end={item.num}
              suffix={item.suffix ?? ""}
              duration={2}
              enableScrollSpy
              scrollSpyOnce
              className="text-4xl xl:text-6xl font-extrabold"
            />
          ) : (
            <span className="text-4xl xl:text-6xl font-extrabold">
              {item.num}
              {item.suffix ?? ""}
            </span>
          )}
          <p
            className={`${
              item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
            } leading-snug text-white/80`}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;
