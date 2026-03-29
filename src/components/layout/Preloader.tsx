"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Check if already visited this session
    const visited = sessionStorage.getItem("dripd_visited");
    if (visited) {
      setMounted(false);
      return;
    }

    const timer = setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = "";
      sessionStorage.setItem("dripd_visited", "1");
    }, 2400);

    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (hidden) {
      const t = setTimeout(() => setMounted(false), 800);
      return () => clearTimeout(t);
    }
  }, [hidden]);

  if (!mounted) return null;

  return (
    <div className={`preloader${hidden ? " hidden" : ""}`} aria-hidden="true">
      <div className="relative">
        <svg
          className="preloader__svg"
          viewBox="0 0 400 120"
          width="400"
          height="120"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stroke draw layer */}
          <text x="50%" y="80" dominantBaseline="auto" textAnchor="middle">
            {siteConfig.name}
          </text>
          {/* Fill layer — delayed */}
          <text
            x="50%"
            y="80"
            dominantBaseline="auto"
            textAnchor="middle"
            className="fill"
          >
            {siteConfig.name}
          </text>
        </svg>

        <p
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--gray-400)",
            fontSize: "0.75rem",
            textAlign: "center",
            marginTop: "16px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            opacity: 0,
            animation: "fillText 0.4s ease 1.6s forwards",
          }}
        >
          {siteConfig.tagline}
        </p>
      </div>

      <div className="preloader__line" />
    </div>
  );
}
