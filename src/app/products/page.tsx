"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { products, categories } from "@/lib/products";
import type { Product } from "@/lib/products";
import ProductCard from "@/components/ui/ProductCard";
import ProductModal from "@/components/ui/ProductModal";
import CTASection from "@/components/sections/CTASection";
import TagsMarquee from "@/components/sections/TagsMarquee";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "new">("default");
  const pageRef = useRef<HTMLDivElement>(null);

  // Read category from URL query
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && categories.includes(cat)) setActiveCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-text", {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2,
      });
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const filtered = products
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "new") return Number(b.new) - Number(a.new);
      return 0;
    });

  return (
    <div ref={pageRef}>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
   <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-end overflow-hidden bg-black">
      {/* ── BACKGROUND IMAGE (FULL SCREEN) ────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/products.jpg" // Your placeholder
          alt="The Shop Hero"
          className="w-full h-full object-cover"
        />
        {/* Deep gradient overlay for text legibility at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* ── MAIN CONTENT (GIGANTIC & FULL WIDTH) ───────────────────── */}
      <div className="relative z-10 w-full px-6 md:px-16 pb-12 md:pb-24 flex flex-col xl:flex-row xl:items-end justify-between gap-12">
        
        {/* Left Side: Headline */}
        <div className="max-w-none w-full xl:max-w-6xl">
          <h1 className="text-white leading-[0.85] flex flex-col tracking-tighter select-none">
            <span className="text-[clamp(4rem,12vw,10rem)] font-extrabold uppercase">
              The Shop.
            </span>
            <div className="flex items-center gap-4 md:gap-8 -mt-2 md:-mt-6">
              <span 
                className="text-[clamp(3rem,10vw,8rem)] font-light italic font-serif opacity-90"
                style={{ fontFamily: 'serif' }}
              >
                Curated for
              </span>
              
              {/* Vibrant Green Check Icon (Vertdure Style) */}
              <div className="w-14 h-14 md:w-24 md:h-24 bg-[#6CC24A] rounded-full flex items-center justify-center shrink-0 shadow-[0_0_40px_rgba(108,194,74,0.4)]">
                <Check className="text-black w-8 h-8 md:w-12 md:h-12" strokeWidth={4} />
              </div>

              <span className="text-[clamp(3rem,10vw,8rem)] font-light opacity-90">
                Edmonton.
              </span>
            </div>
          </h1>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/products" 
              className="bg-[#6CC24A] text-black font-black px-12 py-5 rounded-full text-xl hover:bg-[#5db13e] transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
            >
              Shop Now
            </Link>
            <button className="px-10 py-5 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-md">
              View Catalogue
            </button>
          </div>
        </div>

        {/* Right Side: Floating Promo Card (Reference Match) */}
        <div className="flex flex-col items-end gap-4 w-full md:max-w-md">
          {/* Top Pill */}
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-full py-2.5 px-6 flex items-center gap-4 text-white text-sm shadow-2xl">
            <span className="opacity-80">200+ Premium items in stock</span>
            <span className="bg-[#FFEA00] text-black font-black px-2 py-0.5 rounded text-[10px] uppercase tracking-widest">
              Live Now
            </span>
          </div>

          {/* Promotion Card */}
          <div className="relative bg-[#1a2d1e]/90 backdrop-blur-3xl p-6 rounded-[2.5rem] border border-white/5 flex items-center gap-6 shadow-2xl w-full">
            <div className="flex-1">
              <p className="text-[#6CC24A] text-[10px] font-bold uppercase tracking-[0.25em] mb-2">Exclusive Release</p>
              <h4 className="text-white text-xl font-bold leading-tight">
                New Arrivals: <br /> 
                <span className="opacity-60">Spring Collection 2024</span>
              </h4>
            </div>
            
            <div className="relative w-24 h-24 rounded-3xl overflow-hidden bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
               <div className="w-12 h-12 bg-[#6CC24A]/20 rounded-full blur-xl absolute animate-pulse" />
               <ArrowRight className="text-white relative z-10" size={32} />
            </div>
          </div>
        </div>

      </div>

      {/* ── FULL WIDTH BOTTOM DECORATION ──────────────────────────── */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>

      <TagsMarquee/>

      {/* ── PRODUCTS LAYOUT ──────────────────────────────────────────── */}
        <section className="w-full bg-black py-20 md:py-32 flex flex-col overflow-hidden">
      {/* ── FULL WIDTH CONTROLS BAR ────────────────────────────────── */}
      <div className="w-full px-6 md:px-12 mb-16">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-10 border-b border-white/10 pb-12">
          
          {/* Gigantic Category Navigation */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            {categories.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  text-[clamp(1rem,2vw,1.5rem)] font-light uppercase tracking-[0.2em] transition-all duration-500
                  ${activeCategory === cat 
                    ? "text-[#6CC24A] opacity-100" 
                    : "text-white opacity-30 hover:opacity-100 hover:text-white"}
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort & Count */}
          <div className="flex items-center gap-8 w-full xl:w-auto justify-between md:justify-end">
            <div className="relative group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="appearance-none bg-transparent border-b border-white/20 text-white py-2 pr-10 pl-2 text-sm font-bold uppercase tracking-widest cursor-pointer focus:outline-none focus:border-[#6CC24A] transition-colors"
              >
                <option className="bg-black" value="default">Sort: Recommended</option>
                <option className="bg-black" value="price-asc">Price: Low to High</option>
                <option className="bg-black" value="price-desc">Price: High to Low</option>
                <option className="bg-black" value="new">New Arrivals</option>
              </select>
              <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-white/40" />
            </div>

            <div className="flex items-center gap-3">
               <span className="text-white/20 text-xs font-black uppercase tracking-tighter">Inventory</span>
               <span className="text-[#6CC24A] font-mono text-xl">{filtered.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── GIGANTIC PRODUCTS GRID (FULL WIDTH) ────────────────────────── */}
      <div className="w-full px-4 md:px-8">
        {filtered.length === 0 ? (
          <div className="w-full py-40 flex flex-col items-center justify-center text-center">
            <h3 className="text-white/20 text-[clamp(2rem,8vw,5rem)] font-extralight tracking-tighter italic font-serif">
              Nothing found in <br /> this collection.
            </h3>
            <button
              className="mt-10 px-10 py-4 border border-white/20 rounded-full text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
              onClick={() => setActiveCategory("All")}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 xl:gap-14">
            {filtered.map((product: any) => (
              <div key={product.id} className="w-full">
                <ProductCard product={product} onClick={setSelectedProduct} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Optional: Subtle background text to fill full width space */}
      <div className="absolute -bottom-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none whitespace-nowrap">
        <span className="text-[25vw] font-black uppercase leading-none">PREMIUM VAPE SHOP EDMONTON</span>
      </div>
    </section>
      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        headline="Can't find"
        italicPart="what you need?"
        subtext="Come into the store — our staff will help you find the perfect setup."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="About DRIPD"
        secondaryHref="/about"
      />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
