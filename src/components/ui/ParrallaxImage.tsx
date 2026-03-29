"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface ParallaxImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

export default function ParallaxImage({
  src = "https://images.unsplash.com/photo-1550147760-44c9966d6bc7?auto=format&fit=crop&q=80&w=1200",
  alt = "Parallax Image",
  className = "",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    // Set initial 3D properties
    gsap.set(container, { transformPerspective: 1200 });

    // Create fast-access setters for better performance
    const xTo = gsap.quickTo(container, "rotationY", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(container, "rotationX", { duration: 0.5, ease: "power3.out" });
    
    // Parallax movement for the image inside
    const imgXTo = gsap.quickTo(image, "xPercent", { duration: 0.5, ease: "power3.out" });
    const imgYTo = gsap.quickTo(image, "yPercent", { duration: 0.5, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      
      // Calculate normalized mouse position (-0.5 to 0.5)
      const xPercent = (e.clientX - left) / width - 0.5;
      const yPercent = (e.clientY - top) / height - 0.5;

      // Apply 3D Tilt (Rotation)
      xTo(xPercent * 20); // Tilt left/right 20 degrees
      yTo(yPercent * -20); // Tilt up/down 20 degrees

      // Apply Internal Parallax (Movement)
      imgXTo(xPercent * -10); // Slide image slightly in opposite direction
      imgYTo(yPercent * -10);
    };

    const handleMouseLeave = () => {
      // Reset everything to center
      xTo(0);
      yTo(0);
      imgXTo(0);
      imgYTo(0);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border border-white/10 shadow-2xl bg-[#111] transition-shadow duration-500 hover:shadow-[#6CC24A]/10 ${className}`}
      style={{ willChange: "transform" }}
    >
      {/* The Image is scaled up 1.2x to avoid showing edges during parallax movement */}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover scale-[1.2] pointer-events-none"
      />
      
      {/* Glossy Overlay for high-end look */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 pointer-events-none" />
      
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 rounded-[inherit] border border-white/5 pointer-events-none" />
    </div>
  );
}