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

export default function LokasiPage() {
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

            {/* ======== BLOK BARU: GRUP TEXT LOKASI + MAPS + TOMBOL ======== */}
            {/* Posisi bottom aku adjust dikit ke 22% biar muat dari judul sampai tombol nggak nabrak footer */}
            <div className="absolute top-[1%] bottom-[32%] left-0 w-full flex flex-col items-center justify-start z-[60] pointer-events-none px-4">

                {/* 1. Judul Text Lokasi (Dikasih jatah 15% dari tinggi area) */}
                <div className="relative w-full h-[15%] min-h-[50px] mb-2 animate-pop flex-shrink-0">
                    <Image
                        src="/images/text6.png"
                        alt="Text Lokasi"
                        fill
                        sizes="(max-width: 768px) 100vw, 448px"
                        className="object-contain object-bottom"
                    />
                </div>

                {/* Wrapper untuk Maps & Tombol (Dikasih jatah sisa ruang 85%) */}
                <div className="flex flex-col items-center justify-start w-full h-[85%] gap-3 animate-in-bottom-short pointer-events-auto">

                    {/* 2. Frame Maps (Dapat jatah 55% dari sisa ruang, tanpa min-height kaku) */}
                    <div className="w-[90%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-[3px] border-[#ffffe0] relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.545524332144!2d109.24400507438835!3d-7.404708992605367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655efac8d8790f%3A0xdd6f8d9a99065481!2sGedung%20Roedhiro%20Unsoed!5e0!3m2!1sen!2sid!4v1781245435172!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* 3. Papan Nama Gedung (Pakai padding responsif py-2) */}
                    <div className={`w-[90%] bg-[#111111] border-[1.5px] border-[#ffffe0]/20 rounded-2xl text-center shadow-lg py-3 px-2 ${bryndan.className}`}>
                        <p className="text-[#ffffe0] text-[22px] leading-none tracking-wider">Gedung Roedhiro</p>
                        <p className="text-[#ffffe0] text-[16px] tracking-wide mt-1">Universitas Jenderal Soedirman</p>
                        <p className="text-[#ffffe0] text-[16px] tracking-wide">Purwokerto</p>
                    </div>

                    {/* 4. Tombol Buka Maps */}
                    <a
                        href="https://maps.app.goo.gl/RsHLBRuyDe3qdHyw9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-1 min-w-[160px] btn-hijau text-white font-bold text-[13px] py-3 px-6 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${poppins.className}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        Buka Maps
                    </a>
                </div>
            </div>
            {/* ================================================= */}

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

            <FloatingNav />

        </main>
    );
}