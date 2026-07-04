"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    desktop: "/cards/desktop/oversized-tshirts.png",
    mobile: "/cards/mobile/oversized-tshirts.png",
    href: "/shop/tshirts",
  },
  {
    desktop: "/cards/desktop/embroidered-collection.jpg",
    mobile: "/cards/mobile/embroidered-collection.jpg",
    href: "/shop/embroidered-collection",
  },
  {
    desktop: "/cards/desktop/classic-fit.png",
    mobile: "/cards/mobile/classic-fit.png",
    href: "/shop/tshirts",
  },
  {
    desktop: "/cards/desktop/joggers.png",
    mobile: "/cards/mobile/joggers.png",
    href: "/shop/joggers",
  },
  {
    desktop: "/cards/desktop/shirts.png",
    mobile: "/cards/mobile/shirts.png",
    href: "/shop/shirts",
  },
  {
    desktop: "/cards/desktop/premium-essentials.png",
    mobile: "/cards/mobile/premium-essentials.png",
    href: "/shop/accessories",
  },
  {
    desktop: "/cards/desktop/washed-jeans.png",
    mobile: "/cards/mobile/washed-jeans.png",
    href: "/shop/jeans",
  },
];

export default function CardBannerSlider() {
  return (
    <section className="w-full overflow-hidden bg-white py-6">
      <div className="max-w-[1440px] mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
         breakpoints={{
  0: {
    slidesPerView: 1.15,
    spaceBetween: 12,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 16,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
}}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <Link href={card.href}>
                <div className="overflow-hidden rounded-2xl cursor-pointer">
                  {/* Desktop Image */}
                  <Image
                    src={card.desktop}
                    alt={`NIXZORA Card ${index + 1}`}
                    width={1600}
                    height={1600}
                    priority={index < 3}
                    className="hidden md:block w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* Mobile Image */}
                  <Image
                    src={card.mobile}
                    alt={`NIXZORA Card ${index + 1}`}
                    width={1080}
                    height={1350}
                    priority={index < 2}
                    className="block md:hidden w-full h-auto object-cover"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}