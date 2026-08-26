import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#1c1c22",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(0,255,153,0.18) 0%, transparent 45%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: "#00ff99", letterSpacing: 2 }}>
          {siteConfig.role.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            color: "#ffffff",
            marginTop: 16,
            lineHeight: 1.1,
          }}
        >
          {siteConfig.name}
          <span style={{ color: "#00ff99" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "rgba(255,255,255,0.65)",
            marginTop: 28,
            maxWidth: 900,
            lineHeight: 1.45,
          }}
        >
          {siteConfig.description}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            height: 6,
            width: 180,
            backgroundColor: "#00ff99",
            borderRadius: 3,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
