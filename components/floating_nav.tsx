"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, CalendarHeart, MapPin, HeartHandshake } from "lucide-react";

export default function FloatingNav() {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Salam", href: "/salam", icon: Home },
    { name: "Acara", href: "/acara", icon: CalendarHeart },
    { name: "Lokasi", href: "/lokasi", icon: MapPin },
    { name: "Syukron", href: "/syukron", icon: HeartHandshake },
  ];

  return (
    // 1. WRAPPER ABSOLUTE DENGAN FLEX CENTER (Ini jaminan pasti ke tengah)
    <div className="absolute bottom-6 left-0 w-full flex justify-center z-[1000] pointer-events-none">
      
      {/* 2. NAVIGASI UTAMA */}
      <nav className="pointer-events-auto w-[90%] max-w-[380px] bg-[#111111] rounded-3xl   shadow-2xl px-2 py-2 flex justify-between items-center border-[1.5px] border-[#ffffe0]/20">
        
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link 
              key={item.name} 
              href={item.href}
              // Hapus class text color di sini, kita pindah ke atribut style di bawah
              className={`relative flex flex-col items-center justify-center w-[72px] h-[64px] rounded-3xl transition-all duration-500 ease-out ${
                isActive 
                  ? "bg-[#ffffe0] shadow-[0_0_15px_rgba(255,255,224,0.4)] scale-105" 
                  : "hover:bg-white/10 opacity-80 hover:opacity-100" 
              }`}
              // KUNCI JAWABANNYA DI SINI: Tembak warna langsung!
              style={{ color: isActive ? "#000000" : "#ffffe0" }}
            >
              <Icon 
                size={22} 
                strokeWidth={isActive ? 2.5 : 2} 
                className={`mb-1 transition-transform duration-300 ${isActive ? "scale-110" : ""}`}
              />
              <span className="text-[10px] font-bold tracking-wide">
                {item.name}
              </span>
            </Link>
          );
        })}
        
      </nav>

    </div>
  );
}