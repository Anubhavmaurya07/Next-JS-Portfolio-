import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Experience, education and technical skills of Anubhav Maurya, Full Stack Developer.",
  alternates: { canonical: "/resume" },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
