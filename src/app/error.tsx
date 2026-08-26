"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center py-12">
      <div className="container mx-auto text-center flex flex-col items-center gap-6">
        <h1 className="h2">
          Something went wrong<span className="text-accent">.</span>
        </h1>
        <p className="max-w-[500px] text-white/60">
          An unexpected error occurred while loading this page. Try again — if it keeps
          happening, please let me know.
        </p>
        <Button size="md" onClick={reset} className="mt-2">
          Try again
        </Button>
      </div>
    </section>
  );
}
