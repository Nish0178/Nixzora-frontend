"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const cardBanners = [
  {
    desktop: "/cards/desktop/oversized-tshirts.png",
    mobile: "/cards/mobile/oversized-tshirts.png",
    alt: "Oversized T-Shirts",
  },
  {
    desktop: "/cards/desktop/classic-fit.png",
    mobile: "/cards/mobile/classic-fit.png",
    alt: "Classic Fit T-Shirts",
  },
  {
    desktop: "/cards/desktop/joggers.png",
    mobile: "/cards/mobile/joggers.png",
    alt: "Joggers",
  },
  {
    desktop: "/cards/desktop/shirts.png",
    mobile: "/cards/mobile/shirts.png",
    alt: "Shirts",
  },
  {
    desktop: "/cards/desktop/premium-essentials.png",
    mobile: "/cards/mobile/premium-essentials.png",
    alt: "Premium Essentials",
  },
  {
    desktop: "/cards/desktop/washed-jeans.png",
    mobile: "/cards/mobile/washed-jeans.png",
    alt: "Washed Jeans",
  },
];

export default function CardBannerSlider() {
  return (
    <section className="w-full bg-white py-4">
      <div className="max-w-[1440px] mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {cardBanners.map((banner) => (
            <SwiperSlide key={banner.alt}>
              <div className="overflow-hidden rounded-xl">
                {/* Desktop Image */}
                <Image
                  src={banner.desktop}
                  alt={banner.alt}
                  width={1600}
                  height={1600}
                  className="hidden md:block w-full h-auto object-cover"
                  priority
                />

                {/* Mobile Image */}
                <Image
                  src={banner.mobile}
                  alt={banner.alt}
                  width={1080}
                  height={1350}
                  className="block md:hidden w-full h-auto object-cover"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}