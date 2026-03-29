"use client";

import React, { useEffect, useRef } from "react";
import { Star, Quote, User2, Verified, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Jordan M.",
    handle: "@jordanvapes",
    text: "Best vape shop in Edmonton, hands down. The staff actually know their stuff and helped me find the perfect setup. Been a customer for 2 years.",
    tag: "Pods",
    featured: true,
  },
  {
    name: "Aisha K.",
    handle: "@aishakmills",
    text: "Finally a shop with a real selection. They carry all the brands I actually want plus their own recommendations are always on point.",
    tag: "E-Liquids",
    featured: false,
  },
  {
    name: "Tyler R.",
    handle: "@tylerr_yyc",
    text: "Switched from another shop and never looking back. Great prices, always stocked, and the Mill Woods location is super convenient.",
    tag: "Devices",
    featured: false,
  },
  {
    name: "Priya S.",
    handle: "@spriyastyle",
    text: "Love that they ID properly and take the age restriction seriously. Makes it feel like a real, reputable shop. The Elf Bars here are always the freshest.",
    tag: "Disposables",
    featured: true,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);


  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-black py-24 md:py-48 px-6 md:px-12 xl:px-20 overflow-hidden"
    >
      {/* ── HEADER AREA (GIGANTIC) ─────────────────────────────── */}
      <div className="relative z-10 w-full mb-24 md:mb-40 flex flex-col xl:flex-row xl:items-end justify-between gap-12">
        <div className="max-w-5xl">
          <p className="text-[#6CC24A] uppercase tracking-[0.4em] text-xs font-bold mb-8">
            The Community
          </p>
          <h2 className="text-white leading-[0.85] flex flex-col tracking-tighter">
            <span className="text-[clamp(3.5rem,12vw,10.5rem)] font-extralight opacity-90">Real stories from</span>
            <span className="text-[clamp(3.5rem,12vw,10.5rem)] font-extralight italic font-serif text-[#6CC24A]" style={{ fontFamily: 'serif' }}>
              real locals.
            </span>
          </h2>
        </div>

        {/* Global Rating Summary */}
        <div className="flex flex-col items-start xl:items-end gap-6">
          <div className="flex items-center gap-4">
             <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} fill="#6CC24A" color="#6CC24A" strokeWidth={0} />
                ))}
             </div>
             <span className="text-white text-4xl font-light tracking-tighter">4.9 / 5.0</span>
          </div>
          <div className="flex items-center gap-3 text-white/30 text-xs font-bold uppercase tracking-widest px-1">
             <div className="w-2 h-2 rounded-full bg-[#6CC24A] animate-pulse" />
             Based on 1,200+ Google Reviews
          </div>
        </div>
      </div>

      {/* ── GIGANTIC BENTO GRID ──────────────────────────────────── */}
      <div className="testimonial-grid relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-10">
        {testimonials.map((t, i) => (
          <div 
            key={i} 
            className={`
              testimonial-card group relative flex flex-col justify-between p-10 md:p-14 
              bg-[#0c0c0c] border border-white/5 rounded-[3.5rem] 
              overflow-hidden transition-all duration-700 hover:border-[#6CC24A]/40
              ${t.featured ? "lg:col-span-2" : "lg:col-span-1"}
            `}
          >
            {/* Unique Feature: Ghost Handle Signature */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap group-hover:text-[#6CC24A]/[0.03] transition-colors duration-1000">
               {t.handle}
            </div>

            {/* Top Row: Verification & Quote Icon */}
            <div className="relative z-10 flex justify-between items-start mb-16">
               <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 shadow-2xl">
                  <Verified size={14} className="text-[#6CC24A]" />
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Verified Resident</span>
               </div>
               <Quote size={48} className="text-white/5 group-hover:text-[#6CC24A]/20 transition-colors duration-700" />
            </div>

            {/* Middle: Content */}
            <div className="relative z-10 mb-16">
               <p className="text-white text-2xl md:text-3xl font-extralight leading-[1.3] tracking-tight">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>

            {/* Bottom Row: User Info */}
            <div className="relative z-10 flex items-center justify-between mt-auto pt-10 border-t border-white/5">
              <div className="flex items-center gap-6">
                {/* Clean SVG Profile Avatar */}
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#6CC24A] group-hover:bg-[#6CC24A] group-hover:text-black transition-all duration-500 shadow-xl">
                  <User2 size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white text-2xl font-light tracking-tight">{t.name}</h4>
                  <p className="text-white/20 text-sm font-mono lowercase tracking-tighter">{t.handle}</p>
                </div>
              </div>
              
              <div className="hidden sm:flex flex-col items-end gap-1">
                 <span className="text-[#6CC24A] text-[10px] font-black uppercase tracking-[0.2em]">{t.tag}</span>
                 <div className="flex gap-0.5">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} size={10} fill="#6CC24A" color="#6CC24A" strokeWidth={0} />
                    ))}
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}