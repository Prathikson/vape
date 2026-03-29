"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useCart } from "@/context/CartContext";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, dispatch } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }, [pathname]);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = !mobileOpen ? "hidden" : "";
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${
          scrolled 
            ? "py-4 bg-black/80 backdrop-blur-2xl border-b border-white/5" 
            : "py-8 bg-transparent"
        }`}
      >
        <div className="w-full px-6 md:px-12 xl:px-20 flex items-center justify-between">
          
          {/* ── LOGO (Gigantic & Bold) ──────────────────────────────── */}
          <Link
            href="/"
            className="relative z-[110] text-2xl md:text-3xl font-black uppercase tracking-tighter text-white hover:text-[#6CC24A] transition-colors"
          >
            {siteConfig.name}<span className="text-[#6CC24A]">.</span>
          </Link>

          {/* ── DESKTOP NAV (Cinematic Spacing) ─────────────────────── */}
          <div className="hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300
                    ${active 
                      ? "bg-[#6CC24A] text-black shadow-[0_0_20px_rgba(108,194,74,0.3)]" 
                      : "text-white/70 hover:text-white hover:bg-white/5"}
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* ── ACTIONS (Cart & CTA) ────────────────────────────────── */}
          <div className="relative z-[110] flex items-center gap-3 md:gap-6">
            
            {/* Shop CTA */}
            <Link 
              href="/products" 
              className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#6CC24A] transition-all active:scale-95"
            >
              Shop Now <ArrowRight size={14} />
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => dispatch({ type: "TOGGLE_CART" })}
              className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 hover:border-[#6CC24A]/50 transition-all active:scale-90"
            >
              <ShoppingBag size={20} className="text-white group-hover:text-[#6CC24A] transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-[#6CC24A] text-black text-[10px] font-black rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMobile}
              className="flex lg:hidden items-center justify-center w-12 h-12 rounded-full bg-[#6CC24A] text-black transition-transform active:scale-90"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── GIGANTIC MOBILE MENU OVERLAY ────────────────────────────── */}
      <div 
        className={`fixed inset-0 z-[90] bg-black transition-all duration-700 ease-expo ${
          mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Decorative Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <span className="text-[40vw] font-black uppercase leading-none">DRIPD</span>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20">
          <p className="text-[#6CC24A] uppercase tracking-[0.4em] text-xs font-bold mb-10">Navigation</p>
          
          <div className="flex flex-col gap-4">
            {siteConfig.nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between border-b border-white/5 py-6 overflow-hidden"
              >
                <span className="text-white/20 font-mono text-xl mr-6">0{i + 1}</span>
                <span className="text-white text-5xl md:text-7xl font-extralight tracking-tighter transition-all group-hover:text-[#6CC24A] group-hover:translate-x-4">
                  {item.label}
                </span>
                <ArrowRight size={40} className="text-white/10 group-hover:text-[#6CC24A] transition-colors" />
              </Link>
            ))}
          </div>

          <div className="mt-16 flex flex-col md:flex-row gap-6">
            <Link 
              href="/products" 
              className="bg-[#6CC24A] text-black text-center py-6 rounded-full font-black uppercase tracking-widest text-xl"
            >
              Shop All Products
            </Link>
            <div className="flex justify-center gap-8 mt-10 md:mt-0">
               <span className="text-white/40 text-sm">Instagram</span>
               <span className="text-white/40 text-sm">Facebook</span>
               <span className="text-white/40 text-sm">Twitter</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .ease-expo {
          transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
        }
      `}</style>
    </>
  );
}