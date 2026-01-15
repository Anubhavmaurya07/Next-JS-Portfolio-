"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub} from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project-1",
    description: "lorem asdiljf a jifae dfas kl dijfifjie jid jido jf jadilj jkdfali hdufh  dhui dh def",
    stack: [{name: "HTML 5"}, {name: "CSS 3"}, {name: "Javascript"}],
    image: "",
    live: "",
    github: "",
  }
]

export default function Home() {
  const [project, setProject] = useState(projects[0]);
    return (
      <motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              
            </div>
            <div>slider</div>
          </div>
        </div>

      </motion.section>
    );
  }