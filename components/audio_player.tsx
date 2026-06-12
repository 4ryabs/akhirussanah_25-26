"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
    const pathname = usePathname();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Daftar halaman yang BERHAK muncul musik & tombolnya
    const allowedPages = ["/salam", "/acara", "/lokasi", "/syukron"];
    const isAllowed = allowedPages.includes(pathname);

    useEffect(() => {
        // Kalau halaman diizinkan, coba mainkan audio otomatis
        if (isAllowed && audioRef.current) {
            const playAudio = async () => {
                try {
                    await audioRef.current?.play();
                    setIsPlaying(true);
                } catch (error) {
                    console.log("Autoplay ditahan browser, menunggu interaksi user.");
                    setIsPlaying(false);
                }
            };
            playAudio();
        } else if (!isAllowed && audioRef.current) {
            // Kalau kesasar balik ke Welcome Page, matikan musiknya
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }, [pathname, isAllowed]);

    // Jika sedang di Welcome Page, komponen ini tidak me-render apa-apa (Suara & Tombol Ghaib)
    if (!isAllowed) return null;

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <audio ref={audioRef} src="/audio/backsound.mp3" loop />

            <div className="fixed inset-0 pointer-events-none z-[9999] w-full max-w-md mx-auto h-[100dvh]">
                <button
                    onClick={togglePlay}
                    // PERBAIKAN: Pakai class btn-hijau dari globals.css
                    className="pointer-events-auto absolute bottom-24 right-6 w-12 h-12 flex items-center justify-center btn-hijau border-[1.5px] rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 text-white"
                    aria-label="Toggle Background Music"
                >
                    {isPlaying ? (
                        <Volume2 size={20} strokeWidth={2.5} className="animate-pulse" />
                    ) : (
                        <VolumeX size={20} strokeWidth={2.5} className="opacity-80" />
                    )}
                </button>
            </div>
        </>
    );
}