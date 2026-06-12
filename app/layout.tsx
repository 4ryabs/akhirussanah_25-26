import type { Metadata } from "next";
import "./globals.css";
import AudioPlayer from "@/components/audio_player";

export const metadata: Metadata = {
  metadataBase: new URL("https://akhirussanah-tk-alirsyad.netlify.app"), // Ganti kalau nama link-mu beda
  title: "Undangan Akhirussanah TK Al Irsyad",
  description: "Merangkai Kenangan, Tumbuh Bersama Bumi. Ahad, 14 Juni 2026 di Gedung Roedhiro Unsoed.",
  openGraph: {
    title: "Undangan Akhirussanah TK Al Irsyad",
    description: "Merangkai Kenangan, Tumbuh Bersama Bumi. Ahad, 14 Juni 2026 di Gedung Roedhiro Unsoed.",
    url: "https://akhirussanah-tk-alirsyad.netlify.app",
    siteName: "Akhirussanah TK Al Irsyad",
    images: [
      {
        url: "/images/embed.png", 
        width: 1200,
        height: 630,
        alt: "Cover Undangan Akhirussanah",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 1. Body dikasih warna abu-abu dan flex tengah khusus buat layar laptop */}
      <body className="antialiased bg-gray-200 flex justify-center items-center min-h-screen">
        <div
          className="relative w-full h-[100dvh] md:w-[40dvh] md:min-w-[50dvh] md:max-w-[40dvh] md:h-[100dvh] md:rounded-[12px] md:border-[10px] md:border-gray-800 shadow-2xl overflow-hidden bg-white"
          style={{ transform: "translateZ(0)" }}
        >
          {children}

          <AudioPlayer />
        </div>

      </body>
    </html>
  );
}