"use client";

import { FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiRedux, SiRedis, SiMui, SiJsonwebtokens } from 'react-icons/si'

import { Tabs, TabsContent, TabsTrigger, TabsList } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { siteConfig, yearsOfExperience } from '@/lib/site';

// about data
const about = {
  title: "About me",
  description :
    "Full Stack MERN Developer building scalable web applications end to end — REST APIs, MongoDB aggregation pipelines and performance-tuned React frontends. I care about response times, clean architecture and interfaces that stay fast as they grow.",
  info : [
    {
      fieldName : "Name",
      fieldValue : siteConfig.name,
    },
    {
      fieldName : "Phone",
      fieldValue : siteConfig.phone,
    },
    {
      fieldName : "Experience",
      fieldValue : `${yearsOfExperience()}+ years`,
    },
    {
      fieldName : "Location",
      fieldValue : siteConfig.location,
    },
    {
      fieldName : "Nationality",
      fieldValue : "Indian",
    },
    {
      fieldName : "Email",
      fieldValue : siteConfig.email,
    },
    {
      fieldName : "Languages",
      fieldValue : "English, Hindi",
    },
  ]
};

// experience data
type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
  points: string[];
  // Optional deep-dive: named systems owned within the role.
  systems?: { name: string; summary: string; details: string[] }[];
};

const experience: { title: string; description: string; items: ExperienceItem[] } = {
  title : "My Experience",
  description : `Full Stack Developer with ${yearsOfExperience()}+ years of hands-on experience building scalable web applications — from REST API design and MongoDB optimisation through to performance-tuned React frontends.`,
  items : [
    {
      company : "Travkings Tours and Travels",
      position : "Senior Software Engineer",
      duration : "Apr 2026 - Present",
      points : [
        "Own the full product suite end to end — a multi-branch travel ERP, a sales CRM, an internal communications platform and the public booking website.",
        "Architected a shared-database integration where the CRM acts as source of truth for commercial documents and pushes bookings and payments into the ERP as accounting vouchers.",
        "Work across Node.js/Express, MongoDB, React, Next.js and React Native, with deployments on AWS EC2 behind nginx and pm2.",
      ],
      systems : [
        {
          name : "KBiz-360 ERP",
          summary : "Multi-branch, multi-currency double-entry accounting and operations platform for a travel business.",
          details : [
            "Built a Tally-compatible posting engine over a 28-group chart of accounts, with per-branch ledger codes and branch-local currencies.",
            "Implemented seven voucher types with bill-wise settlement, on-account allocation and a three-level check → verify → approve authorisation chain.",
            "Automated inter-branch transactions with stateless mirror matching and three-way reconciliation across paired branch ledgers.",
            "Delivered statutory handling for GST, TDS and TCS, including automatic tax posting and jurisdiction-aware rate selection.",
            "Built the financial reporting suite — Day Book, Trial Balance, Cash Book, P&L, Balance Sheet, notes to financial statements and AR/AP ageing.",
            "Designed bank reconciliation supporting many-to-many statement-to-ledger matching, with a verify → freeze → certify → lock approval ladder.",
            "Added IATA BSP statement import via PDF parsing, plus a fifteen-day bill-level cash-flow plan built on the BSP settlement calendar.",
            "Implemented an FX model with USD mirror ledgers and realised gain/loss recognition in the book currency.",
          ],
        },
        {
          name : "Sales CRM",
          summary : "Enquiry-to-booking pipeline covering proposals, approvals and payment capture.",
          details : [
            "Built a 43-entity Express and Mongoose backend with role-based access control and per-user permission grants.",
            "Implemented the query → proposal → confirmation → booking workflow, including multi-option live fare proposals a client selects from at confirmation.",
            "Generated branded PDF proposals and invoices with template versioning and cache invalidation on edit.",
            "Integrated per-user Outlook mailboxes through the Microsoft Graph API and a WhatsApp Business webhook for client messaging.",
            "Offloaded long-running work to BullMQ background workers.",
          ],
        },
        {
          name : "Smart Connect",
          summary : "Internal communications and workforce app for iOS, Android and web.",
          details : [
            "Built a chat suite at parity with mainstream messengers — direct messages, groups, departments, mentions, forwarding, attachments and deep message search.",
            "Implemented local-first message storage so history stays instantly available offline and syncs on reconnect.",
            "Delivered geofenced attendance with radius and Wi-Fi verification, plus automatic branch-local end-of-day checkout.",
            "Shipped an iOS home-screen widget with WidgetKit and server-driven push notification badge counts.",
            "Published to the Play Store and paired with a browser-based web client.",
          ],
        },
        {
          name : "Travkings Booking Engine",
          summary : "Public-facing website and B2C flight booking platform.",
          details : [
            "Integrated a GDS supplier API end to end — availability search, fare rules, booking, PNR polling and ticket issuance.",
            "Built the internal-to-supplier payload mapper that translates the platform booking model into the provider contract.",
            "Deployed on a dedicated EC2 instance behind nginx with pm2 process management and CI-driven releases.",
          ],
        },
      ],
    },
    {
      company : "Binny's Jewellery Pvt Ltd",
      position : "Full-Stack MERN Developer",
      duration : "May 2025 - Apr 2026",
      points : [
        "Built and optimised REST APIs, improving response time by 35-40%.",
        "Implemented MongoDB aggregation pipelines, indexing and query optimisation.",
        "Integrated Redux / React Query for state management and API caching.",
        "Improved frontend performance with code splitting, lazy loading and memoisation.",
        "Implemented authentication and role-based access control.",
      ],
    },
    {
      company : "Xircls Pvt Ltd",
      position : "Frontend Developer (Intern)",
      duration : "Jun 2024 - Dec 2024",
      points : [
        "Built reusable UI components with React Hooks and functional components.",
        "Converted Figma designs into responsive, accessible layouts.",
        "Reduced unnecessary re-renders and improved rendering performance.",
      ],
    },
    {
      company : "Digilateral Solution",
      position : "Backend Developer (Intern)",
      duration : "Jan 2024 - May 2024",
      points : [
        "Developed RESTful APIs with Node.js and Express.js.",
        "Implemented JWT authentication and middleware validation.",
        "Built CRUD operations with MongoDB and Mongoose on an MVC architecture.",
      ],
    },
  ]
};

