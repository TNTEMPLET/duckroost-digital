import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(145deg, #0c0f14 0%, #141a24 45%, #1a1510 100%)",
        }}
      >
        <div
          style={{
            width: 72,
            height: 6,
            borderRadius: 4,
            background: "#c9a227",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: -2,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#8b9cb3",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
