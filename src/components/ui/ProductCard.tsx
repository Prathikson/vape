"use client";

import type { Product } from "@/lib/products";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div 
      className="group cursor-pointer flex flex-col w-full bg-[#111] overflow-hidden rounded-[2rem] md:rounded-[3rem] transition-all duration-700 hover:bg-[#161616]"
      onClick={() => onClick(product)}
    >
      {/* GIGANTIC IMAGE AREA */}
      <div
        className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden flex items-center justify-center p-12 md:p-20"
        style={{
          background: `radial-gradient(circle at center, ${product.color}15 0%, transparent 80%)`,
        }}
      >
        {/* Abstract Background Blur */}
        <div 
          className="absolute inset-0 opacity-20 blur-[100px] transition-transform duration-1000 group-hover:scale-150"
          style={{ background: product.color }}
        />

        {/* The "Gigantic" Abstract Shape & Brand Label */}
        <div
          className="relative z-10 w-full h-full rounded-[4rem] border border-white/5 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 group-hover:border-white/20"
          style={{
            background: `linear-gradient(135deg, ${product.color}11 0%, ${product.color}33 100%)`,
          }}
        >
          <span className="text-white/10 text-[10vw] font-black uppercase tracking-tighter absolute select-none">
            {product.brand.split(' ')[0]}
          </span>
          
          {/* Badge */}
          {(product.badge || product.new) && (
            <div className="absolute top-8 left-8 bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-2xl">
              {product.badge || "New Arrival"}
            </div>
          )}
        </div>

        {/* Hover Interaction Plus Icon */}
        <div className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 shadow-2xl">
          <Plus className="text-black" size={32} />
        </div>
      </div>

      {/* GIGANTIC INFO AREA */}
      <div className="p-10 md:p-14 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-[#6CC24A] text-xs font-bold uppercase tracking-[0.3em] mb-3">
              {product.brand}
            </p>
            <h3 className="text-white text-[2.5rem] md:text-[3.5rem] font-extralight tracking-tighter leading-[0.9] mb-4 group-hover:text-[#6CC24A] transition-colors duration-500">
              {product.name}
            </h3>
          </div>
          <span className="text-white text-3xl font-light opacity-50">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-white/40 text-lg leading-relaxed max-w-sm font-light mb-10 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto">
          <button
            className="w-full py-6 rounded-full border border-white/10 text-white font-medium uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-500"
            onClick={(e) => { e.stopPropagation(); onClick(product); }}
          >
            View Product Specs
          </button>
        </div>
      </div>
    </div>
  );
}