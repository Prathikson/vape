"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      style={{
        background: "var(--black)",
        minHeight: "100vh", // Full screen height
        width: "100%",      // Full width
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(40px, 10vw, 100px)",
        borderTop: "1px solid rgba(245,245,240,0.06)",
        overflow: "hidden"
      }}
    >
      <div 
        className="grid lg:grid-cols-2 gap-16 items-center" 
        style={{ width: "100%", maxWidth: "1600px", margin: "0 auto" }}
      >
        {/* Left Side: Massive Typography */}
        <div style={{ flex: 1 }}>
          <p className="section-label" style={{ fontSize: "1rem", letterSpacing: "0.4em", marginBottom: "2rem", opacity: 0.8 }}>
            JOIN THE INNER CIRCLE
          </p>
          <h2 
            style={{ 
              fontSize: "clamp(3.5rem, 10vw, 9rem)", // Gigantic Fluid Type
              lineHeight: 0.9,
              color: "var(--white)", 
              marginBottom: "2rem",
              fontWeight: 800,
              letterSpacing: "-0.04em"
            }}
          >
            Stay in the <br />
            loop. <br />
            <em className="italic-serif" style={{ color: "var(--green)" }}>Get drops first.</em>
          </h2>
          <p style={{ 
            color: "var(--gray-400)", 
            lineHeight: 1.5, 
            fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)", 
            maxWidth: "600px" 
          }}>
            New arrivals, exclusive deals, and local events — delivered to your inbox. 
            No spam, just the good stuff.
          </p>
        </div>

        {/* Right Side: Form */}
        <div style={{ width: "100%", maxWidth: "600px" }}>
          {submitted ? (
            <div
              style={{
                background: "rgba(184,244,36,0.05)",
                border: "1px solid rgba(184,244,36,0.2)",
                borderRadius: "var(--radius-card)",
                padding: "4rem 2rem",
                textAlign: "center",
              }}
            >
              <p style={{ 
                fontFamily: "var(--font-display)", 
                fontWeight: 700, 
                fontSize: "2.5rem", 
                color: "var(--green)", 
                marginBottom: 16 
              }}>
                You&apos;re in! 🎉
              </p>
              <p style={{ color: "var(--gray-400)", fontSize: "1.1rem" }}>
                Welcome to the community. First drop notification coming soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div style={{ position: "relative" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    width: "100%",
                    padding: "30px 40px", // Larger padding
                    borderRadius: "var(--radius-pill)",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(245,245,240,0.1)",
                    color: "var(--white)",
                    fontFamily: "var(--font-body)",
                    fontSize: "1.5rem", // Gigantic input text
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => { 
                    (e.target as HTMLInputElement).style.borderColor = "var(--green)";
                    (e.target as HTMLInputElement).style.background = "rgba(255,255,255,0.05)";
                  }}
                  onBlur={(e) => { 
                    (e.target as HTMLInputElement).style.borderColor = "rgba(245,245,240,0.1)"; 
                    (e.target as HTMLInputElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                />
              </div>
              <button 
                type="submit" 
                className="btn-pill btn-pill--green" 
                style={{ 
                  justifyContent: "center", 
                  padding: "30px", 
                  fontSize: "1.2rem", 
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em"
                }}
              >
                Join Now <ArrowRight size={24} style={{ marginLeft: 12 }} />
              </button>
              <p style={{ color: "var(--gray-500)", fontSize: "0.9rem", textAlign: "center", marginTop: "1rem" }}>
                Must be 19+ to subscribe. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}