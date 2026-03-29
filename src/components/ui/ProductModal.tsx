"use client";

import { useState, useEffect } from "react";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import type { Product, ProductVariant } from "@/lib/products";
import { useCart } from "@/context/CartContext";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants.find((v) => v.inStock) || product.variants[0]
  );
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  // Close on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addItem(product, selectedVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-10"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* ── GIGANTIC MODAL CONTAINER ────────────────────────────── */}
      <div 
        className="relative w-[95vw] md:w-[90vw] h-[95vh] md:h-[90vh] bg-[#0a0a0a] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-[110] w-14 h-14 bg-white/5 hover:bg-white hover:text-black transition-all rounded-full flex items-center justify-center text-white border border-white/10"
        >
          <X size={28} strokeWidth={1.5} />
        </button>

        {/* ── LEFT PANEL: IMMERSIVE VISUAL ────────────────────────── */}
        <div
          className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/10"
          style={{
            background: `radial-gradient(circle at center, ${product.color}20 0%, transparent 70%)`,
          }}
        >
          {/* Large Abstract Shape */}
          <div
            className="relative w-[60%] aspect-square flex items-center justify-center transition-transform duration-1000 hover:scale-105"
            style={{
              borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%",
              background: `linear-gradient(135deg, ${product.color}22, ${product.color}55)`,
              border: `1px solid ${product.color}88`,
            }}
          >
            {/* The Brand Name floating in background of shape */}
            <span className="text-white/5 text-[15vw] font-black uppercase tracking-tighter absolute select-none pointer-events-none">
              {product.brand.split(' ')[0]}
            </span>
            
            {/* Product Centerpiece */}
            <div 
              className="w-32 h-32 rounded-full border-4 border-white/20 animate-pulse shadow-[0_0_50px_rgba(255,255,255,0.1)]"
              style={{ backgroundColor: product.color }}
            />
          </div>

          {/* New/Badge Label */}
          {product.badge && (
            <div className="absolute top-12 left-12 bg-[#6CC24A] text-black font-black uppercase tracking-widest px-6 py-2 rounded-full text-xs">
              {product.badge}
            </div>
          )}
        </div>

        {/* ── RIGHT PANEL: GIGANTIC INFO ──────────────────────────── */}
        <div className="w-full md:w-1/2 h-full flex flex-col overflow-y-auto p-8 md:p-20 custom-scrollbar bg-gradient-to-b from-[#111] to-black">
          
          <div className="mb-12">
            <p className="text-[#6CC24A] text-sm font-bold uppercase tracking-[0.4em] mb-6">
              {product.brand} · {product.category}
            </p>
            <h2 className="text-white leading-[0.85] flex flex-col tracking-tighter mb-8">
              <span className="text-[clamp(3rem,8vw,7rem)] font-extralight opacity-90">{product.name.split(' ')[0]}</span>
              <span className="text-[clamp(3rem,8vw,7rem)] font-extralight italic font-serif -mt-2 md:-mt-6 text-[#6CC24A]">
                {product.name.split(' ').slice(1).join(' ')}
              </span>
            </h2>
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              {product.longDescription}
            </p>
          </div>

          {/* GIGANTIC SELECTORS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Variant Selector */}
            <div>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Select Option</p>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => { if (v.inStock) setSelectedVariant(v); }}
                    disabled={!v.inStock}
                    className={`
                      px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border
                      ${selectedVariant.id === v.id 
                        ? "bg-white text-black border-white" 
                        : "bg-transparent text-white border-white/10 hover:border-white/40"}
                      ${!v.inStock && "opacity-30 cursor-not-allowed line-through"}
                    `}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Specs List */}
            <div>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Technical Specs</p>
              <div className="space-y-4">
                {Object.entries(product.specs).slice(0, 3).map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/40 text-sm font-light">{key}</span>
                    <span className="text-white text-sm font-medium">{val as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FOOTER: PRICE & ACTION ────────────────────────────── */}
          <div className="mt-auto pt-10 border-t border-white/10 flex flex-col xl:flex-row items-center justify-between gap-8">
            <div className="flex flex-col">
              <span className="text-white/40 text-xs font-medium uppercase mb-1">Total Investment</span>
              <span className="text-white text-6xl font-extralight tracking-tighter">
                ${selectedVariant.price.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center gap-6 w-full xl:w-auto">
              {/* Massive Qty Counter */}
              <div className="flex items-center bg-white/5 rounded-full border border-white/10 p-2">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-12 h-12 flex items-center justify-center text-white hover:text-[#6CC24A] transition-colors"><Minus size={20} /></button>
                <span className="text-white font-bold text-xl px-4 min-w-[50px] text-center">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="w-12 h-12 flex items-center justify-center text-white hover:text-[#6CC24A] transition-colors"><Plus size={20} /></button>
              </div>

              {/* Massive Add Button */}
              <button
                className={`
                  flex-grow xl:flex-grow-0 group flex items-center justify-center gap-4 px-12 py-6 rounded-full font-bold text-lg transition-all duration-500
                  ${added ? "bg-white text-black" : "bg-[#6CC24A] text-black hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(108,194,74,0.3)]"}
                `}
                onClick={handleAdd}
                disabled={!selectedVariant.inStock}
              >
                <ShoppingBag size={24} />
                {added ? "CONFIRMED" : selectedVariant.inStock ? "ADD TO CART" : "OUT OF STOCK"}
                {!added && <ArrowRight className="group-hover:translate-x-2 transition-transform" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
      `}</style>
    </div>
  );
}