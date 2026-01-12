'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import imgage from '../../public/profile.png';

const Photo = () => {
  return (
    <div className="h-full w-full flex justify-center items-center relative">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" }
            }}
            className="relative"
        >
            {/* Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
                }}
                className="relative"
            >
                <div className="w-[278px] h-[278px] xl:w-[478px] xl:h-[478px] p-2 xl:p-2.5 mix-blend-lighten">
                    <Image src={imgage} priority fill quality={100} alt="Profile photo" className="object-contain" />
                </div>
            </motion.div>

            {/* Circle */}
            <motion.svg
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
