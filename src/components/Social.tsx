"use client";

import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

// Only entries with a real `path` are rendered — an icon that links nowhere is
// worse than no icon at all. Fill in a URL to bring one back.
const socials = [
  { icon: <FaLinkedin />, path: siteConfig.linkedin, title: "LinkedIn" },
  { icon: <FaGithub />, path: siteConfig.github, title: "GitHub" },
  { icon: <FaFacebook />, path: "", title: "Facebook" },
  { icon: <FaInstagram />, path: "", title: "Instagram" },
].filter((s) => s.path);

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <Tooltip.Provider delayDuration={100}>
      <div className={containerStyles}>
        {socials.map((item, index) => (
          <Tooltip.Root key={index}>
            {/* Trigger */}
            <Tooltip.Trigger asChild>
              <Link
                href={item.path}
                className={iconStyles}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
              >
                {item.icon}
              </Link>
            </Tooltip.Trigger>

            {/* Tooltip Content with Framer Motion */}
            <AnimatePresence>
              <Tooltip.Portal>
                <Tooltip.Content side="top" align="center" sideOffset={8} asChild>
                  <motion.div
                    key={`tooltip-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="px-3 py-1.5 rounded-md bg-accent text-primary text-sm shadow-lg backdrop-blur-md font-primary"
                  >
                    {item.title}
                    <Tooltip.Arrow className="fill-accent" />
                  </motion.div>
                </Tooltip.Content>
              </Tooltip.Portal>
            </AnimatePresence>
          </Tooltip.Root>
        ))}
      </div>
    </Tooltip.Provider>
  );
};

export default Social;
