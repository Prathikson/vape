"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";
import { featuredProducts } from "@/lib/products";
import type { Product } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import ProductModal from "@/components/ui/ProductModal";
import CTASection from "@/components/sections/CTASection";
import FAQ from "@/components/ui/FAQ";
import TagsMarquee from "@/components/sections/TagsMarquee";

gsap.registerPlugin(ScrollTrigger);

const aboutFAQs = [
  { q: "Where are you located?", a: "We're in Mill Woods, Edmonton at 2803 23 Ave NW, T6L 6T3. Easy parking and right off the main strip." },
  { q: "How long has DRIPD been open?", a: "DRIPD opened in 2021 and has been serving the Mill Woods and South Edmonton community ever since. We started small, grew fast, and are proud to still be locally owned and operated." },
  { q: "Are you affiliated with any national chains?", a: "No — DRIPD is 100% independently owned and operated. We answer to our customers, not a corporate playbook." },
  { q: "Do you do wholesale or B2B orders?", a: "We don't currently offer wholesale. Every product is sold at standard retail pricing to ensure quality control and compliance." },
  { q: "Can I work at DRIPD?", a: "We occasionally hire! Reach out via our contact page with your resume and we'll keep it on file. Must be 19+." },
];

const timeline = [
  { year: "2021", title: "Doors Open", body: "DRIPD launches in Mill Woods with a tight, curated selection and a vision for what a vape shop should feel like." },
  { year: "2022", title: "Community Grows", body: "Word spreads. We double our floor space, triple our SKUs, and hire our first dedicated staff team." },
  { year: "2023", title: "Online Store Launches", body: "Edmonton-wide delivery drops. Customers across the city can now get DRIPD-quality products at their door." },
  { year: "2024", title: "200+ Products", body: "Our catalogue hits 200+ curated SKUs. We start hosting in-store events and brand pop-ups." },
  { year: "2025", title: "Award-Winning", body: "Voted Edmonton's Best Vape Shop by local readership. 4.9★ on Google. Still just getting started." },
];

