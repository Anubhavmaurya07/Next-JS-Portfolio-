'use client';
import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="h-full w-full flex justify-center items-center relative">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.1, duration: 0.4, ease: "easeIn" }
            }}
            className="relative"
        >
            {/* Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.25, duration: 0.4, ease: "easeInOut" }
                }}
                className="relative"
            >
                {/* Clipped to a circle: the photo is a square crop that fills its
                    frame, so without this the shoulders spill past the ring. */}
                <div className="relative w-[278px] h-[278px] xl:w-[478px] xl:h-[478px] rounded-full overflow-hidden">
                    <Image
                        src="/profile.png"
                        alt="Anubhav Maurya"
                        fill
                        priority
                        quality={100}
                        sizes="(max-width: 1280px) 278px, 478px"
                        className="object-cover"
                    />
                </div>
            </motion.div>

            {/* Circle */}
            <motion.svg
                aria-hidden="true"
                className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns='http://www.w3.org/2000/svg'
            >
                <motion.circle
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                        strokeDasharray: ["15, 120, 25, 25", "16, 25, 92, 72", "4, 250, 22, 22"],
                        rotate: [120, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </motion.svg>
        </motion.div>
    </div>
  )
}

export default Photo;
