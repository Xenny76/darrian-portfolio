import { ImageResponse } from "next/og";

export const alt = "Darrian Redford, Software Engineer (C#/.NET, backend and full-stack)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#050808",
          color: "#f1fbfa",
          borderLeft: "16px solid #00f6ff",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#00f6ff", fontFamily: "monospace" }}>
          {"$ whoami"}
        </div>
        <div style={{ display: "flex", fontSize: 108, fontWeight: 800, marginTop: 24 }}>
          Darrian Redford
        </div>
        <div style={{ display: "flex", fontSize: 46, color: "#00f6ff", marginTop: 12 }}>
          Software Engineer
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#6e8b89", marginTop: 40 }}>
          Backend and full-stack development in C# / .NET
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#6e8b89", marginTop: 56, fontFamily: "monospace" }}>
          darrian-redford.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
