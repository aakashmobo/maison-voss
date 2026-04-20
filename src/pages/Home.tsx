import { useRef, useEffect, useState } from "react";

const TICKER_TEXT = "CRAFTED IN PARIS \u00B7 WORN BY FEW \u00B7 MADE TO LAST \u00B7 AUTUMN SILENCE \u00B7 ";

export function Home() {
  const [hoverCta, setHoverCta] = useState(false);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col"
      style={{ backgroundColor: "#000000", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── NAV BAR ── */}
      <nav
        className="flex items-center justify-between px-10 pt-8 pb-0 z-20"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#f5f0eb",
            fontSize: "13px",
            letterSpacing: "0.25em",
            fontWeight: 400,
          }}
        >
          MAISON VOSS
        </span>

        <div className="flex items-center gap-10">
          {["Collections", "Atelier", "Lookbook", "Contact"].map((item) => (
            <span
              key={item}
              style={{
                color: "#9a9080",
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontWeight: 300,
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f5f0eb")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a9080")}
            >
              {item.toUpperCase()}
            </span>
          ))}
        </div>

        <span
          style={{
            color: "#9a9080",
            fontSize: "11px",
            letterSpacing: "0.18em",
          }}
        >
          SS 2025
        </span>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <div className="flex flex-1 items-stretch" style={{ minHeight: "calc(100vh - 120px)" }}>
        {/* LEFT COLUMN */}
        <div
          className="flex flex-col justify-between"
          style={{ flex: "1 1 58%", padding: "48px 48px 48px 40px" }}
        >
          {/* Top meta label */}
          <div style={{ marginBottom: "0px" }}>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "#9a9080",
                fontWeight: 300,
              }}
            >
              · SS 2025 — PARIS ATELIER
            </span>
          </div>

          {/* THE NEW + SILENCE BLOCK */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "32px" }}>
            {/* THE NEW */}
            <div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 100,
                fontSize: "clamp(36px, 5vw, 72px)",
                color: "#f5f0eb",
                letterSpacing: "0.3em",
                lineHeight: 1,
                opacity: 0.55,
                marginBottom: "4px",
              }}
            >
              THE NEW
            </div>

            {/* SILENCE — massive italic with horizontal rule */}
            <div style={{ position: "relative", lineHeight: 0.88, marginBottom: "0px" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 900,
                  fontStyle: "italic",
                  fontSize: "clamp(80px, 13vw, 160px)",
                  color: "#f5f0eb",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.88,
                  userSelect: "none",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                SILENCE
              </div>

              {/* Horizontal rule cutting through the middle of the letters */}
              <div
                style={{
                  position: "absolute",
                  top: "54%",
                  left: "-40px",
                  right: "-200px",
                  height: "1px",
                  backgroundColor: "#3a3a3a",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Season label */}
            <div style={{ marginTop: "40px" }}>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.32em",
                  color: "#9a9080",
                  fontWeight: 300,
                  textTransform: "uppercase",
                }}
              >
                SS 2025 COLLECTION — PARIS
              </span>
            </div>

            {/* CTA */}
            <div style={{ marginTop: "32px" }}>
              <button
                onMouseEnter={() => setHoverCta(true)}
                onMouseLeave={() => setHoverCta(false)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  letterSpacing: "0.15em",
                  color: hoverCta ? "#aaff4d" : "#f5f0eb",
                  textDecoration: "underline",
                  textDecorationColor: hoverCta ? "#aaff4d" : "#3a3a3a",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "6px",
                  transition: "color 0.25s, text-decoration-color 0.25s",
                  fontWeight: 300,
                }}
              >
                Explore Collection →
              </button>
            </div>
          </div>

          {/* Bottom — small edition note */}
          <div style={{ paddingTop: "24px" }}>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "#3a3a3a",
                fontWeight: 300,
              }}
            >
              LIMITED EDITION — 120 PIECES
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN — Editorial Portrait */}
        <div
          style={{
            flex: "0 0 38%",
            padding: "32px 40px 32px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "420px",
              height: "100%",
              minHeight: "520px",
            }}
          >
            {/* Portrait Placeholder */}
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#1c1c1c",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle texture lines */}
              <svg
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }}
                viewBox="0 0 400 600"
                preserveAspectRatio="xMidYMid slice"
              >
                {Array.from({ length: 30 }).map((_, i) => (
                  <line
                    key={i}
                    x1={0}
                    y1={i * 22}
                    x2={400}
                    y2={i * 22}
                    stroke="#f5f0eb"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>

              {/* Central editorial SVG figure — fashion silhouette */}
              <svg
                viewBox="0 0 240 480"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "70%",
                  height: "auto",
                  opacity: 0.18,
                }}
                fill="none"
                stroke="#f5f0eb"
                strokeWidth="1"
              >
                {/* Head */}
                <ellipse cx="120" cy="50" rx="28" ry="34" />
                {/* Neck */}
                <line x1="112" y1="82" x2="108" y2="110" />
                <line x1="128" y1="82" x2="132" y2="110" />
                {/* Shoulders — wide, structured coat */}
                <path d="M60 115 Q80 108 108 110 L132 110 Q160 108 180 115" strokeLinecap="round" />
                {/* Coat body — long, columnar */}
                <path d="M60 115 L52 260 L70 430 L120 440 L170 430 L188 260 L180 115" strokeLinejoin="round" />
                {/* Coat lapels */}
                <path d="M108 110 L98 155 L120 175 L142 155 L132 110" />
                {/* Arms */}
                <path d="M60 115 Q40 180 44 250" strokeLinecap="round" />
                <path d="M180 115 Q200 180 196 250" strokeLinecap="round" />
                {/* Coat belt */}
                <line x1="72" y1="235" x2="168" y2="235" strokeWidth="1.5" />
                {/* Legs / hem */}
                <path d="M88 430 L84 478" strokeLinecap="round" />
                <path d="M152 430 L156 478" strokeLinecap="round" />
              </svg>

              {/* Photographer meta — bottom left inside photo */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  color: "#9a9080",
                  opacity: 0.6,
                }}
              >
                PHT. LENA VOGT — PARIS 2025
              </div>
            </div>

            {/* Floating NOW ARRIVING pill */}
            <div
              style={{
                position: "absolute",
                top: "28px",
                right: "-16px",
                backgroundColor: "#aaff4d",
                borderRadius: "999px",
                padding: "6px 16px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  color: "#000",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                NOW ARRIVING
              </span>
            </div>

            {/* Side vertical text */}
            <div
              style={{
                position: "absolute",
                right: "-32px",
                top: "50%",
                transform: "translateY(-50%) rotate(90deg)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.25em",
                color: "#3a3a3a",
                whiteSpace: "nowrap",
              }}
            >
              MAISON VOSS · PARIS
            </div>
          </div>
        </div>
      </div>

      {/* ── TICKER STRIP ── */}
      <div
        style={{
          borderTop: "1px solid #1c1c1c",
          backgroundColor: "#000",
          height: "36px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "ticker 40s linear infinite",
          }}
        >
          {/* Duplicate for seamless loop */}
          {[0, 1].map((i) => (
            <span
              key={i}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.22em",
                color: "#3a3a3a",
                fontWeight: 300,
                paddingRight: "0",
              }}
            >
              {Array.from({ length: 8 })
                .map(() => TICKER_TEXT)
                .join("")}
            </span>
          ))}
        </div>
      </div>

      {/* CSS keyframes for ticker */}
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default Home;
