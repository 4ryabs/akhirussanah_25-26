"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import FloatingNav from "@/components/floating_nav";
import { useState, useEffect } from "react";

const bryndan = localFont({
    src: "../fonts/BryndanWriteBook-nGPM.ttf",
    display: "swap"
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"]
});

export default function AcaraPage() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

    useEffect(() => {
        // Ganti tanggal ini sesuai dengan hari-H Acara
        const targetDate = new Date("June 14, 2026 07:30:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // 3. LOGIKA TOMBOL GOOGLE CALENDAR
    const handleSaveCalendar = () => {
        const title = encodeURIComponent("Akhirussanah TK Al Irsyad");
        const details = encodeURIComponent("Acara Akhirussanah. Pengingat ini diatur 30 menit sebelum acara dimulai.");
        const location = encodeURIComponent("Haflah AKhirussanah TK B Al Irsyad Al Islamiyyah Purwokerto");

        const startDate = "20260614T073000Z";
        const endDate = "20260614T080000Z";

        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}`;

        window.open(googleCalendarUrl, "_blank");
    };

    return (
        <main className="relative w-full max-w-md h-[100dvh] mx-auto overflow-hidden bg-white shadow-2xl">

            {/* 1. Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image src="/images/Bg.png" alt="Background" fill sizes="(max-width: 768px) 100vw, 448px" className="object-cover" priority />
            </div>

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

            <div className="absolute top-[20%] bottom-[50%] left-0 w-full flex flex-col items-center justify-center z-30 pointer-events-none px-4">

                {/* 1. Teks Acara */}
                <div className="relative w-full max-w-[340px] h-[35dvh] min-h-[220px] flex-shrink-0 animate-pop">
                    <Image
                        src="/images/text_acara.png"
                        alt="Text Acara"
                        fill
                        sizes="(max-width: 768px) 100vw, 448px"
                        // object-bottom agar teks sedekat mungkin dengan timer di bawahnya
                        className="object-contain object-bottom"
                    />
                </div>

                {/* 2. Wrapper Timer & Tombol */}
                <div className="flex flex-col items-center justify-center mt-3 gap-4 animate-in-bottom-short pointer-events-auto">

                    {/* Desain Timer */}
                    <div className={`flex gap-3 text-black ${poppins.className}`}>
                        <div
                            className="flex flex-col items-center justify-center w-[72px] h-[72px] bg-[#ffffe0] rounded-2xl shadow-lg"
                            style={{ border: "3px solid black" }}
                        >
                            <span className="text-[28px] font-black leading-none">{timeLeft.days.toString().padStart(2, '0')}</span>
                            <span className="text-[12px] font-medium leading-tight">Hari</span>
                        </div>
                        <div
                            className="flex flex-col items-center justify-center w-[72px] h-[72px] bg-[#ffffe0] rounded-2xl shadow-lg"
                            style={{ border: "3px solid black" }}
                        >
                            <span className="text-[28px] font-black leading-none">{timeLeft.hours.toString().padStart(2, '0')}</span>
                            <span className="text-[12px] font-medium leading-tight">Jam</span>
                        </div>
                        <div
                            className="flex flex-col items-center justify-center w-[72px] h-[72px] bg-[#ffffe0] rounded-2xl shadow-lg"
                            style={{ border: "3px solid black" }}
                        >
                            <span className="text-[28px] font-black leading-none">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                            <span className="text-[12px] font-medium leading-tight">Menit</span>
                        </div>
                    </div>

                    {/* Tombol Kalender */}
                    <button
                        onClick={handleSaveCalendar}
                        className={`min-w-[200px] btn-hijau text-white font-bold text-[12px] py-3 px-6 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${poppins.className}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                            <line x1="16" x2="16" y1="2" y2="6" />
                            <line x1="8" x2="8" y1="2" y2="6" />
                            <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                        Simpan ke Kalender
                    </button>
                </div>

            </div>

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
                        src="/images/treeR.png"
                        alt="Tree Right"
                        fill
                        sizes="(max-width: 768px) 100vw, 448px"
                        className="object-cover object-right origin-bottom animate-sway"
                    />
                </div>
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