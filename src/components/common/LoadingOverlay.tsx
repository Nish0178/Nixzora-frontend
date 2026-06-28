"use client";

import Image from "next/image";

type LoadingOverlayProps = Readonly<{
  isVisible: boolean;
}>;

export default function LoadingOverlay({
  isVisible,
}: LoadingOverlayProps) {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Blur */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isVisible
            ? "bg-white/35 backdrop-blur-md"
            : "bg-white/0 backdrop-blur-0"
        }`}
      />

      {/* Floating Card */}
      <div
        className={`relative flex h-[180px] w-[240px] flex-col items-center justify-center rounded-3xl border border-[#D4AF37]/20 bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-500 ease-out ${
          isVisible
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-90 translate-y-8 opacity-0"
        }`}
      >
        {/* Logo */}
        <Image
          src="/logo-primary.png"
          alt="NIXZORA"
          width={170}
          height={170}
          priority
          draggable={false}
          className="object-contain animate-luxury-logo"
        />
      </div>
    </div>
  );
}