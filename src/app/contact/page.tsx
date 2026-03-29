"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  MapPin, Phone, Mail, Clock, Send, 
  CheckCircle, ArrowRight, Instagram, 
  Facebook, Twitter 
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import CTASection from "@/components/sections/CTASection";
import FAQ from "@/components/ui/FAQ";

gsap.registerPlugin(ScrollTrigger);

const contactFAQs = [
  { q: "What's the quickest way to reach you?", a: "Call or text us at " + siteConfig.location.phone + " for the fastest response. We're also available via email but response time may be up to 24hrs." },
  { q: "Do you take product reservation requests?", a: "Yes! If you're looking for something specific, call ahead and we'll hold it for 24 hours. Just give us your name and phone number." },
  { q: "Is there parking at your Mill Woods location?", a: "Yes — there's a free parking lot directly in front of the store. No time limit during business hours." },
  { q: "Can I call ahead about product availability?", a: "Absolutely. Give us a call and we'll check live inventory for you. Saves you the trip if we're sold out." },
  { q: "Do you offer gift cards?", a: "Yes — DRIPD gift cards are available in-store in any denomination from $20. Great gift for the vaper in your life (who is 19+)." },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 60 },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div ref={pageRef} className="bg-black">
      {/* ── GIGANTIC HERO (FULL SCREEN) ───────────────────────────── */}
      <section className="relative w-full h-screen flex flex-col justify-end bg-black overflow-hidden px-6 md:px-12 xl:px-20 pb-20 md:pb-32">
         <div className="absolute inset-0 z-0">
            <img 
               src="/assets/edm.png" 
               className="w-full h-full object-cover opacity-40" 
               alt="Contact Dripd"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
         </div>

        <div className="relative z-10 w-full">
          <p className="text-[#6CC24A] uppercase tracking-[0.4em] text-sm font-bold mb-10">Get In Touch</p>
          
          <h1 className="leading-[0.85] flex flex-col tracking-tighter select-none">
            <div className="overflow-hidden">
               <span className="page-hero-text block text-[clamp(4rem,15vw,13rem)] font-extralight text-white opacity-90">Say</span>
            </div>
            <div className="overflow-hidden flex items-center gap-6 md:gap-12 -mt-4 md:-mt-10">
               <span className="page-hero-text block text-[clamp(4rem,15vw,13rem)] font-light italic font-serif text-[#6CC24A]" style={{fontFamily: 'serif'}}>
                 hello.
               </span>
            </div>
          </h1>

          <p className="page-hero-text mt-12 text-white/40 text-xl md:text-3xl font-light italic font-serif max-w-2xl">
            We don&apos;t bite. Promise.
          </p>
        </div>
      </section>

      {/* ── CONTACT & FORM GRID (FULL WIDTH) ───────────────────────── */}
      <section className="w-full bg-[#0a0a0a] py-32 md:py-56 px-6 md:px-12 xl:px-20 border-t border-white/5">
        <div className="flex flex-col xl:flex-row gap-24 xl:gap-40 items-start justify-between">
          
          {/* ── LEFT COLUMN: GIGANTIC CONTACT INFO ───────────────────── */}
          <div className="w-full xl:w-2/5">
            <p className="text-[#6CC24A] uppercase tracking-[0.4em] text-xs font-bold mb-8">Direct Contact</p>
            
            <h2 className="gsap-reveal text-white leading-[0.85] flex flex-col tracking-tighter mb-20">
              <span className="text-[clamp(3.5rem,8vw,7rem)] font-extralight">Visit us or</span>
              <span className="text-[clamp(3.5rem,8vw,7rem)] font-extralight italic font-serif text-[#6CC24A]" style={{fontFamily: 'serif'}}>drop a line.</span>
            </h2>

            <div className="space-y-24">
              {/* 1. Address Block */}
              <div className="group">
                <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                  <MapPin size={14} className="text-[#6CC24A]" /> Our HQ
                </p>
                <p className="text-white text-[2.5rem] md:text-[3.5rem] font-extralight leading-[1.1] tracking-tight">
                  {siteConfig.location.address}<br />
                  <span className="opacity-40 italic font-serif" style={{fontFamily: 'serif'}}>{siteConfig.location.neighborhood}, Edmonton</span>
                </p>
              </div>

              {/* 2. Phone & Email Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gsap-reveal">
                <div className="group">
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
                    <Phone size={14} className="text-[#6CC24A]" /> Reach Out
                  </p>
                  <a href={`tel:${siteConfig.location.phone}`} className="text-white text-3xl font-light hover:text-[#6CC24A] transition-all block">
                    {siteConfig.location.phone}
                  </a>
                </div>
                <div className="group">
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
                    <Mail size={14} className="text-[#6CC24A]" /> Digital
                  </p>
                  <a href={`mailto:${siteConfig.location.email}`} className="text-white text-2xl md:text-3xl font-light hover:text-[#6CC24A] transition-all block truncate">
                    {siteConfig.location.email}
                  </a>
                </div>
              </div>

              {/* 3. Social Icons - Vibrant Accent */}
              <div className="">
                <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Follow the drip</p>
                <div className="flex gap-4">
                  {[
                    { icon: <Instagram size={28} />, href: "#" },
                    { icon: <Facebook size={28} />, href: "#" },
                    { icon: <Twitter size={28} />, href: "#" },
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href}
                      className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#6CC24A] hover:text-black hover:border-[#6CC24A] transition-all duration-500 transform hover:-translate-y-2 shadow-xl"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* 4. Hours - Architectural List */}
              <div className="border-t border-white/10 pt-16">
                <div className="flex items-center justify-between mb-12">
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-4">
                    <Clock size={14} className="text-[#6CC24A]" /> Availability
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#6CC24A] animate-pulse" />
                    <span className="text-[#6CC24A] text-[10px] font-black uppercase tracking-widest">Open Now</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  {Object.entries(siteConfig.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-end group py-3 border-b border-white/[0.03] hover:border-[#6CC24A]/30 transition-colors">
                      <span className="text-white/30 text-xl font-light group-hover:text-white transition-colors">
                        {day}
                      </span>
                      <span className="text-white text-xl font-medium tracking-tight group-hover:text-[#6CC24A] transition-colors">
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          

          {/* ── RIGHT COLUMN: FORM (GIGANTIC INPUTS) ───────────────── */}
          <div className="w-full xl:w-3/5 bg-white/[0.02] border border-white/5 rounded-[4rem] p-10 md:p-20 xl:p-24 gsap-reveal">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="w-32 h-32 bg-[#6CC24A] rounded-full flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(108,194,74,0.3)]">
                  <CheckCircle size={64} className="text-black" />
                </div>
                <h3 className="text-white text-5xl font-extralight tracking-tighter mb-6">Message received.</h3>
                <p className="text-white/40 text-xl font-light max-w-sm mb-12">We&apos;ll get back to you within 24 hours. For urgent inquiries, please give us a call.</p>
                <button onClick={() => setSubmitted(false)} className="px-12 py-5 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-4">
                    <label className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">Your Name</label>
                    <input 
                      type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Name" 
                      className="bg-transparent border-b border-white/10 text-3xl font-light py-4 focus:outline-none focus:border-[#6CC24A] text-white transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">Phone Number</label>
                    <input 
                      type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(780) 000-0000" 
                      className="bg-transparent border-b border-white/10 text-3xl font-light py-4 focus:outline-none focus:border-[#6CC24A] text-white transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                    <label className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">Email Address</label>
                    <input 
                      type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="hello@email.com" 
                      className="bg-transparent border-b border-white/10 text-3xl font-light py-4 focus:outline-none focus:border-[#6CC24A] text-white transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <label className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">How can we help?</label>
                    <textarea 
                      required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Type your message here..." 
                      className="bg-transparent border-b border-white/10 text-3xl font-light py-4 focus:outline-none focus:border-[#6CC24A] text-white transition-colors resize-none"
                    />
                </div>

                <button 
                  type="submit" disabled={loading}
                  className="w-full py-8 rounded-full bg-[#6CC24A] text-black text-xl font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 shadow-[0_0_50px_rgba(108,194,74,0.2)]"
                >
                  {loading ? "Sending..." : <>Send Message <ArrowRight size={24} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── GIGANTIC MAP SECTION ─────────────────────────────────── */}
      <section className="w-full bg-black py-32 md:py-56">
        <div className="px-6 md:px-12 xl:px-20 mb-24">
            <p className="text-[#6CC24A] uppercase tracking-[0.4em] text-xs font-bold mb-8">Our Location</p>
            <h2 className="gsap-reveal text-white leading-[0.85] flex flex-col tracking-tighter">
              <span className="text-[clamp(3.5rem,10vw,8rem)] font-extralight">Mill Woods,</span>
              <span className="text-[clamp(3.5rem,10vw,8rem)] font-extralight italic font-serif text-[#6CC24A]" style={{fontFamily: 'serif'}}>Edmonton AB.</span>
            </h2>
        </div>

        <div className="w-full h-[70vh] min-h-[600px] border-y border-white/5 grayscale invert contrast-[1.2]">
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.8927267278!2d-113.47236!3d53.4577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a021b0f6b30ead%3A0x0!2zNTPCsDI3JzI3LjciTiAxMTPCsDI4JzIwLjUiVw!5e0!3m2!1sen!2sca!4v1680000000"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── FAQ & CTA ────────────────────────────────────────────────── */}
      <div className="bg-[#0a0a0a] border-t border-white/5">
        <FAQ items={contactFAQs} title="Contact FAQ" subtitle="Quick answers to common questions about visiting and reaching DRIPD." />
      </div>

      <CTASection
        headline="Prefer to" italicPart="shop online?"
        subtext="Browse our full catalogue and get same-day delivery in Edmonton. Experience our premium curated selection from your home."
        primaryLabel="Shop Now" primaryHref="/products"
        secondaryLabel="Learn About Us" secondaryHref="/about"
        dark={false}
      />
    </div>
  );
}