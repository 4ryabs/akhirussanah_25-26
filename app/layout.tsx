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
    <html lang="id">
      {/* 1. Body dikasih warna abu-abu dan flex tengah khusus buat layar laptop */}
      <body className="antialiased bg-gray-200 flex justify-center items-center min-h-screen">
        
        {/* 2. WADAH FRAME HP VIRTUAL */}
        {/* Di HP biasa: full screen. Di Desktop (sm): tinggi 95%, melengkung, ada border hitam kayak case HP */}
        <div 
            className="relative w-[50dvh] max-w-md h-[100dvh] sm:h-[100dvh] sm:rounded-[12px] sm:border-[8px] sm:border-gray-800 shadow-2xl overflow-hidden bg-white"
            // Trik CSS Tingkat Dewa: Biar elemen 'fixed' (navigasi & tombol musik) nggak lari keluar dari bingkai HP ini!
            style={{ transform: "translateZ(0)" }}
        >
            {children}
            <AudioPlayer />
        </div>

      </body>
    </html>
  );
}