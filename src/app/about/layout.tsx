import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about DRIPD — Edmonton's independently owned premium vape shop in Mill Woods, AB. Our story, our values, our team.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
