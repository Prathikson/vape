"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  ArrowUpRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

// --- SVG Payment Icons (Mono-tone for high-end look) ---
const PaymentIcons = {
  Visa: () => (
    <svg className="w-10 h-6" viewBox="0 0 24 15" fill="currentColor"><path d="M10.15 11.233l1.107-6.852H12.93l-1.107 6.852H10.15zM17.158 4.542c-.287-.11-.735-.228-1.286-.228-1.413 0-2.408.752-2.416 1.83-.008.795.711 1.238 1.254 1.503.557.272.744.446.742.688-.003.372-.445.542-.857.542-.572 0-.88-.088-1.343-.292l-.187-.09-.2.955c.257.118.73.22 1.22.226 1.487 0 2.454-.734 2.467-1.87.009-.623-.372-1.096-1.189-1.482-.49-.245-.79-.41-.79-.658 0-.226.255-.465.807-.465.459-.007.795.1.1.049.26l.122.057.199-.974zm2.84 4.053l.493-2.355c-.012.02.257-.698.312-.843l.161.766.543 2.627h-1.509zm2.344-4.214h-1.163c-.358 0-.627.104-.784.478l-2.222 5.306h1.74l.348-.962h2.124l.2 1.052h1.53l-1.332-5.874h-.441zm-15.11 0L5.347 9.47l-.155-.788c-.266-.906-.983-1.89-1.815-2.32L4.85 11.233h1.862l2.772-6.852H7.232z"/></svg>
  ),
  Mastercard: () => (
    <svg className="w-10 h-6" viewBox="0 0 24 15" fill="currentColor"><circle cx="7" cy="7.5" r="7" opacity=".8"/><circle cx="12" cy="7.5" r="7" opacity=".8"/></svg>
  ),
  ApplePay: () => (
    <svg className="w-10 h-6" viewBox="0 0 24 15" fill="currentColor"><path d="M18.84 7.64c0-2.31 1.89-3.42 1.98-3.48-1.07-1.57-2.73-1.78-3.32-1.81-1.41-.14-2.75.83-3.46.83-.72 0-1.83-.81-3.03-.79-1.57.02-3.03.92-3.83 2.33-1.63 2.84-.42 7.04 1.16 9.32.77 1.12 1.69 2.37 2.91 2.32 1.17-.05 1.61-.75 3.03-.75s1.81.75 3.05.73c1.24-.02 2.05-1.14 2.81-2.25.88-1.28 1.24-2.52 1.26-2.59-.03-.01-2.46-.94-2.46-3.76zm-3.35-5.38c.63-.77 1.05-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.68-1.09 1.76-.95 2.79 1.02.08 2.04-.5 2.67-1.27z"/></svg>
  ),
  Amex: () => (
    <svg className="w-10 h-6" viewBox="0 0 24 15" fill="currentColor"><path d="M0 0v15h24V0H0zm4.2 11.5L3.3 9H1.8v2.5H0V4h3.1c1.2 0 2 .7 2 1.8 0 .8-.5 1.4-1.2 1.7l1.5 4h-1.2zm11.3 0l-.8-1.5h-2.1l-.8 1.5h-1.2l2.5-4.7L10.6 4h1.2l.8 1.6 1-1.6h1.2l-2.5 4.8 2.5 2.7h-1.3zm6.5-5.5h-1.8v1.2h1.5v.9h-1.5v1.4H24v1.1h-3.8V4h3.8v1h-1.8z"/></svg>
  )
};

const socialIcons = {
  instagram: <Instagram size={24} />,
  facebook: <Facebook size={24} />,
  twitter: <Twitter size={24} />,
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/5 pt-24">
      {/* ── TOP SECTION: GIGANTIC GRID ────────────────────────────── */}
      <div className="w-full px-6 md:px-12 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-10 pb-24">
        
        {/* Brand & Mission (4 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <h2 className="text-white text-5xl font-black tracking-tighter uppercase">
            {siteConfig.name}®
          </h2>
          <p className="text-white/40 text-2xl font-light leading-relaxed max-w-md italic font-serif" style={{fontFamily: 'serif'}}>
            Edmonton&apos;s premiere curated vape destination. Quality first, community always.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-white/60 hover:text-[#6CC24A] transition-colors">
              <MapPin size={20} />
              <span className="text-lg font-light">{siteConfig.location.address}</span>
            </div>
            <div className="flex items-center gap-4 text-white/60 hover:text-[#6CC24A] transition-colors">
              <Phone size={20} />
              <span className="text-lg font-light">{siteConfig.location.phone}</span>
            </div>
            <div className="flex items-center gap-4 text-white/60 hover:text-[#6CC24A] transition-colors">
              <Mail size={20} />
              <span className="text-lg font-light">{siteConfig.location.email}</span>
            </div>
          </div>
        </div>

        {/* Navigation (2 Cols) */}
        <div className="lg:col-span-2">
          <p className="text-[#6CC24A] text-[10px] font-bold uppercase tracking-[0.4em] mb-10">Explore</p>
          <div className="flex flex-col gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-2xl font-extralight hover:text-[#6CC24A] transition-all flex items-center group"
              >
                {item.label}
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
              </Link>
            ))}
            <Link href="/products" className="text-white text-2xl font-extralight hover:text-[#6CC24A]">Shop All</Link>
          </div>
        </div>

        {/* Hours (3 Cols) */}
        <div className="lg:col-span-3">
          <p className="text-[#6CC24A] text-[10px] font-bold uppercase tracking-[0.4em] mb-10">Availability</p>
          <div className="space-y-4">
            {Object.entries(siteConfig.hours).map(([day, hours]) => (
              <div key={day} className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-white/40 font-light">{day}</span>
                <span className="text-white font-medium">{hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social (2 Cols) */}
        <div className="lg:col-span-2 flex flex-col items-start lg:items-end">
          <p className="text-[#6CC24A] text-[10px] font-bold uppercase tracking-[0.4em] mb-10">Social</p>
          <div className="flex flex-row lg:flex-col gap-4">
            {Object.entries(siteConfig.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#6CC24A] hover:text-black hover:border-[#6CC24A] transition-all duration-500 shadow-xl"
              >
                {socialIcons[platform as keyof typeof socialIcons] || <ArrowUpRight />}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── MIDDLE SECTION: GIGANTIC BRANDING ─────────────────────── */}
      <div className="w-full overflow-hidden border-y border-white/5 py-10 md:py-20 select-none pointer-events-none">
        <h2 className="text-white/[0.03] text-[clamp(5rem,20vw,25rem)] font-black leading-none uppercase whitespace-nowrap text-center">
          {siteConfig.name}
        </h2>
      </div>

      {/* ── BOTTOM SECTION: LEGAL & PAYMENTS ──────────────────────── */}
      <div className="w-full px-6 md:px-12 xl:px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Copyright */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="text-white/30 text-xs font-medium tracking-wide">
            © {new Date().getFullYear()} {siteConfig.name}. Must be 19+ to purchase.
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <Link href="/privacy" className="text-white/20 text-[10px] hover:text-white transition-colors uppercase tracking-widest">Privacy</Link>
            <Link href="/terms" className="text-white/20 text-[10px] hover:text-white transition-colors uppercase tracking-widest">Terms</Link>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.3em]">Secure Payments</p>
          <div className="flex flex-wrap gap-6 text-white/30">
            <PaymentIcons.Visa />
            <PaymentIcons.Mastercard />
            <PaymentIcons.Amex />
            <PaymentIcons.ApplePay />
          </div>
        </div>

      </div>
    </footer>
  );
}