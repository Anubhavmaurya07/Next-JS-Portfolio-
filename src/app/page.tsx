import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import Typewriter from "@/components/Typewriter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { siteConfig } from "@/lib/site";

// Server component: everything here renders to plain HTML, with only the
// typewriter and counters hydrating on the client.
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-6">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Websites &amp; Software for Businesses</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">
                <Typewriter />
              </span>
            </h1>
            <p className="max-w-[540px] mb-9 text-white/80">
              I build fast, mobile-friendly websites that bring you enquiries —
              and the custom software that keeps a business running, like
              booking systems, CRMs and billing dashboards. Software I built is
              used every day by a travel company across five branches in three
              countries.
            </p>
            {/* buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button asChild size={"lg"}>
                  <Link href="/contact">Get a free quote</Link>
                </Button>
                <Button asChild variant={"outline"} size={"lg"} className="gap-2">
                  <a href={siteConfig.cv} download>
                    <span>Download CV</span><FiDownload className="text-xl" aria-hidden="true" />
                  </a>
                </Button>
              </div>
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
