"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb } from 'react-icons/si'

import { Tabs, TabsContent, TabsTrigger, TabsList } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// about data
const about = {
  title: "About me",
  description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum minima recusandae",
  info : [
    {
      fieldName : "Name",
      fieldValue : "Anubhav Maurya",
    },
    {
      fieldName : "Phone",
      fieldValue : "(+ 91) 7068220038",
    },
    {
      fieldName : "Experience",
      fieldValue : "4+ Years (6 Months Industry)",
    },
    {
      fieldName : "Nationality",
      fieldValue : "Indian",
    },
    {
      fieldName : "Email",
      fieldValue : "anubhavmaurya8521@gmail.com",
    },
    {
      fieldName : "Freelance ",
      fieldValue : "Available",
    },
    {
      fieldName : "Languages ",
      fieldValue : "English Hindi",
    },
  ]
};

// experience data
const experience = {
  title : "My Experience",
  description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum minima recusandae",
  items : [
    {
      company : "DigiLateral Solution",
      position : "MERN Stack Developer",
      duration : "6 Months",
    },
    {
      company : "DigiLateral Solution",
      position : "MERN Stack Developer",
      duration : "6 Months",
    },
    {
      company : "DigiLateral Solution",
      position : "MERN Stack Developer",
      duration : "6 Months",
    },
    {
      company : "DigiLateral Solution",
      position : "MERN Stack Developer",
      duration : "6 Months",
    },
    {
      company : "DigiLateral Solution",
      position : "MERN Stack Developer",
      duration : "6 Months",
    },
    {
      company : "DigiLateral Solution",
      position : "MERN Stack Developer",
      duration : "6 Months",
    },
  ]
};

// education data
const education = {
  title : "My Education",
  description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum minima recusandae",
  items : [
    {
      institution : "CBSE",
      degree : "Class 10th",
      duration : "2018-2020",
      marks : "92%",
    },
    {
      institution : "CBSE",
      degree : "Class 12th",
      duration : "2020-2022",
      marks : "88%",
    },
    {
      institution : "University of Mumbai",
      degree : "BSc IT",
      duration : "2022-2025",
      marks: "9.5 CGPA"
    },
  ]
};

// skills data
const skills = {
  title : "My Skills",
  description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum minima recusandae",
  items : [
    {
      icon : <FaHtml5 />,
      name : "HTML 5",
    },
    {
      icon : <FaCss3 />,
      name : "CSS 3",
    },
    {
      icon : <FaJs />,
      name : "JavaScript",
    },
    {
      icon : <FaReact />,
      name : "React JS",
    },
    {
      icon : <FaNodeJs />,
      name : "Node JS",
    },
    {
      icon : <SiExpress />,
      name : "Express JS",
    },
    {
      icon : <SiMongodb />,
      name : "Mongo DB",
    },
    {
      icon : <SiTailwindcss />,
      name : "Tailwind CSS",
    },
    {
      icon : <SiNextdotjs />,
      name : "Next JS",
    },

  ]
};

export default function Resume() {
    return (
      <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity : 1,
          transition : {delay: 2.4, duration: 0.4, ease: "easeIn"}
        }}
        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue='experience'
            className='flex flex-col xl:flex-row gap-[60px]'
          >
            <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
              <TabsTrigger value='experience'>Experience</TabsTrigger>
              <TabsTrigger value='education'>Education</TabsTrigger>
              <TabsTrigger value='skills'>Skills</TabsTrigger>
              <TabsTrigger value='about'>About me</TabsTrigger>
            </TabsList>
            {/* content */}
            <div className='min-h-[70vh] w-full'>
              <TabsContent value='experience' className='w-full'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{experience.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                  <ScrollArea className='h-[400px]'>
                    <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                      {
                        experience.items.map((item, index) => (
                          <li key={index}
                            className='bg-[#232329] h-[183px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                          >
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                            <div className='flex items-center gap-1'>
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{item.company}</p>
                            </div>
                          </li>
                        ))
                      }
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value='education' className='w-full'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{education.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                  <ScrollArea className='h-[400px]'>
                    <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                      {
                        education.items.map((item, index) => (
                          <li key={index}
                            className='bg-[#232329] h-[183px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                          >
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[40px] text-center lg:text-left'>{item.degree}</h3>
                            <h4>{item.marks}</h4>
                            <div className='flex items-center gap-1'>
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{item.institution}</p>
                            </div>
                          </li>
                        ))
                      }
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value='skills' className='w-full h-full'>
                <div className='flex flex-col gap-[30px]'>
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                  </div>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                    {
                      skills.items.map((skill, index) => (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value='about' className='w-full text-center xl:text-left'>
                <div className='flex flex-col gap-[30px]'>
                  <h3 className='text-4xl font-bold'>{about.title}</h3>
                  <p className='max-w-[600px] mx-auto xl:mx-0 text-white/60'>{about.description}</p>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] xl:[750px] xl:gap-x-16 mx-auto xl:mx-0'>
                    {
                      about.info.map((item, index) => (
                        <li key={index}
                          className='flex items-center justify-center xl:justify-start gap-4'
                        >
                          <span className='text-white/60'>{item.fieldName}</span>
                          <span className='text-[1rem]'>{item.fieldValue}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    );
  }