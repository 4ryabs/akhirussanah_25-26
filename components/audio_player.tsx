"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
    const pathname = usePathname();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    // Tambahan "Ingatan" biar lagu nggak reset tiap pindah halaman
    const hasStarted = useRef(false);
    const userPaused = useRef(false);

    // Daftar halaman yang BERHAK muncul musik & tombolnya
    const allowedPages = ["/salam", "/acara", "/lokasi", "/syukron"];
    const isAllowed = allowedPages.includes(pathname);

    useEffect(() => {
        // Kalau masuk halaman yg diizinkan, dan lagu belum pernah jalan, serta user belum pernah manual pause
        if (isAllowed && audioRef.current) {
            if (!hasStarted.current && !userPaused.current) {
                const playAudio = async () => {
                    try {
                        await audioRef.current?.play();
                        setIsPlaying(true);
                        hasStarted.current = true; // Tandai kalau lagu udah jalan
                    } catch (error) {
                        console.log("Autoplay ditahan browser, menunggu interaksi user.");
                        setIsPlaying(false);
                    }
                };
                playAudio();
            }
        } else if (!isAllowed && audioRef.current) {
            // Kalau kesasar balik ke Welcome Page, matikan musik dan reset ingatan
            audioRef.current.pause();
            setIsPlaying(false);
            hasStarted.current = false;
        }
    }, [pathname, isAllowed]);

    // Jika sedang di Welcome Page, komponen ini tidak me-render apa-apa (Suara & Tombol Ghaib)
    if (!isAllowed) return null;

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                userPaused.current = true; // Ingat kalau user sengaja matiin
            } else {
                audioRef.current.play();
                userPaused.current = false; // Ingat kalau user sengaja nyalain
                hasStarted.current = true;
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
                    // PERBAIKAN: Posisi diubah dari bottom-24 ke top-6
                    className="pointer-events-auto absolute bottom-[11%] right-[2%] w-12 h-12 flex items-center justify-center btn-hijau border-[1.5px] rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 text-white"
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