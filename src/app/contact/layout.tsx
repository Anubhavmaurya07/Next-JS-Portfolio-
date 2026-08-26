import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a project in mind? Get in touch with Anubhav Maurya to discuss your idea.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
