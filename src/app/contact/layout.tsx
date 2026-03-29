import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with DRIPD. Visit us at ${siteConfig.location.address}, ${siteConfig.location.neighborhood}, Edmonton AB. ${siteConfig.location.phone}`,
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
