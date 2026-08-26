import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import Typewriter from "@/components/Typewriter";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { siteConfig } from "@/lib/site";

// Server component so <Stats /> can fetch live GitHub numbers at build time.
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-6">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">
                <Typewriter />
              </span>
            </h1>
            <p className="max-w-[540px] mb-9 text-white/80">
              I build systems businesses actually run on — a multi-branch,
              multi-currency accounting platform, a live flight booking engine,
              and the internal apps that hold them together. Node.js and MongoDB
              on the back, React and Next.js on the front.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href={siteConfig.cv} download>
                <Button variant={"outline"} size={"lg"} className="flex uppercase items-center gap-2">
                  <span>Download CV</span><FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
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
