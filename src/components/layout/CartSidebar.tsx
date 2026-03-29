"use client";

import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartSidebar() {
  const { state, dispatch, totalItems, totalPrice, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* ── OVERLAY (Deep Blur) ──────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[2050] bg-black/80 backdrop-blur-xl transition-opacity duration-700 ${
          state.isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => dispatch({ type: "CLOSE_CART" })}
      />

      {/* ── GIGANTIC SIDEBAR ─────────────────────────────────────── */}
      <aside 
        className={`fixed right-0 top-0 h-full z-[2100] bg-[#0a0a0a] border-l border-white/5 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        } w-full sm:max-w-[550px] flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.5)]`}
      >
        
        {/* ── HEADER (Cinematic Typography) ───────────────────────── */}
        <div className="flex items-center justify-between px-8 py-10 md:px-12 border-b border-white/5">
          <div className="flex flex-col">
            <p className="text-[#6CC24A] text-[10px] font-black uppercase tracking-[0.4em] mb-2">Inventory</p>
            <h2 className="text-white leading-none flex items-center gap-4">
              <span className="text-4xl font-extralight tracking-tighter">Your</span>
              <span className="text-4xl font-extralight italic font-serif text-[#6CC24A]" style={{ fontFamily: 'serif' }}>
                Cart
              </span>
              <span className="flex items-center justify-center bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-white/40">
                {totalItems}
              </span>
            </h2>
          </div>
          <button
            onClick={() => dispatch({ type: "CLOSE_CART" })}
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* ── ITEMS AREA (Scrollable) ─────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-8 md:px-12 py-8 flex flex-col gap-6 custom-scrollbar">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <div className="w-32 h-32 rounded-full bg-white/[0.02] flex items-center justify-center mb-8 border border-white/5">
                <ShoppingBag size={48} className="text-white/10" />
              </div>
              <h3 className="text-white text-3xl font-extralight tracking-tighter italic font-serif mb-4" style={{ fontFamily: 'serif' }}>
                Your collection is <br /> currently empty.
              </h3>
              <button
                className="mt-6 px-10 py-4 border border-white/20 rounded-full text-white uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-all"
                onClick={() => dispatch({ type: "CLOSE_CART" })}
              >
                Return to Shop
              </button>
            </div>
          ) : (
            state.items.map((item) => (
              <div
                key={`${item.product.id}-${item.variant.id}`}
                className="group flex gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.04] transition-all duration-500"
              >
                {/* Visual Swatch */}
                <div
                  className="flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{ 
                    background: `radial-gradient(circle, ${item.product.color}33, transparent)`,
                    border: `1px solid ${item.product.color}22` 
                  }}
                >
                  <div 
                    className="w-10 h-10 rounded-full shadow-2xl animate-pulse" 
                    style={{ background: item.product.color }} 
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[#6CC24A] text-[9px] font-black uppercase tracking-widest mb-1">{item.product.brand}</p>
                      <h4 className="text-white text-xl font-light tracking-tight leading-tight">{item.product.name}</h4>
                      <p className="text-white/30 text-xs mt-1 font-mono">{item.variant.label}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.variant.id)}
                      className="text-white/20 hover:text-red-500 transition-colors p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Gigantic Quantity Stepper */}
                    <div className="flex items-center bg-black/40 rounded-full border border-white/5 p-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-[#6CC24A] transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-white font-bold text-sm px-3 min-w-[30px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-[#6CC24A] transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <span className="text-white text-xl font-extralight tracking-tighter">
                      ${(item.variant.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ── FOOTER (Total & Checkout) ───────────────────────────── */}
        {state.items.length > 0 && (
          <div className="px-8 md:px-12 py-10 border-t border-white/5 bg-gradient-to-b from-transparent to-black">
            <div className="flex justify-between items-end mb-8">
              <div className="flex flex-col">
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-1">Total Investment</span>
                <div className="flex items-center gap-2">
                   <ShieldCheck size={16} className="text-[#6CC24A]" />
                   <span className="text-white/40 text-xs">Secure Checkout</span>
                </div>
              </div>
              <span className="text-white text-5xl font-extralight tracking-tighter">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <button className="w-full py-6 bg-[#6CC24A] text-black font-black uppercase tracking-widest text-lg rounded-full flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_50px_rgba(108,194,74,0.2)]">
                Checkout Now <ArrowRight size={22} />
              </button>
              
              <div className="flex gap-4">
                <button
                  className="flex-1 py-4 border border-white/10 text-white/40 uppercase tracking-widest text-[10px] font-bold rounded-full hover:bg-white hover:text-black transition-all"
                  onClick={() => dispatch({ type: "CLOSE_CART" })}
                >
                  Continue Shopping
                </button>
                <button
                  className="px-6 py-4 border border-white/10 text-white/20 hover:text-red-500 transition-colors rounded-full"
                  onClick={() => dispatch({ type: "CLEAR_CART" })}
                  title="Clear All"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <p className="text-center mt-8 text-white/20 text-[10px] uppercase tracking-widest leading-loose">
              Taxes calculated at shipping · Free local pickup · 19+ Verification required
            </p>
          </div>
        )}
      </aside>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 10px; }
      `}</style>
    </>
  );
}