// education data
const education = {
  title : "My Education",
  description : "Graduated with a B.Sc in Information Technology from the University of Mumbai, where I built a foundation in data structures, systems and software architecture — and taught myself full-stack development alongside it.",
  items : [
    {
      institution : "University of Mumbai",
      degree : "BSc Information Technology",
      duration : "2022 - 2025",
      marks: "9.6 CGPA"
    },
    {
      institution : "Children Senior Secondary School, Azamgarh",
      degree : "CBSE - Class XII",
      duration : "2020 - 2022",
      marks : "88%",
    },
  ]
};

// skills data
const skills = {
  title : "My Skills",
  description : "Full Stack Developer working across the MERN stack and Next.js, with a focus on REST API design, MongoDB aggregation, background job processing and frontend performance.",
  items : [
    { icon : <FaJs />, name : "JavaScript" },
    { icon : <FaReact />, name : "React JS" },
    { icon : <SiNextdotjs />, name : "Next JS" },
    { icon : <SiRedux />, name : "Redux / RTK Query" },
    { icon : <FaNodeJs />, name : "Node JS" },
    { icon : <SiExpress />, name : "Express JS" },
    { icon : <SiMongodb />, name : "Mongo DB" },
    { icon : <SiRedis />, name : "Redis / BullMQ" },
    { icon : <SiTailwindcss />, name : "Tailwind CSS" },
    { icon : <SiMui />, name : "Material UI" },
    { icon : <SiJsonwebtokens />, name : "JWT Auth" },
    { icon : <FaGitAlt />, name : "Git" },
  ]
};

export default function Resume() {
    return (
      <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity : 1,
          transition : {delay: 0.1, duration: 0.4, ease: "easeIn"}
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
              <TabsContent value='experience' forceMount className='w-full data-[state=inactive]:hidden'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{experience.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                  <ScrollArea className='h-[560px] pr-4'>
                    <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                      {
                        experience.items.map((item, index) => (
                          <li key={index}
                            className={`bg-[#232329] py-6 px-8 rounded-xl flex flex-col items-center lg:items-start gap-2 ${item.systems ? 'xl:col-span-2' : ''}`}
                          >
                            <span className='text-accent text-sm'>{item.duration}</span>
                            <h3 className='text-xl leading-snug text-center lg:text-left'>{item.position}</h3>
                            <div className='flex items-center gap-2'>
                              <span className='w-[6px] h-[6px] rounded-full bg-accent shrink-0'></span>
                              <p className='text-white/60'>{item.company}</p>
                            </div>
                            <ul className='mt-2 flex flex-col gap-2 text-left'>
                              {item.points.map((point, i) => (
                                <li key={i} className='flex gap-3 text-sm text-white/60 leading-relaxed'>
                                  <span className='text-accent shrink-0'>&#8250;</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>

                            {item.systems && (
                              <div className='mt-5 w-full flex flex-col gap-5 text-left'>
                                <p className='text-xs uppercase tracking-[2px] text-white/55'>
                                  Systems built
                                </p>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                  {item.systems.map((system, i) => (
                                    <div
                                      key={i}
                                      className='border-l-2 border-accent/40 pl-5 flex flex-col gap-2'
                                    >
                                      <h4 className='text-base text-accent'>{system.name}</h4>
                                      <p className='text-sm text-white/70 leading-relaxed'>
                                        {system.summary}
                                      </p>
                                      <ul className='flex flex-col gap-1.5'>
                                        {system.details.map((detail, j) => (
                                          <li
                                            key={j}
                                            className='flex gap-2.5 text-sm text-white/50 leading-relaxed'
                                          >
                                            <span className='text-accent/60 shrink-0'>&#8250;</span>
                                            <span>{detail}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </li>
                        ))
                      }
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value='education' forceMount className='w-full data-[state=inactive]:hidden'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{education.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                  <ScrollArea className='h-[460px] pr-2'>
                    <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                      {
                        education.items.map((item, index) => (
                          <li key={index}
                            className='bg-[#232329] min-h-[183px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2'
                          >
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl leading-snug text-center lg:text-left'>{item.degree}</h3>
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
              <TabsContent value='skills' forceMount className='w-full h-full data-[state=inactive]:hidden'>
                <div className='flex flex-col gap-[30px]'>
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                  </div>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                    {
                      skills.items.map((skill, index) => (
                        <li
                          key={index}
                          className='w-full h-[150px] bg-[#232329] rounded-xl flex flex-col items-center justify-center gap-3 group'
                        >
                          {/* The name is rendered, not hidden behind a tooltip —
                              hover does not exist on touch, and a tooltip is
                              invisible to crawlers and screen readers alike. */}
                          <div className='text-5xl group-hover:text-accent transition-all duration-300'>
                            {skill.icon}
                          </div>
                          <span className='text-xs text-white/60 text-center px-2 leading-tight'>
                            {skill.name}
                          </span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value='about' forceMount className='w-full text-center xl:text-left data-[state=inactive]:hidden'>
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