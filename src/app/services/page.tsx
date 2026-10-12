"use client";

import { BsArrowDownRight } from 'react-icons/bs'
import { FaWhatsapp, FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { contactHref, packages, services } from '@/lib/services';
import { whatsappLink } from '@/lib/site';

// Written for business owners: what they get and why it helps, in plain words.
// The technical depth lives on the projects and resume pages for anyone who
// wants it.
export default function Services() {
    return (
      <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-8'>
        <div className="container mx-auto">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{delay: 0.1, duration: 0.4, ease: "easeIn"}}}
            >
              <div className='mb-12 xl:mb-16 max-w-[620px]'>
                <h1 className='h2 mb-4'>What I can build for you<span className='text-accent'>.</span></h1>
                <p className='text-white/60'>
                  Whatever your business — a shop, clinic, restaurant, school,
                  office or startup — I can build what it needs: a website, an
                  app, or the software your team works in. Built properly,
                  explained simply, and looked after once it&apos;s live.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
              {
                services.map((service, index) => (
                  <div key={service.num}
                    className={`flex-1 flex flex-col justify-center gap-6 group ${
                      // an odd last card spans the full row instead of sitting alone
                      index === services.length - 1 && services.length % 2 === 1
                        ? 'md:col-span-2'
                        : ''
                    }`}
                  >
                    {/* top */}
                    <div className='flex w-full justify-between items-center'>
                      <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                      <Link href={contactHref(service.service)}
                        aria-label={`Get a quote for ${service.title}`}
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

              {/* packages */}
              <div className='mt-20 xl:mt-28' id='packages'>
                <div className='mb-10 max-w-[620px]'>
                  <h2 className='h2 mb-4'>Packages<span className='text-accent'>.</span></h2>
                  <p className='text-white/60'>
                    Pick the one closest to what you need — every project gets a
                    clear price and timeline in writing before any work starts.
                  </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                  {packages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className={`relative flex flex-col gap-6 p-8 rounded-xl bg-[#27272c] border ${
                        pkg.popular ? 'border-accent' : 'border-white/10'
                      }`}
                    >
                      {pkg.popular && (
                        <span className='absolute -top-3 left-8 rounded-full bg-accent text-primary text-xs font-semibold uppercase tracking-[1px] px-3 py-1'>
                          Most popular
                        </span>
                      )}
                      <div>
                        <h3 className='text-2xl font-bold mb-2'>{pkg.name}</h3>
                        <p className='text-white/60 text-sm lg:min-h-[3.75rem]'>{pkg.forWho}</p>
                      </div>
                      <div className='text-3xl font-extrabold text-accent'>
                        {pkg.price ?? 'Get a quote'}
                      </div>
                      <ul className='flex flex-col gap-3 flex-1'>
                        {pkg.features.map((feature) => (
                          <li key={feature} className='flex gap-3 text-white/80'>
                            <FaCheck className='text-accent mt-1 shrink-0' aria-hidden='true' />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className='flex flex-col gap-3'>
                        <a
                          href={whatsappLink(`Hi Anubhav, I'm interested in the ${pkg.name} package. Can we talk?`)}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={`inline-flex items-center justify-center gap-2 h-[48px] px-6 rounded-full font-semibold transition-colors ${
                            pkg.popular
                              ? 'bg-accent text-primary hover:bg-accent-hover'
                              : 'border border-accent text-accent hover:bg-accent hover:text-primary'
                          }`}
                        >
                          <FaWhatsapp className='text-xl' aria-hidden='true' />
                          Ask on WhatsApp
                        </a>
                        <Link
                          href={contactHref(pkg.service)}
                          className='text-center text-sm text-white/60 hover:text-accent transition-colors'
                        >
                          or send your details by email
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <p className='mt-8 text-white/60 text-sm max-w-[720px]'>
                  After launch, any package can add a monthly care plan — updates,
                  backups, hosting and fixes handled for you. Already have a
                  website someone else built? The care plan covers that too.
                </p>
              </div>
          </motion.div>
        </div>
      </section>
    );
  }
