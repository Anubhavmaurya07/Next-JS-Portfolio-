"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/lib/projects";

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse xl:flex-row xl:gap-[40px]">
          {/* details */}
          <div className="w-full xl:w-[62%]">
            {/* Every panel is rendered and inactive ones are hidden, rather than
                mounting only the active one — otherwise four of five projects
                would be missing from the server HTML entirely. Re-applying the
                animate-in class on switch still gives the cross-fade. */}
            {projects.map((project, index) => {
              const isVisible = index === active;
              const hasLinks = Boolean(project.live || project.github);
              return (
              <div
                key={project.slug}
                hidden={!isVisible}
                className={
                  isVisible
                    ? "flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-2 duration-300"
                    : undefined
                }
              >
                <div className="flex items-end justify-between gap-4">
                  <span className="text-6xl xl:text-7xl leading-none font-extrabold text-outline text-transparent">
                    {project.num}
                  </span>
                  <span className="text-white/55 text-sm">{project.year}</span>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-accent text-xs uppercase tracking-[3px]">
                    {project.category}
                  </p>
                  <h1 className="text-[34px] xl:text-[42px] font-bold leading-none text-white">
                    {project.title}
                  </h1>
                </div>

                <p className="text-white/60 leading-relaxed">{project.description}</p>

                <ul className="flex flex-col gap-2">
                  {project.highlights.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                      <span className="text-accent shrink-0">&#8250;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-x-2 gap-y-1">
                  {project.stack.map((item, i) => (
                    <li key={i} className="text-sm text-accent">
                      {item.name}
                      {i !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                <div className="border-b border-white/20" />

                {hasLinks ? (
                  <div className="flex items-center gap-4">
                    <TooltipProvider delayDuration={100}>
                      {project.live && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} live site`}
                              className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all duration-500"
                            >
                              <BsArrowUpRight className="text-white text-2xl group-hover:text-primary" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent><p>Live project</p></TooltipContent>
                        </Tooltip>
                      )}
                      {project.github && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} source on GitHub`}
                              className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all duration-500"
                            >
                              <BsGithub className="text-white text-2xl group-hover:text-primary" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent><p>Source code</p></TooltipContent>
                        </Tooltip>
                      )}
                    </TooltipProvider>
                  </div>
                ) : (
                  // Explaining the absence beats leaving an unexplained gap.
                  <p className="text-white/55 text-sm">
                    Commercial project — source and deployment are private.
                    Happy to walk through the architecture on request.
                  </p>
                )}
              </div>
              );
            })}
          </div>

          {/* selector */}
          {projects.length > 1 && (
            <div className="w-full xl:w-[38%] mb-10 xl:mb-0">
              <div className="xl:sticky xl:top-8 flex flex-col gap-3">
                {projects.map((item, index) => {
                  const isActive = index === active;
                  return (
                    <button
                      key={item.slug}
                      onClick={() => setActive(index)}
                      aria-current={isActive ? "true" : undefined}
                      className={`text-left px-5 py-4 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "border-accent bg-[#232329]"
                          : "border-white/10 bg-[#232329]/40 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-baseline gap-3">
                        <span className={isActive ? "text-accent text-sm" : "text-white/55 text-sm"}>
                          {item.num}
                        </span>
                        <span className="text-base">{item.title}</span>
                      </div>
                      <p className="text-white/50 text-xs mt-1 pl-8">{item.category}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
