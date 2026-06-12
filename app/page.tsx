"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";;

const bryndan = localFont({
  src: "./fonts/BryndanWriteBook-nGPM.ttf",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"]
});

function WelcomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const guestName = searchParams.get("to") || "Siswa Siswi TK B";

  return (
    <main className="relative w-full max-w-md h-[100dvh] mx-auto overflow-hidden bg-white shadow-2xl">

      {/* 1. Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/Bg.png"
          alt="Background"
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-cover"
          priority
        />
      </div>

      {/* 1. Layer Belakang: Pohon Kiri */}
      <div className="absolute inset-0 w-full h-full animate-in-left pointer-events-none z-10">
        <div className="absolute inset-0 w-full h-full" style={{ transform: "translateX(-62%)" }}>
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
        {/* PERBAIKAN: Kembalikan angkanya ke 63% agar geser jauh ke kanan */}
        <div className="absolute inset-0 w-full h-full" style={{ transform: "translateX(63%)" }}>
          <Image
            src="/images/tree_r.png"
            alt="Tree Right"
            fill
            sizes="(max-width: 768px) 100vw, 448px"
            className="object-cover object-right origin-bottom animate-sway"
          />
        </div>
      </div>

      {/* 3. Layer Atas: Header, Monyet, dan Text1 */}
      <div className="absolute inset-0 w-full h-full animate-in-top pointer-events-none z-20">
        <Image
          src="/images/monkey.png"
          alt="Monkey"
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-cover origin-top animate-sway"
        />
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

      <div className="absolute bottom-[33%] left-0 w-full h-[75vh] flex flex-col items-center justify-end z-30 px-4 pointer-events-none">

        <div className="relative w-full h-[90%] mb-4 animate-pop flex-shrink-0">
          <Image
            src="/images/text2.png"
            alt="Text Akhirussanah"
            fill
            sizes="(max-width: 768px) 100vw, 448px"
            className="object-contain object-bottom"
          />
        </div>

        {/* Bagian Bawah: Kepada Yth, Nama Tamu, dan Tombol */}
        <div className="flex flex-col items-center justify-center space-y-3 animate-in-bottom-short flex-shrink-0">
          <div
            className={`text-center text-black font-bold text-xl sm:text-2xl drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] leading-tight ${poppins.className}`}
            style={{ WebkitTextStroke: "0.4px #ffffe0" }}
          >
            <p>Kepada Yth.</p>
            <p>Bapak/Ibu</p>
            <p>Orang Tua/Wali Murid</p>
          </div>

          <h1
            className={`font-black drop-shadow-md text-center leading-none px-2 ${bryndan.className}`}
            style={{
              fontSize: "3rem",
              color: "#ffffe0",
              WebkitTextStroke: "1.5px black",
              letterSpacing: "-0.04em",
              lineHeight: "0.9"
            }}
          >
            {guestName}
          </h1>

          <button
            onClick={() => router.push("/salam")}
            className={`mt-3 min-w-[154px] btn-hijau text-white font-bold text-[13px] py-3 px-10 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer pointer-events-auto tracking-wider leading-normal ${poppins.className}`}
          >
            Buka Undangan
          </button>
        </div>

      </div>

      {/* 5. Layer Pop: Kupu-kupu */}
      <div className="absolute inset-0 w-full h-full animate-pop z-30 pointer-events-none">
        <Image
          src="/images/butterfly.png"
          alt="Butterfly"
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-cover animate-float"
        />
      </div>

      {/* 6. Layer Depan: Anak Laki-laki & Perempuan */}
      <div className="absolute inset-0 w-full h-full animate-in-left z-40 pointer-events-none">
        <Image
          src="/images/Boy.png"
          alt="Boy"
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-cover origin-bottom animate-sway"
        />
      </div>
      <div className="absolute inset-0 w-full h-full animate-in-right z-40 pointer-events-none">
        <Image
          src="/images/girl.png"
          alt="Girl"
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-cover origin-bottom animate-sway"
        />
      </div>

      {/* 7. Layer FOOTER */}
      <div className="absolute inset-0 w-full h-full animate-in-bottom-short z-50 pointer-events-none">
        <Image
          src="/images/footer.png"
          alt="Footer"
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-cover object-bottom"
        />
      </div>

    </main>
  );
}

export default function WelcomePage() {
  return (
    <Suspense fallback={<div className="w-full h-[100dvh] flex items-center justify-center bg-[#87CEEB]">Loading...</div>}>
      <WelcomeContent />
    </Suspense>
  );
}