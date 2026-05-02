import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

function brandInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0] ?? "";
  const caps = first.match(/[A-Z]/g);
  if (caps && caps.length >= 2) return caps.slice(0, 2).join("").toUpperCase();
  if (caps?.length === 1 && parts[1]?.[0])
    return (caps[0] + parts[1][0]).toUpperCase();
  return first.slice(0, 2).toUpperCase();
}

export default function Icon() {
  const initials = brandInitials(siteConfig.name);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0f14",
          borderRadius: 6,
          border: "2px solid #c9a227",
          color: "#c9a227",
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        {initials}
      </div>
    ),
    { ...size },
  );
}
