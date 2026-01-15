"use client";

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: "Web Development",
    description:
      "I build fast, responsive, and scalable web applications with clean architecture and modern technologies that deliver a seamless user experience across all devices.",
    href: "",
  },
  {
    num: '02',
    title: "Frontend Development",
    description:
      "Specializing in creating dynamic, interactive, and visually appealing user interfaces using React, Next.js, and Tailwind CSS — optimized for performance and accessibility.",
    href: "",
  },
  {
    num: '03',
    title: "App Development",
    description:
      "From concept to deployment, I craft high-performing cross-platform web apps with smooth user interactions, reliable architecture, and intuitive design flow.",
    href: "",
  },
  {
    num: '04',
    title: "Backend Development",
    description:
      "I design and develop robust backend systems and RESTful APIs with Node.js and MongoDB, ensuring security, scalability, and smooth integration with frontend applications.",
    href: "",
  },
];



export default function Services() {
    return (
      <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-8'>
        <div className="container mx-auto">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{delay: 2.4, duration: 0.4, ease: "easeIn"}}}
            className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
            >
              {
                services.map((service, index) => (
                  <div key={index}
                    className='flex-1 flex flex-col justify-center gap-6 group'
                  >
                    {/* top */}
                    <div className='flex w-full justify-between items-center'>
                      <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                      <Link href={service.href}
                        className='w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center group-hover:bg-accent transition-all duration-500 hover:-rotate-45'
                      >
                        <BsArrowDownRight className='text-primary text-3xl'/>
                      </Link>
                    </div>
                    {/* title */}
                    <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                    {/* description */}
                    <p className='text-white/60'>{service.description}</p>
                    {/* border */}
                    <div className='border-b border-white/20 w-full'></div>
                  </div>
                ))
              }
          </motion.div>
        </div>
      </section>
    );
  }