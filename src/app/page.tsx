"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Zap, Shield, Star, MapPin, Plus } from "lucide-react";
import { featuredProducts } from "@/lib/products";
import type { Product } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import ProductModal from "@/components/ui/ProductModal";
import TagsMarquee from "@/components/sections/TagsMarquee";
import CTASection from "@/components/sections/CTASection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import FAQ from "@/components/ui/FAQ";

gsap.registerPlugin(ScrollTrigger);

 const categories = [
    { name: "Devices & Mods", tags: ["Box Mods", "Pod Systems", "Starter Kits"], color: "hover:text-[#85C7F2]" },
    { name: "E-Liquids", tags: ["Freebase", "Salt Nic", "60ml", "120ml"], color: "hover:text-[#FFEA00]" },
    { name: "Disposables", tags: ["600 Puffs", "5000 Puffs", "Rechargeable"], color: "hover:text-[#6CC24A]" },
    { name: "Pods & Coils", tags: ["Closed Pods", "Open Pods", "Replacement"], color: "hover:text-white" },
    { name: "Accessories", tags: ["Batteries", "Drip Tips", "Cases"], color: "hover:text-[#6CC24A]" },
  ];

const homeFAQs = [
  { q: "Do I need to be 19+ to shop?", a: "Yes — all customers must be 19 or older to purchase from DRIPD, both in-store and online. We ID on every purchase." },
  { q: "What payment methods do you accept?", a: "We accept Visa, Mastercard, Amex, Apple Pay, Google Pay, and Interac Debit — both in-store and online at checkout." },
  { q: "Do you offer local delivery?", a: "We offer same-day delivery within Edmonton for orders placed before 3pm. Flat rate of $5. Free over $60." },
  { q: "Can I return or exchange products?", a: "Unopened products can be returned within 7 days with receipt. We do not accept returns on e-liquids or disposables that have been used." },
  { q: "Do you carry Canadian-compliant disposables?", a: "Yes. All disposables we carry are compliant with Health Canada regulations. We only stock products that meet the 20mg nicotine cap." },
];

