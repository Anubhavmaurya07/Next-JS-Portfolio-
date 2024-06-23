"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';


export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-fullh-[44px] px-6">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">
                <TypeAnimation 
                  sequence={[
                    '',
                    2400,
                    'Anubhav Maurya',
                    1000, 
                    'Web Developer',
                    1000, 
                    'App Developer',
                    1000, 
                    'UI/UX Designer',
                    1000, 
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
          {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant={"outline"} size={"lg"} className="flex uppercase items-center gap-2">
              <span>Download CV</span><FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerSyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        
        </div>
      </div>

      <Stats />
    </section>
  );
}
