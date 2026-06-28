"use client";

import Link from "next/link";
import Image from "next/image";

type OfferBannerProps = Readonly<{
  desktopImage: string;
  mobileImage: string;
  href: string;
  alt: string;
}>;

export default function OfferBanner({
  desktopImage,
  mobileImage,
  href,
  alt,
}: OfferBannerProps) {
  return (
    <section className="w-full bg-white py-3">
      <div className="max-w-[1440px] mx-auto px-4">
        <Link href={href}>
          <div className="overflow-hidden rounded-xl cursor-pointer">

            {/* Desktop Banner */}
            <Image
              src={desktopImage}
              alt={alt}
              width={1440}
              height={120}
              priority
              className="hidden md:block w-full h-auto object-cover"
            />

            {/* Mobile Banner */}
            <Image
              src={mobileImage}
              alt={alt}
              width={1080}
              height={180}
              priority
              className="block md:hidden w-full h-auto object-cover"
            />

          </div>
        </Link>
      </div>
    </section>
  );
}