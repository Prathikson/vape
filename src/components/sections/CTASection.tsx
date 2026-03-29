"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ParallaxImage from "../ui/ParrallaxImage";

interface CTASectionProps {
  headline?: string;
  italicPart?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  dark?: boolean;
}

export default function CTASection({
  headline = "Ready to elevate",
  italicPart = "your experience?",
  subtext = "Visit us in Mill Woods, Edmonton — or shop online 24/7. Premium selection curated for you.",
  primaryLabel = "Shop Now",
  primaryHref = "/products",
  secondaryLabel = "Find Us",
  secondaryHref = "/contact",
  imageSrc = "https://images.unsplash.com/photo-1550147760-44c9966d6bc7?auto=format&fit=crop&q=80&w=1200",
  dark = true,
}: CTASectionProps) {
  return (
    <section
      className={`relative w-full py-24 md:py-48 px-6 md:px-12 xl:px-20 overflow-hidden flex flex-col items-center ${
        dark ? "bg-[#0a0a0a]" : "bg-[#6CC24A]"
      }`}
    >
      {/* ── AMBIENT BACKGROUND ACCENT ────────────────────────────── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full blur-[120px] opacity-[0.03] pointer-events-none" 
           style={{ background: dark ? '#6CC24A' : 'white' }} />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-16 xl:gap-32">
        
        {/* ── LEFT: GIGANTIC TEXT ─────────────────────────────────── */}
        <div className="w-full lg:w-1/2">
          <p className={`text-xs font-bold uppercase tracking-[0.4em] mb-10 ${dark ? 'text-[#6CC24A]' : 'text-black/40'}`}>
            {dark ? "DRIPD PREMIUM" : "GET STARTED"}
          </p>
          
          <h2 className={`leading-[0.85] flex flex-col tracking-tighter mb-10 ${dark ? 'text-white' : 'text-black'}`}>
            <span className="text-[clamp(3.5rem,8vw,7.5rem)] font-extralight">{headline}</span>
            <span className="text-[clamp(3.5rem,8vw,7.5rem)] font-extralight italic font-serif" style={{ fontFamily: 'serif' }}>
              {italicPart}
            </span>
          </h2>

          <p className={`text-xl font-light leading-relaxed max-w-xl mb-12 ${dark ? 'text-white/40' : 'text-black/60'}`}>
            {subtext}
          </p>

          <div className="flex flex-wrap gap-6">
            <Link 
              href={primaryHref} 
              className={`flex items-center gap-3 px-12 py-6 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-xl ${
                dark ? 'bg-[#6CC24A] text-black' : 'bg-black text-white'
              }`}
            >
              {primaryLabel} <ArrowRight size={22} />
            </Link>
            
            <Link 
              href={secondaryHref} 
              className={`px-12 py-6 rounded-full border font-medium text-lg transition-all backdrop-blur-sm ${
                dark ? 'border-white/20 text-white hover:bg-white/5' : 'border-black/20 text-black hover:bg-black/5'
              }`}
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>

        {/* ── RIGHT: GIGANTIC GSAP PARALLAX IMAGE ─────────────────── */}
        <div className="w-full lg:w-1/2 h-[250px] md:h-[200px] xl:h-[550px]">
          <ParallaxImage 
            src={imageSrc} 
            className="w-full h-full" 
            alt="CTA Featured Experience"
          />
        </div>

      </div>
    </section>
  );
}