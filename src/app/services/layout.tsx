import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Packages",
  description:
    "Websites, mobile apps and custom software like booking systems and CRMs for every kind of business, plus care plans — by Anubhav Maurya, Mumbai.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
