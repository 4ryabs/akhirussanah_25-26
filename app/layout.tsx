import type { Metadata } from "next";
import "./globals.css";
import AudioPlayer from "@/components/audio_player";

export const metadata: Metadata = {
  title: "Akhirussanah TK Al Irsyad",
  description: "Undangan Akhirussanah TK B Al Irsyad Al Islamiyyah Purwokerto",
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