"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({ items, title = "Common Questions", subtitle }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#0a0a0a] py-24 md:py-48 px-6 md:px-12 xl:px-20 overflow-hidden">
      {/* ── GIGANTIC HEADER ────────────────────────────────────────── */}
      <div className="w-full mb-20 md:mb-32">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="flex flex-col">
            <p className="text-[#6CC24A] uppercase tracking-[0.4em] text-xs font-bold mb-8">
              Support & Info
            </p>
            <h2 className="text-white leading-[0.85] flex flex-col tracking-tighter">
              <span className="text-[clamp(3.5rem,10vw,8.5rem)] font-extralight opacity-90">
                {title.split(' ')[0]}
              </span>
              <span 
                className="text-[clamp(3.5rem,10vw,8.5rem)] font-extralight italic font-serif text-[#6CC24A]" 
                style={{ fontFamily: 'serif' }}
              >
                {title.split(' ').slice(1).join(' ')}
              </span>
            </h2>
          </div>
          
          {subtitle && (
            <p className="text-white/40 text-xl font-light leading-relaxed max-w-md lg:mb-4">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* ── GIGANTIC ACCORDION LIST (FULL WIDTH) ───────────────────── */}
      <div className="w-full border-t border-white/10">
        {items.map((item, i) => (
          <div 
            key={i} 
            className={`group border-b border-white/10 transition-colors duration-500 ${open === i ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'}`}
          >
            <button
              className="w-full py-10 md:py-16 flex items-center justify-between text-left outline-none"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center gap-6 md:gap-12">
                <span className={`text-xl font-mono transition-colors duration-500 ${open === i ? 'text-[#6CC24A]' : 'text-white/20'}`}>
                  0{i + 1}
                </span>
                <span className={`text-[clamp(1.5rem,4vw,3.5rem)] font-extralight tracking-tight transition-all duration-500 ${open === i ? 'text-white translate-x-4' : 'text-white/70 group-hover:text-white'}`}>
                  {item.q}
                </span>
              </div>

              {/* Interaction Icon */}
              <div className={`
                w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500
                ${open === i 
                  ? 'bg-[#6CC24A] border-[#6CC24A] text-black rotate-0' 
                  : 'bg-transparent border-white/20 text-white group-hover:border-white rotate-90'}
              `}>
                {open === i ? <Minus size={24} /> : <Plus size={24} />}
              </div>
            </button>

            {/* Answer Body */}
            <div 
              className={`overflow-hidden transition-all duration-700 ease-in-out ${open === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="pl-16 md:pl-32 pr-6 md:pr-40 pb-16 md:pb-24">
                <p className="text-white/50 text-xl md:text-2xl font-light leading-relaxed max-w-4xl italic">
                  {item.a}
                </p>
                
                {/* Visual Accent for open item */}
                <div className="mt-10 flex items-center gap-4 text-[#6CC24A] text-xs font-bold uppercase tracking-widest">
                  <ArrowRight size={16} />
                  <span>Verified Response</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-20 right-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none text-right">
        <span className="text-[20vw] font-black uppercase leading-none">FAQS</span>
      </div>
    </section>
  );
}