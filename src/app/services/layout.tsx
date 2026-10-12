import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Packages",
  description:
    "Business websites, personal and portfolio sites, custom software like booking systems and CRMs, and website care plans — by Anubhav Maurya, Mumbai.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
