"use client";

import Link from "next/link";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const banners = [
  {
    desktop: "/banners/desktop/rooted-in-nature.png",
    mobile: "/banners/mobile/rooted-in-nature.png",
    href: "/collections/nature",
    alt: "Rooted In Nature",
  },
  {
    desktop: "/banners/desktop/signature-polos.png",
    mobile: "/banners/mobile/signature-polos.png",
    href: "/collections/polos",
    alt: "Signature Polos",
  },
  {
  desktop: "/banners/desktop/new-arrivals.png",
  mobile: "/banners/mobile/new-arrivals.png",
  href: "/collections/new-arrivals",
  alt: "Season's New Arrivals",
},
  {
    desktop: "/banners/desktop/season-of-shorts.png",
    mobile: "/banners/mobile/season-of-shorts.png",
    href: "/collections/shorts",
    alt: "Season Of Shorts",
  },
  {
    desktop: "/banners/desktop/slanguage-collection.png",
    mobile: "/banners/mobile/slanguage-collection.png",
    href: "/collections/slanguage",
    alt: "Slanguage Collection",
  },
  {
    desktop: "/banners/desktop/fifa-world-cup-2026.png",
    mobile: "/banners/mobile/fifa-world-cup-2026.png",
    href: "/collections/fifa",
    alt: "FIFA World Cup 2026",
  },
  {
    desktop: "/banners/desktop/embroidered-collection.jpg",
    mobile: "/banners/mobile/embroidered-collection.jpg",
    href: "/collections/embroidered-collection",
    alt: "embroidered-collection",
  }
];

const SliderNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute inset-0 pointer-events-none z-20 hidden md:block">
      <button
        onClick={() => swiper.slidePrev()}
        aria-label="Previous slide"
        className="pointer-events-auto absolute left-6 md:left-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white/85 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        aria-label="Next slide"
        className="pointer-events-auto absolute right-6 md:right-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white/85 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>
    </div>
  );
};

export default function HeroBannerSlider() {
  return (
    <section className="w-full bg-white relative group">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="heroSwiper w-full"
      >
        <SliderNavigation />
        {banners.map((banner) => (
          <SwiperSlide key={banner.alt}>
            <Link href={banner.href}>
              <div className="w-full overflow-hidden">

                {/* Desktop Banner */}
                <Image
                  src={banner.desktop}
                  alt={banner.alt}
                  width={1920}
                  height={800}
                  priority
                  className="hidden md:block w-full h-auto object-cover"
                />

                {/* Mobile Banner */}
                <Image
                  src={banner.mobile}
                  alt={banner.alt}
                  width={1080}
                  height={1440}
                  priority
                  className="block md:hidden w-full h-auto object-cover"
                />

              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}