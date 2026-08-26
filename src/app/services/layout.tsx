import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What I do",
  description:
    "Backend and API engineering, full-stack product development, systems integration and performance work — by Anubhav Maurya.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
