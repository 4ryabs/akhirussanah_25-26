"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import FloatingNav from "@/components/floating_nav";

const bryndan = localFont({
  src: "../fonts/BryndanWriteBook-nGPM.ttf",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"]
});

export default function SalamPage() {
  return (
    <main className="relative w-full max-w-md h-[100dvh] mx-auto overflow-hidden bg-white shadow-2xl">

      {/* 1. Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image src="/images/Bg.png" alt="Background" fill sizes="(max-width: 768px) 100vw, 448px" className="object-cover" priority />
      </div>

      <div className="absolute inset-0 w-full h-full animate-in-top pointer-events-none z-20">
        <Image
          src="/images/header.png"
          alt="Header"
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 w-full h-full animate-in-top pointer-events-none z-20">
        <Image
          src="/images/logo.png"
          alt="Logo Al Irsyad"
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 w-full h-full animate-in-left pointer-events-none z-10">
        {/* Wrapper ekstra untuk menggeser posisi 30% ke kiri */}
        <div className="absolute inset-0 w-full h-full" style={{ transform: "translateX(-60%) translateY(-25%)" }}>
          <Image
            src="/images/tree_l.png"
            alt="Tree Left"
            fill
            sizes="(max-width: 768px) 100vw, 448px"
            className="object-cover object-left origin-bottom animate-sway"
          />
        </div>
      </div>

      {/* 2. Layer Belakang: Pohon Kanan (Digeser ke luar frame) */}
      <div className="absolute inset-0 w-full h-full animate-in-right pointer-events-none z-10">
        {/* Wrapper ekstra untuk menggeser posisi 30% ke kanan */}
        <div className="absolute inset-0 w-full h-full" style={{ transform: "translateX(68%) translateY(-21%)" }}>
          <Image
            src="/images/treeR.png"
            alt="Tree Right"
            fill
            sizes="(max-width: 768px) 100vw, 448px"
            className="object-cover object-right origin-bottom animate-sway"
          />
        </div>
      </div>

      <div className="absolute w-full h-full animate-pop pointer-events-none z-20">
        <Image
          src="/images/text_salam.png"
          alt="Text Salam"
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-contain object-center"
        />
      </div>

      {/* 5. Floating Navigation Bar - z-40 (Tinggalkan saja, kemungkinan z-index-nya lebih tinggi dalam komponennya) */}
      <FloatingNav />
      <div className="absolute inset-0 w-full h-full animate-in-bottom-short z-[999] pointer-events-none">
        <Image
          src="/images/gedung.png"
          alt="Gedung KB & TK Al Irsyad"
          fill
          priority // Memaksa untuk me-render strip rumput ini
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-contain object-bottom"
        />
      </div>

    </main>
  );
}