import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Shop All Products",
  description: `Browse ${siteConfig.name}'s full catalogue of vape devices, e-liquids, disposables, pods, and accessories. ${siteConfig.location.neighborhood}, Edmonton AB.`,
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
