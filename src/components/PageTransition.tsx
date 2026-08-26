'use client';
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

// The full-screen cover is owned by StairTransition — this only fades the page
// content in behind it, so the two no longer stack the same overlay twice.
const PageTransition = ({children}: {children: ReactNode}) => {
    const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
        <motion.div
            key={pathname}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration: 0.3, ease: "easeInOut"}}
        >
            {children}
        </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
