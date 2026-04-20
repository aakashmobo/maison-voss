import { useState } from "react";

const TICKER_TEXT = "CRAFTED IN PARIS \u00B7 WORN BY FEW \u00B7 MADE TO LAST \u00B7 AUTUMN SILENCE \u00B7 ";

const PRODUCTS = [
  {
    id: 1,
    look: "LOOK 01",
    name: "Deconstructed Cocoon Coat",
    material: "Bonded Wool Felt, Ash Grey — Antwerp",
    price: "€ 4,800",
    featured: true,
    aspectRatio: "3/4",
    col: "auto",
    imgSrc: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    look: "LOOK 02",
    name: "Asymmetric Draped Tunic",
    material: "Recycled Parachute Nylon, Obsidian — Tokyo",
    price: "€ 1,640",
    featured: false,
    aspectRatio: "3/4",
    imgSrc: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    look: "LOOK 03",
    name: "Pleated Spiral Trousers",
    material: "Pressed Paper Fabric, Raw White — Antwerp",
    price: "€ 2,100",
    featured: false,
    aspectRatio: "3/4",
    imgSrc: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    look: "LOOK 04",
    name: "Inverted Seam Blazer",
    material: "Double-Face Wool, Charcoal — Paris",
    price: "€ 3,200",
    featured: false,
    aspectRatio: "4/3",
    wide: true,
    imgSrc: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    look: "LOOK 05",
    name: "Sculptural Wrap Dress",
    material: "Heat-Moulded Organza, Bone — Tokyo",
    price: "€ 2,750",
    featured: false,
    aspectRatio: "3/4",
    imgSrc: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&auto=format&fit=crop&q=80",
  },
];

function ProductCard({
  product,
  wide = false,
}: {
  product: (typeof PRODUCTS)[0];
  wide?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#0d0d0d",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        gridColumn: wide ? "span 2" : undefined,
      }}
    >
      {/* Image zone */}
      <div
        style={{
          aspectRatio: wide ? "16/7" : "3/4",
          position: "relative",
          overflow: "hidden",
          backgroundColor: hovered ? "#222" : "#1a1a1a",
          transition: "background-color 0.3s",
        }}
      >
        <img
          src={product.imgSrc}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(40%) contrast(1.05) brightness(0.8)",
            opacity: hovered ? 0.9 : 0.75,
            transition: "opacity 0.35s, transform 0.5s",
            transform: hovered ? "scale(1.03)" : "scale(1)",
          }}
        />
        {/* Look label over image */}
        <span
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.25)",
            fontWeight: 300,
          }}
        >
          {product.look}
        </span>
      </div>

      {/* Featured badge */}
      {product.featured && (
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            backgroundColor: "#aaff4d",
            color: "#000",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            padding: "3px 8px",
            borderRadius: 0,
          }}
        >
          NEW
        </div>
      )}

      {/* Card info */}
      <div style={{ padding: "16px 0 0 0" }}>
        <div
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "18px",
            color: "#f5f0eb",
            lineHeight: 1.2,
            marginBottom: "6px",
          }}
        >
          {product.name}
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            color: "#9a9080",
            letterSpacing: "0.04em",
            marginBottom: "8px",
          }}
        >
          {product.material}
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#f5f0eb",
          }}
        >
          {product.price}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SECTION 5 — LOOKBOOK STRIP