const whyUs = [
  {
    icon: <Zap size={24} />,
    title: "Expert Staff",
    body: "Our team vapes — we test everything we stock. Real advice from real people, not upsells.",
  },
  {
    icon: <Shield size={24} />,
    title: "Compliant & Safe",
    body: "Everything we carry meets Health Canada standards. Strict 19+ enforcement, every time.",
  },
  {
    icon: <Star size={24} />,
    title: "Curated Selection",
    body: "No filler. Every product earns its shelf space. Only the best devices, liquids, and accessories.",
  },
  {
    icon: <MapPin size={24} />,
    title: "Local & Community",
    body: "Born in Mill Woods, built for Edmonton. We know this city and we take care of our regulars.",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.from(".hero-line", {
        yPercent: 110,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.3,
      });

      gsap.from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      // Scroll reveals
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef}>
      <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden">
      {/* ── BACKGROUND IMAGE ────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero.jpg"
          alt="Lifestyle Background"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay to help text pop */}
        <div className="absolute inset-0 bg-black/10 md:bg-transparent md:bg-gradient-to-t md:from-black/40 md:to-transparent" />
      </div>

      {/* ── MAIN CONTENT ────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-full mx-auto px-6 pb-12 md:pb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
        
        {/* Left Side: Headline & CTA */}
        <div className="max-w-4xl">
          <h1 className="text-white leading-[0.85] flex flex-col select-none">
            <span 
              className="text-[clamp(3.5rem,10vw,8rem)] font-light italic tracking-tight"
              style={{ fontFamily: 'serif' }} // Using system serif for that elegant 'Ready for' look
            >
              Ready for
            </span>
            <span className="text-[clamp(4rem,14vw,11rem)] font-extrabold tracking-tighter -mt-2 md:-mt-6">
              Summer for $0?
            </span>
          </h1>

          <div className="mt-10">
            <Link 
              href="/shop" 
              className="inline-flex items-center justify-center bg-[#6CC24A] text-black font-bold px-12 py-5 rounded-full text-xl hover:bg-[#5db13e] transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Side: Floating Promotion Widgets (Matching Reference) */}
        <div className="flex flex-col items-end gap-4 w-full md:max-w-md">
          
          {/* Tagline Pill */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full py-2.5 px-5 flex items-center gap-4 text-white text-sm shadow-xl">
            <span className="opacity-90">Premium devices & local flavors in Edmonton</span>
            <span className="bg-[#FFEA00] text-black font-black px-2 py-0.5 rounded text-[10px] uppercase tracking-widest">
              Limited Offer!
            </span>
          </div>

          {/* Floating Promotion Card */}
          <div className="relative bg-[#1a2d1e]/80 backdrop-blur-2xl p-6 rounded-[2.5rem] border border-white/5 flex items-center gap-6 shadow-2xl w-full">
            <div className="flex-1">
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Exclusive Deal</p>
              <h4 className="text-white text-xl font-bold leading-tight">
                Problems with pods? <br />
                <span className="text-[#6CC24A]">Say Bye Bye Leaks!</span>
              </h4>
            </div>
            
            {/* Small circular image/icon container */}
            <div className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-2xl shrink-0 bg-white/10">
               <img 
                src="https://images.unsplash.com/photo-1550147760-44c9966d6bc7?auto=format&fit=crop&q=80&w=300" 
                className="object-cover w-full h-full opacity-90"
                alt="Promo product"
               />
               {/* Tiny Icon Overlay */}
               <div className="absolute bottom-2 right-2 bg-black w-8 h-8 rounded-lg flex items-center justify-center border border-white/10">
                  <div className="w-2 h-2 bg-[#6CC24A] rounded-full animate-pulse" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* ── MARQUEE ─────────────────────────────────────────────────── */}
      <TagsMarquee />

      {/* ── CATEGORIES LIST (like Vertdure services list) ────────────── */}
          <section className="w-full bg-[#0a0a0a] py-24 md:py-40 flex flex-col overflow-hidden">
      {/* ── TOP HEADER (Gigantic Headline) ────────────────────────── */}
      <div className="w-full px-6 md:px-16 mb-20 md:mb-32">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="flex flex-col">
            <span className="text-[#6CC24A] uppercase tracking-[0.4em] text-xs font-bold mb-6">
              Our Catalogue
            </span>
            <h2 className="text-white leading-[0.85] flex flex-col tracking-tighter">
              <span className="text-[clamp(4rem,15vw,12rem)] font-extralight opacity-90">Everything</span>
              <span className="text-[clamp(4rem,15vw,12rem)] font-extralight italic font-serif -mt-4 md:-mt-10">
                you need.
              </span>
            </h2>
          </div>
          
          <Link 
            href="/products" 
            className="group flex items-center gap-4 border border-white/20 px-8 py-5 rounded-full text-white text-lg font-medium hover:bg-white hover:text-black transition-all duration-500 mb-4"
          >
            Browse All <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ── CATEGORY ROWS (Full Width & Gigantic) ──────────────────── */}
      <div className="flex flex-col w-full border-t border-white/10">
        {categories.map((cat, i) => (
          <Link
            key={i}
            href={`/products?category=${encodeURIComponent(cat.name)}`}
            className={`group relative w-full border-b border-white/10 px-6 md:px-16 py-12 md:py-20 flex flex-col lg:flex-row lg:items-center justify-between transition-colors duration-700 ${cat.color}`}
          >
            {/* Hover Background Accent */}
            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <span className="text-white/20 font-mono text-xl">0{i + 1}</span>
              <h3 className="text-[clamp(3rem,10vw,9rem)] font-extralight tracking-tighter leading-none transition-transform duration-500 group-hover:translate-x-4">
                {cat.name}
              </h3>
            </div>

            <div className="relative z-10 flex items-center gap-4 mt-8 lg:mt-0 flex-wrap lg:justify-end">
              <div className="hidden md:flex gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full border border-white/10 text-white/40 text-xs font-semibold uppercase tracking-widest whitespace-nowrap group-hover:border-white/30 group-hover:text-white/80 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                <Plus size={32} className="text-white group-hover:text-black group-hover:rotate-90 transition-all duration-500" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────────────── */}
 <section className="w-full bg-black py-24 md:py-48 flex flex-col overflow-hidden">
      {/* ── HEADER (Ultra Massive) ────────────────────────────────── */}
      <div className="w-full px-6 md:px-12 mb-20 md:mb-40">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-12">
          <div className="flex flex-col">
            <span className="text-[#6CC24A] uppercase tracking-[0.4em] text-xs font-bold mb-8">
              Curated Selection
            </span>
            <h2 className="text-white leading-[0.8] flex flex-col tracking-tighter">
              <span className="text-[clamp(4rem,18vw,15rem)] font-extralight opacity-90">Top picks,</span>
              <span className="text-[clamp(4rem,18vw,15rem)] font-extralight italic font-serif -mt-4 md:-mt-10">
                right now.
              </span>
            </h2>
          </div>
          
          <Link 
            href="/products" 
            className="group flex items-center gap-6 border-b border-white/20 pb-4 text-white text-2xl font-light hover:border-[#6CC24A] transition-all duration-500 mb-8"
          >
            View All Catalogue <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform text-[#6CC24A]" />
          </Link>
        </div>
      </div>

      {/* ── GIGANTIC PRODUCT GRID ─────────────────────────────────── */}
      <div className="w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
        {featuredProducts.slice(0, 3).map((product: any) => (
          <div key={product.id} className="w-full">
            <ProductCard product={product} onClick={setSelectedProduct} />
          </div>
        ))}
      </div>
    </section>

      {/* ── ABOUT PREVIEW ────────────────────────────────────────────── */}

    <section className="relative w-full bg-[#6CC24A] py-24 md:py-48 px-6 md:px-12 xl:px-20 overflow-hidden">
      
      {/* ── BACKGROUND GHOST TEXT (GIGANTIC) ──────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.07]">
        <span className="text-[40vw] font-black uppercase leading-none tracking-tighter">
          DRIPD
        </span>
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-start justify-between gap-20 xl:gap-32">
        
        {/* ── LEFT: GIGANTIC HEADLINE ──────────────────────────────── */}
        <div className="w-full lg:w-1/2">
          <p className="text-black/40 uppercase tracking-[0.4em] text-xs font-bold mb-10">
            About DRIPD
          </p>
          
          <h2 className="text-black leading-[0.85] flex flex-col tracking-tighter mb-12">
            <span className="text-[clamp(3.5rem,10vw,8.5rem)] font-extrabold uppercase">
              Edmonton&apos;s
            </span>
            <span className="text-[clamp(3.5rem,10vw,8.5rem)] font-extralight italic font-serif -mt-2 md:-mt-6" style={{ fontFamily: 'serif' }}>
              vape shop,
            </span>
            <span className="text-[clamp(3.5rem,10vw,8.5rem)] font-extralight tracking-tighter">
              done right.
            </span>
          </h2>

          <p className="text-black/60 text-xl md:text-2xl font-light leading-relaxed max-w-xl mb-12">
            At DRIPD, we believe vaping should be elevated — not embarrassing. We curate only the best, ID rigorously, and treat every customer like a regular. Mill Woods is our home.
          </p>

          <Link 
            href="/about" 
            className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl group"
          >
            Our Story 
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* ── RIGHT: EDITORIAL GRID ────────────────────────────────── */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {whyUs.map((item, i) => (
            <div
              key={i}
              className="group p-10 md:p-12 bg-black/[0.04] border border-black/5 rounded-[3rem] backdrop-blur-md hover:bg-black/10 transition-all duration-500"
            >
              <div className="text-black mb-8 transform group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h4 className="text-black text-2xl font-bold tracking-tight mb-4 lowercase">
                {item.title}
              </h4>
              <p className="text-black/60 text-base font-medium leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* ── DECORATIVE ACCENTS ───────────────────────────────────── */}
      <div className="absolute top-20 right-20 hidden xl:block opacity-20 rotate-12">
        <span className="text-8xl">🌿</span>
      </div>
      <div className="absolute bottom-20 left-10 hidden xl:block opacity-20 -rotate-12">
        <span className="text-8xl">💨</span>
      </div>
    </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <div style={{ background: "var(--gray-900)", borderTop: "1px solid rgba(245,245,240,0.06)" }}>
        <FAQ
          items={homeFAQs}
          title="Got questions?"
          subtitle="Everything you need to know about shopping at DRIPD."
        />
      </div>

      {/* ── NEWSLETTER ──────────────────────────────────────────────── */}
      <NewsletterSection />

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        headline="Step into"
        italicPart="something better."
        subtext="Visit us at our Mill Woods location or shop the full collection online."
        primaryLabel="Shop Products"
        primaryHref="/products"
        secondaryLabel="Get Directions"
        secondaryHref="/contact"
      />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
