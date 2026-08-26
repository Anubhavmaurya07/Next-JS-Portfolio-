"use client";

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link';
import { motion } from 'framer-motion';

// Framed as capabilities rather than freelance packages — the rest of the site
// says "Senior Software Engineer, full-time", and a sales pitch fights that.
const services = [
  {
    num: '01',
    title: "Backend & API Engineering",
    description:
      "REST APIs designed to stay fast as the data grows — MongoDB aggregation pipelines, indexing and query tuning, cursor pagination, and heavy write paths moved onto Redis-backed queues so responses never wait on work the caller didn't ask for.",
    href: "/contact",
  },
  {
    num: '02',
    title: "Full-Stack Product Development",
    description:
      "Whole products, not slices of one: schema through to interface. Most recently a multi-branch accounting platform, a sales CRM and a booking engine — each taken from an empty repository to something a business runs its day on.",
    href: "/contact",
  },
  {
    num: '03',
    title: "Systems Integration",
    description:
      "Making other people's systems behave. GDS flight suppliers, Microsoft Graph mailboxes, WhatsApp Business, payment and statement imports — mapped behind a clean internal contract so a provider's quirks stay in one file instead of spreading.",
    href: "/contact",
  },
  {
    num: '04',
    title: "Performance & Reliability",
    description:
      "Finding where the time actually goes and taking it back. Response times cut 35-40% through query and index work; frontends sped up with code splitting, lazy loading and memoisation; background workers keeping the request path short.",
    href: "/contact",
  },
];

export default function Services() {
    return (
      <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-8'>
        <div className="container mx-auto">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{delay: 0.1, duration: 0.4, ease: "easeIn"}}}
            >
              <div className='mb-12 xl:mb-16 max-w-[620px]'>
                <h1 className='h2 mb-4'>What I do<span className='text-accent'>.</span></h1>
                <p className='text-white/60'>
                  Four things I keep coming back to, and what they look like in practice.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
              {
                services.map((service, index) => (
                  <div key={index}
                    className='flex-1 flex flex-col justify-center gap-6 group'
                  >
                    {/* top */}
                    <div className='flex w-full justify-between items-center'>
                      <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                      <Link href={service.href}
                        aria-label={`Get in touch about ${service.title}`}
                        className='w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center group-hover:bg-accent transition-all duration-500 hover:-rotate-45'
                      >
                        <BsArrowDownRight className='text-primary text-3xl'/>
                      </Link>
                    </div>
                    {/* title */}
                    <h2 className='text-[30px] xl:text-[34px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                    {/* description */}
                    <p className='text-white/60'>{service.description}</p>
                    {/* border */}
                    <div className='border-b border-white/20 w-full'></div>
                  </div>
                ))
              }
              </div>
          </motion.div>
        </div>
      </section>
    );
  }