───────────────────────────────────────── */
const PLATES = [
  { label: "PLATE 01", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80" },
  { label: "PLATE 02", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=80" },
  { label: "PLATE 03", img: "https://images.unsplash.com/photo-1502163140606-888448ae8cfe?w=500&auto=format&fit=crop&q=80" },
  { label: "PLATE 04", img: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=500&auto=format&fit=crop&q=80" },
  { label: "PLATE 05", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=80" },
  { label: "PLATE 06", img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=80" },
];

function LookbookStrip() {
  return (
    <section style={{ backgroundColor: "#000", padding: "80px 0" }}>
      {/* Label */}
      <div
        style={{
          textAlign: "center",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "10px",
          letterSpacing: "0.4em",
          color: "#9a9080",
          textTransform: "uppercase",
          marginBottom: "32px",
        }}
      >
        LOOKBOOK — SS 2025
      </div>

      {/* Scrollable row */}
      <div
        className="lookbook-scroll"
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "2px",
          padding: "0 64px",
        }}
      >
        {PLATES.map((plate) => (
          <div
            key={plate.label}
            className="lookbook-card"
            style={{
              width: "280px",
              flexShrink: 0,
              aspectRatio: "2/3",
              backgroundColor: "#111",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={plate.img}
              alt={plate.label}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                filter: "grayscale(45%) contrast(1.1) brightness(0.78)",
              }}
            />
            {/* Bottom vignette */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 45%)",
              pointerEvents: "none",
            }} />
            <span
              style={{
                position: "absolute",
                bottom: "12px",
                left: "14px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.35)",
                fontWeight: 300,
                textTransform: "uppercase",
              }}
            >
              {plate.label}
            </span>
          </div>
        ))}
      </div>

      {/* Caption */}
      <div
        style={{
          textAlign: "center",
          marginTop: "16px",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "10px",
          letterSpacing: "0.2em",
          color: "#9a9080",
        }}
      >
        Scroll to explore →
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 6 — NEWSLETTER
───────────────────────────────────────── */
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  return (
    <section
      style={{
        backgroundColor: "#0d0d0d",
        borderTop: "1px solid #1a1a1a",
        padding: "80px 64px",
      }}
    >
      <div style={{ display: "flex", gap: "0", alignItems: "flex-start" }}>
        {/* LEFT */}
        <div style={{ flex: "0 0 50%", paddingRight: "80px" }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "10px",
              letterSpacing: "0.4em",
              color: "#9a9080",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            STAY CLOSE
          </div>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "40px",
              color: "#f5f0eb",
              lineHeight: 1.2,
              margin: 0,
              marginBottom: "12px",
            }}
          >
            Be first to know.
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "13px",
              color: "#9a9080",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            New arrivals, atelier stories, and invitations to private events.{" "}
            Nothing more.
          </p>
        </div>

        {/* RIGHT */}
        <div style={{ flex: "0 0 50%", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "38px" }}>
          {/* Inline form */}
          <div style={{ display: "flex", gap: "0" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              placeholder="Your email address"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                borderBottom: `1px solid ${inputFocused ? "#f5f0eb" : "#333"}`,
                color: "#f5f0eb",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "14px",
                padding: "12px 0",
                outline: "none",
                transition: "border-bottom-color 0.2s",
              }}
            />
            <button
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              style={{
                background: btnHover ? "#f5f0eb" : "#aaff4d",
                color: "#000",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.2em",
                padding: "12px 24px",
                borderRadius: 0,
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              JOIN →
            </button>
          </div>

          {/* Fine print */}
          <div
            style={{
              marginTop: "12px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "10px",
              color: "#9a9080",
              letterSpacing: "0.04em",
            }}
          >
            We send four emails per year. That's it.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 7 — FOOTER
───────────────────────────────────────── */
const FOOTER_COLS = [
  {
    label: "COLLECTION",
    links: ["The Silence — SS 2025", "Archive", "Bespoke", "Gift Cards"],
  },
  {
    label: "ATELIER",
    links: ["Our Story", "Craft", "Sustainability", "Press"],
  },
  {
    label: "CLIENT",
    links: ["Sizing Guide", "Care Instructions", "Returns", "Contact"],
  },
];

function SiteFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        borderTop: "1px solid #1a1a1a",
        padding: "48px 64px",
      }}
    >
      {/* Four columns */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0" }}>
        {/* Col 1 — Wordmark */}
        <div>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "18px",
              color: "#f5f0eb",
            }}
          >
            Maison Voss
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "10px",
              color: "#9a9080",
              letterSpacing: "0.06em",
              marginTop: "8px",
            }}
          >
            Paris · Est. 2008
          </div>
          <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
            {["IG", "TK", "PT"].map((s) => (
              <span
                key={s}
                className="social-link"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Cols 2–4 — Link columns */}
        {FOOTER_COLS.map((col) => (
          <div key={col.label}>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "9px",
                letterSpacing: "0.3em",
                color: "#9a9080",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              {col.label}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {col.links.map((link) => (
                <span
                  key={link}
                  className="footer-link"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "12px",
                    lineHeight: 2.2,
                  }}
                >
                  {link}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #1a1a1a",
          marginTop: "48px",
          paddingTop: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "10px",
            color: "#9a9080",
          }}
        >
          © 2025 Maison Voss. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "10px",
            color: "#9a9080",
          }}
        >
          Built by MOBO ·{" "}
          <span style={{ color: "#aaff4d" }}>Powered by VibX AI</span>
        </span>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────── */
export function Home() {
  const [hoverCta, setHoverCta] = useState(false);
  const [hoverViewAll, setHoverViewAll] = useState(false);

  return (
    <div
      style={{ backgroundColor: "#000000", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════ */}
      <div style={{ position: "relative", width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#000" }}>

        {/* ── NAV BAR ── */}
        <nav style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "28px 48px 28px 48px",
          borderBottom: "1px solid #141414",
          zIndex: 20,
          position: "relative",
        }}>
          {/* Wordmark */}
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#f5f0eb",
            fontSize: "11px",
            letterSpacing: "0.42em",
            fontWeight: 400,
            textTransform: "uppercase",
          }}>
            MAISON VOSS
          </span>

          {/* Nav links */}
          <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
            {["Collections", "Atelier", "Lookbook", "Contact"].map((item) => (
              <span
                key={item}
                style={{
                  color: "#4a4540",
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  fontWeight: 300,
                  cursor: "pointer",
                  transition: "color 0.25s",
                  fontFamily: "'DM Sans', sans-serif",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f5f0eb")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#4a4540")}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Right — season tag */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#4a4540",
              fontSize: "10px",
              letterSpacing: "0.22em",
              fontWeight: 300,
            }}>
              AW 2025
            </span>
            <div style={{ width: "1px", height: "12px", backgroundColor: "#2a2a2a" }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#4a4540",
              fontSize: "10px",
              letterSpacing: "0.22em",
              fontWeight: 300,
            }}>
              PARIS
            </span>
          </div>
        </nav>

        {/* ── HERO BODY ── */}
        <div style={{ display: "flex", flex: 1, minHeight: "calc(100vh - 68px - 40px)" }}>

          {/* LEFT COLUMN */}
          <div style={{
            flex: "1 1 55%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 40px 56px 48px",
            borderRight: "1px solid #141414",
          }}>

            {/* Top meta row */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{ width: "28px", height: "1px", backgroundColor: "#2a2a2a" }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.38em",
                color: "#4a4540",
                fontWeight: 300,
                textTransform: "uppercase",
              }}>
                THE VOID COLLECTION — AW 2025
              </span>
            </div>

            {/* Display typography block */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "48px", paddingBottom: "48px" }}>

              {/* "THE NEW" — thin, wide tracking */}
              <div style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(22px, 3.2vw, 52px)",
                color: "#f5f0eb",
                letterSpacing: "0.55em",
                lineHeight: 1,
                opacity: 0.28,
                marginBottom: "-6px",
                paddingLeft: "4px",
              }}>
                THE NEW
              </div>

              {/* "SILENCE" — massive italic, with rule slicing through */}
              <div style={{ position: "relative", display: "inline-block" }}>
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 900,
                  fontStyle: "italic",
                  fontSize: "clamp(96px, 16vw, 200px)",
                  color: "#f5f0eb",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.85,
                  userSelect: "none",
                  position: "relative",
                  zIndex: 1,
                  whiteSpace: "nowrap",
                }}>
                  SILENCE
                </div>
                {/* Architectural rule cutting through letters */}
                <div style={{
                  position: "absolute",
                  top: "52%",
                  left: "-48px",
                  right: "-60vw",
                  height: "1px",
                  backgroundColor: "#2e2e2e",
                  zIndex: 2,
                  pointerEvents: "none",
                }} />
              </div>

              {/* Subline */}
              <div style={{ marginTop: "52px", display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ width: "24px", height: "1px", backgroundColor: "#2a2a2a" }} />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.36em",
                  color: "#9a9080",
                  fontWeight: 300,
                  textTransform: "uppercase",
                }}>
                  AW 2025 COLLECTION — PARIS
                </span>
              </div>

              {/* CTA */}
              <div style={{ marginTop: "40px" }}>
                <button
                  onMouseEnter={() => setHoverCta(true)}
                  onMouseLeave={() => setHoverCta(false)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.18em",
                    color: hoverCta ? "#aaff4d" : "#f5f0eb",
                    textDecoration: "underline",
                    textDecorationColor: hoverCta ? "#aaff4d" : "#2a2a2a",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "7px",
                    transition: "color 0.3s, text-decoration-color 0.3s",
                    fontWeight: 300,
                  }}
                >
                  Explore Collection →
                </button>
              </div>
            </div>

            {/* Bottom meta row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.28em",
                color: "#2e2e2e",
                fontWeight: 300,
                textTransform: "uppercase",
              }}>
                LIMITED EDITION — 120 PIECES
              </span>
              <span style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: "11px",
                color: "#2e2e2e",
                fontWeight: 300,
              }}>
                Since 2008
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN — Full-bleed portrait */}
          <div style={{
            flex: "0 0 45%",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#060606",
          }}>
            {/* Portrait image */}
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&auto=format&fit=crop&q=80"
              alt="Editorial fashion — Maison Voss AW 2025"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 12%",
                filter: "contrast(1.12) brightness(0.82) saturate(1.1)",
                display: "block",
              }}
            />

            {/* Vignette overlays */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.7) 100%)",
              pointerEvents: "none",
            }} />
            {/* Left edge fade — blends into left column */}
            <div style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "80px",
              background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 100%)",
              pointerEvents: "none",
            }} />

            {/* Film grain SVG overlay */}
            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0.04,
                pointerEvents: "none",
                mixBlendMode: "screen",
              }}
            >
              <filter id="grain">
                <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#grain)" />
            </svg>

            {/* "NOW ARRIVING" pill — top right */}
            <div style={{
              position: "absolute",
              top: "32px",
              right: "24px",
              backgroundColor: "#aaff4d",
              borderRadius: "999px",
              padding: "7px 18px",
              display: "flex",
              alignItems: "center",
              gap: "7px",
              zIndex: 10,
            }}>
              <div style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "#000",
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.22em",
                color: "#000",
                fontWeight: 600,
                whiteSpace: "nowrap",
                textTransform: "uppercase",
              }}>
                Now Arriving
              </span>
            </div>

            {/* Bottom-left photo credit */}
            <div style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "8px",
                letterSpacing: "0.22em",
                color: "rgba(245,240,235,0.3)",
                fontWeight: 300,
                textTransform: "uppercase",
              }}>
                PHT. LENA VOGT
              </span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "8px",
                letterSpacing: "0.22em",
                color: "rgba(245,240,235,0.18)",
                fontWeight: 300,
                textTransform: "uppercase",
              }}>
                PARIS — 2025
              </span>
            </div>

            {/* Vertical right-edge label */}
            <div style={{
              position: "absolute",
              right: "16px",
              bottom: "80px",
              transform: "rotate(90deg)",
              transformOrigin: "right bottom",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "8px",
              letterSpacing: "0.3em",
              color: "rgba(245,240,235,0.15)",
              fontWeight: 300,
              whiteSpace: "nowrap",
              textTransform: "uppercase",
            }}>
              MAISON VOSS · AW 2025
            </div>
          </div>
        </div>

        {/* ── TICKER STRIP ── */}
        <div style={{
          borderTop: "1px solid #141414",
          backgroundColor: "#000",
          height: "40px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "ticker 50s linear infinite",
          }}>
            {[0, 1].map((i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.28em",
                  color: "#2a2a2a",
                  fontWeight: 300,
                }}
              >
                {Array.from({ length: 10 }).map(() => TICKER_TEXT).join("")}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          SECTION 2 — COLLECTION GRID
      ════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "80px 64px" }}>
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "48px",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "10px",
              letterSpacing: "0.4em",
              color: "#9a9080",
              textTransform: "uppercase",
            }}
          >
            AW 2025 — THE VOID COLLECTION
          </span>
          <button
            onMouseEnter={() => setHoverViewAll(true)}
            onMouseLeave={() => setHoverViewAll(false)}
            style={{
              background: "none",
              border: "none",
              borderBottom: "1px solid #9a9080",
              padding: "0 0 3px 0",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: hoverViewAll ? "#f5f0eb" : "#9a9080",
              transition: "color 0.2s",
            }}
          >
            View All Pieces →
          </button>
        </div>

        {/* Row 1: 3 columns — 1.4fr 1fr 1fr */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: "2px",
            marginBottom: "2px",
          }}
        >
          {PRODUCTS.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Row 2: wide card spans 2, last card 1 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: "2px",
          }}
        >
          {/* Wide card spans cols 1+2 */}
          <div style={{ gridColumn: "span 2" }}>
            <ProductCard key={PRODUCTS[3].id} product={PRODUCTS[3]} wide />
          </div>
          {/* Single card col 3 */}
          <ProductCard key={PRODUCTS[4].id} product={PRODUCTS[4]} />
        </div>
      </section>

      {/* ════════════════════════════════════
          SECTION 3 — EDITORIAL PULL QUOTE
      ════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#000",
          borderTop: "1px solid #1a1a1a",
          borderBottom: "1px solid #1a1a1a",
          padding: "120px 64px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Label */}
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "10px",
              letterSpacing: "0.4em",
              color: "#9a9080",
              textTransform: "uppercase",
              marginBottom: "32px",
            }}
          >
            THE PHILOSOPHY
          </div>

          {/* Pull quote */}
          <blockquote
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "#f5f0eb",
              lineHeight: 1.2,
              margin: 0,
              marginBottom: "40px",
            }}
          >
            "Silence is not the absence of sound. It is the{" "}
            <em style={{ fontStyle: "normal", color: "#aaff4d" }}>presence</em>{" "}
            of everything that matters."
          </blockquote>

          {/* Attribution */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "1px",
                backgroundColor: "#1a1a1a",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "10px",
                letterSpacing: "0.4em",
                color: "#9a9080",
                textTransform: "uppercase",
              }}
            >
              MAISON VOSS — PARIS, 2025
            </span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SECTION 4 — BRAND STORY
      ════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "100px 64px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "80px",
          }}
        >
          {/* LEFT — Portrait image */}
          <div style={{ flex: "0 0 42%" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "2/3",
                backgroundColor: "#111",
                border: "1px solid #1a1a1a",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&auto=format&fit=crop&q=80"
                alt="Atelier Paris — Maison Voss workshop"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  filter: "grayscale(50%) contrast(1.06) brightness(0.75)",
                }}
              />
              {/* Subtle dark overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>
            <div
              style={{
                marginTop: "12px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "10px",
                letterSpacing: "0.15em",
                color: "#9a9080",
              }}
            >
              Atelier, Paris 8ème — 2024
            </div>
          </div>

          {/* RIGHT — Story copy */}
          <div style={{ flex: "1 1 55%" }}>
            {/* Label */}
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "10px",
                letterSpacing: "0.4em",
                color: "#9a9080",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              OUR STORY
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 3.5vw, 48px)",
                color: "#f5f0eb",
                lineHeight: 1.1,
                margin: 0,
                marginBottom: "28px",
              }}
            >
              Crafted in silence.{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Worn with intention.
              </span>
            </h2>

            {/* Body copy */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
              {[
                "Founded in Paris in 2008, Maison Voss was built on a single belief: that true luxury is restraint.",
                "Every piece in our collection is made by hand in our 8th arrondissement atelier, using only fabrics sourced from mills that have operated for over a century.",
                "We make twelve pieces per season. No more.",
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: "15px",
                    color: "#9a9080",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: "1px", backgroundColor: "#1a1a1a", marginBottom: "40px" }} />

            {/* Craft stats */}
            <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
              {[
                { num: "12", label: "PIECES PER SEASON" },
                { num: "47", label: "ARTISANS" },
                { num: "16", label: "YEARS" },
              ].map((stat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "stretch" }}>
                  <div style={{ paddingRight: i < 2 ? "40px" : "0", paddingLeft: i > 0 ? "40px" : "0" }}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 400,
                        fontStyle: "italic",
                        fontSize: "36px",
                        color: "#f5f0eb",
                        lineHeight: 1,
                        marginBottom: "8px",
                      }}
                    >
                      {stat.num}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: "9px",
                        letterSpacing: "0.3em",
                        color: "#9a9080",
                        textTransform: "uppercase",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                  {i < 2 && (
                    <div
                      style={{
                        width: "1px",
                        backgroundColor: "#1a1a1a",
                        alignSelf: "stretch",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SECTION 5 — LOOKBOOK STRIP
      ════════════════════════════════════ */}
      <LookbookStrip />

      {/* ════════════════════════════════════
          SECTION 6 — NEWSLETTER
      ════════════════════════════════════ */}
      <NewsletterSection />

      {/* ════════════════════════════════════
          SECTION 7 — FOOTER
      ════════════════════════════════════ */}
      <SiteFooter />

      {/* Global keyframes */}
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .lookbook-scroll::-webkit-scrollbar {
          display: none;
        }
        .lookbook-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .lookbook-card {
          border: 1px solid #1a1a1a;
          transition: border-color 0.25s;
        }
        .lookbook-card:hover {
          border-color: #333;
        }
        .footer-link {
          transition: color 0.2s;
          cursor: pointer;
          color: #9a9080;
        }
        .footer-link:hover {
          color: #f5f0eb;
        }
        .social-link {
          transition: color 0.2s;
          cursor: pointer;
          color: #9a9080;
        }
        .social-link:hover {
          color: #f5f0eb;
        }
      `}</style>
    </div>
  );
}

export default Home;
