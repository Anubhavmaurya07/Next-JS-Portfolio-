import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-12">
      <div className="container mx-auto text-center flex flex-col items-center gap-6">
        <p className="text-8xl xl:text-9xl font-extrabold text-outline text-transparent">404</p>
        <h1 className="h2">
          This page doesn&apos;t exist<span className="text-accent">.</span>
        </h1>
        <p className="max-w-[500px] text-white/60">
          The link may be broken or the page may have moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link href="/">
            <Button size="md">Back to home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="md">Get in touch</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
