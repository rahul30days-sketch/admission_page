import { ImageResponse } from "next/og";

export const alt = "SITASRM Engineering & Research Institute — MBA & B.Tech Admissions 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #070f26 0%, #0a1838 55%, #102450 100%)",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(48,97,238,0.55), transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -100,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(255,107,44,0.4), transparent 70%)",
            display: "flex",
          }}
        />

        {/* header */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #5d87f7, #1d49d8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
              color: "white",
            }}
          >
            S
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1 }}>SITASRM</div>
            <div style={{ fontSize: 18, color: "#a9d2ff" }}>Engineering &amp; Research Institute</div>
          </div>
        </div>

        {/* center */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 4,
              color: "#ffc64b",
              textTransform: "uppercase",
            }}
          >
            Admissions 2026 · Greater Noida
          </div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.05, maxWidth: 940 }}>
            MBA &amp; B.Tech for the age of AI.
          </div>
        </div>

        {/* footer badges */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {["AICTE Approved", "100% Placement Assistance", "Up to 100% Scholarship"].map((b) => (
            <div
              key={b}
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 600,
                color: "white",
                padding: "12px 22px",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
