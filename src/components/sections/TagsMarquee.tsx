"use client";

import React from "react";

// --- SVG Icons ---
const IconVape = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 10h-1V7c0-1.1-.9-2-2-2h-2V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM9 3h2v2H9V3zm6 18H5V7h10v14zm3-4h-1v-5h1v5z" />
  </svg>
);

const IconJuice = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15 5V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v2H5v2h14V5h-4zM7 9v11c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V9H7zm4 10H9v-2h2v2zm0-4H9v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z" />
  </svg>
);

const IconCloud = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
  </svg>
);

// --- Configuration ---
const tagStyles = {
  blue: "bg-[#85C7F2] text-black",
  yellow: "bg-[#FFEA00] text-black",
  lime: "bg-[#6CC24A] text-black",
  forest: "bg-[#2D5233] text-white",
  white: "bg-white text-black",
};

const tagsRow1 = [
  { label: "Devices", type: "blue", icon: <IconVape /> },
  { label: "E-Liquids", type: "white" },
  { label: "Disposables", type: "forest" },
  { label: "", type: "white", icon: <IconCloud />, circle: true },
  { label: "Pods", type: "lime" },
  { label: "Vape Kits", type: "yellow" },
  { label: "Premium", type: "forest" },
  { label: "", type: "white", icon: <IconJuice />, circle: true },
];

const tagsRow2 = [
  { label: "Salt Nic", type: "lime" },
  { label: "Treatments", type: "yellow" },
  { label: "", type: "forest", icon: <IconVape />, circle: true },
  { label: "High VG", type: "blue" },
  { label: "", type: "forest", icon: <IconCloud />, circle: true },
  { label: "Coils", type: "lime" },
  { label: "Tanks", type: "blue" },
];

export default function TagsMarquee() {
  const renderRow = (items: any[], reverse = false, speed = "60s") => {
    // Triple the items to ensure seamless looping
    const displayItems = [...items, ...items, ...items];

    return (
      <div className="flex overflow-hidden select-none py-4 group">
        <div
          className={`flex flex-nowrap min-w-full shrink-0 items-center gap-6 animate-marquee ${
            reverse ? "direction-reverse" : ""
          }`}
          style={{ animationDuration: speed }}
        >
          {displayItems.map((tag, i) => (
            <div
              key={i}
              className={`
                flex items-center justify-center gap-4 px-10 py-6 
                text-4xl font-bold uppercase tracking-tight 
                transition-transform hover:scale-105
                ${tag.circle ? "rounded-full w-28 h-28 px-0" : "rounded-full"}
                ${tagStyles[tag.type as keyof typeof tagStyles]}
                animate-float
              `}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {tag.icon && <span>{tag.icon}</span>}
              {tag.label}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#111] py-20 overflow-hidden flex flex-col gap-4">
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .direction-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {renderRow(tagsRow1, false, "50s")}
      {renderRow(tagsRow2, true, "70s")}
      {renderRow(tagsRow1, false, "55s")}
    </section>
  );
}