const values = [
  { label: "Integrity", body: "We ID every customer, every time. No exceptions, no apologies." },
  { label: "Curation", body: "Every product earns shelf space. We test before we stock." },
  { label: "Community", body: "Mill Woods is home. We sponsor local events and give back." },
  { label: "Expertise", body: "Our staff vape. They'll help you find the perfect fit, not the highest margin." },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-text", {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      });
      // Enhanced reveal for gigantic sections
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-black">
      {/* ── GIGANTIC HERO (FULL SCREEN) ───────────────────────────── */}
      <section className="relative w-full h-screen flex flex-col justify-end bg-black overflow-hidden px-6 md:px-12 xl:px-20 pb-20 md:pb-32">
         {/* Subtle background text for texture */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none whitespace-nowrap">
            <span className="text-[35vw] font-black leading-none uppercase">HISTORY</span>
         </div>

        <div className="relative z-10 w-full">
          <p className="text-[#6CC24A] uppercase tracking-[0.4em] text-sm font-bold mb-10">Our Story</p>
          
          <h1 className="leading-[0.85] flex flex-col tracking-tighter select-none">
            <div className="overflow-hidden">
               <span className="page-hero-text block text-[clamp(4rem,15vw,13rem)] font-extralight text-white opacity-90">Built for</span>
            </div>
            <div className="overflow-hidden flex items-center gap-6 md:gap-12 -mt-4 md:-mt-10">
               <span className="page-hero-text block text-[clamp(4rem,15vw,13rem)] font-light italic font-serif text-[#6CC24A]" style={{fontFamily: 'serif'}}>
                 Edmonton.
               </span>
               <div className="page-hero-text w-16 h-16 md:w-32 md:h-32 bg-[#6CC24A] rounded-full flex items-center justify-center shrink-0 shadow-[0_0_50px_rgba(108,194,74,0.3)]">
                  <Check className="text-black w-8 h-8 md:w-16 md:h-16" strokeWidth={4} />
               </div>
            </div>
          </h1>

          <p className="page-hero-text mt-12 text-white/40 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
            We opened DRIPD because Edmonton deserved better. Not a chain. Not a gas station. A proper shop with real expertise, curation, and respect for the community.
          </p>
        </div>
      </section>

      {/* ── VALUES GRID (FULL WIDTH) ─────────────────────────────── */}
      <section className="w-full bg-[#0a0a0a] py-32 md:py-56 px-6 md:px-12 xl:px-20 border-t border-white/5">
        <div className="flex flex-col xl:flex-row gap-24 items-start justify-between">
          <div className="w-full xl:w-1/2">
            <p className="text-[#6CC24A] uppercase tracking-[0.4em] text-xs font-bold mb-8">What We Stand For</p>
            <h2 className="gsap-reveal text-white leading-[0.85] flex flex-col tracking-tighter mb-12">
              <span className="text-[clamp(3.5rem,10vw,8rem)] font-extralight">Principles,</span>
              <span className="text-[clamp(3.5rem,10vw,8rem)] font-extralight italic font-serif" style={{fontFamily: 'serif'}}>not just products.</span>
            </h2>
            <p className="text-white/40 text-xl font-light leading-relaxed max-w-lg">
              Every decision we make — from which brands we carry to how we greet customers — comes back to four core values.
            </p>
          </div>

          <div className="w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {values.map((v, i) => (
              <div
                key={i}
                className="gsap-reveal group p-10 md:p-14 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:bg-white/[0.04] transition-all duration-700"
              >
                <div className="w-4 h-4 rounded-full bg-[#6CC24A] mb-8 group-hover:scale-[2] transition-transform duration-500 shadow-[0_0_20px_#6CC24A]" />
                <h4 className="text-white text-3xl font-light tracking-tight mb-6">{v.label}</h4>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE (GIGANTIC LIST) ──────────────────────────────── */}
      <section className="w-full bg-black py-32 md:py-56 px-6 md:px-12 xl:px-20">
        <p className="text-[#6CC24A] uppercase tracking-[0.4em] text-xs font-bold mb-20 text-center">Our Evolution</p>
        
        <div className="flex flex-col w-full border-t border-white/10">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="gsap-reveal group relative grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-8 xl:gap-20 py-20 md:py-32 border-b border-white/10 hover:bg-white/[0.01] transition-colors"
            >
              <div className="flex flex-col">
                <span className="text-[clamp(4rem,12vw,11rem)] font-extralight tracking-tighter leading-none text-white/10 group-hover:text-[#6CC24A] transition-colors duration-700">
                  {item.year}
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-white text-4xl md:text-6xl font-light tracking-tight mb-8">
                  {item.title}
                </h3>
                <p className="text-white/40 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
                  {item.body}
                </p>
              </div>
              {/* Floating Arrow that appears on hover */}
              <div className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-10 transition-all duration-700">
                 <ArrowRight size={80} className="text-[#6CC24A] font-thin" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────────────── */}
      <TagsMarquee />

      {/* ── GIGANTIC PRODUCT PREVIEW ─────────────────────────────────── */}
      <section className="w-full bg-black py-32 md:py-56 px-6 md:px-12 xl:px-20">
        <div className="flex flex-col xl:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-4xl">
            <p className="text-[#6CC24A] uppercase tracking-[0.4em] text-xs font-bold mb-8">Featured Picks</p>
            <h2 className="gsap-reveal text-white leading-[0.85] flex flex-col tracking-tighter">
              <span className="text-[clamp(3.5rem,10vw,8rem)] font-extralight">A taste of</span>
              <span className="text-[clamp(3.5rem,10vw,8rem)] font-extralight italic font-serif" style={{fontFamily: 'serif'}}>the selection.</span>
            </h2>
          </div>
          <Link href="/products" className="group flex items-center gap-4 text-white text-2xl font-light border-b border-white/20 pb-2 hover:border-[#6CC24A] transition-all">
            Shop All <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform text-[#6CC24A]" />
          </Link>
        </div>

        {/* 3 Col Grid per request */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14">
          {featuredProducts.slice(0, 3).map((product) => (
            <div key={product.id} className="gsap-reveal">
              <ProductCard product={product} onClick={setSelectedProduct} />
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ & CTA ────────────────────────────────────────────────── */}
      <div className="bg-[#0a0a0a] border-t border-white/5">
        <FAQ
          items={aboutFAQs}
          title="Common Questions"
          subtitle="Everything you need to know about our Mill Woods location and operations."
        />
      </div>

      <CTASection
        headline="Come see us"
        italicPart="in Mill Woods."
        subtext="We're open 7 days a week. Come in, browse, ask questions — no pressure. Experience Edmonton's finest curated vape destination."
        primaryLabel="Get Directions"
        primaryHref="/contact"
        secondaryLabel="Shop Online"
        secondaryHref="/products"
      />

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}