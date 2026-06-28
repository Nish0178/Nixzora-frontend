"use client";

import OfferBanner from "./OfferBanner";

export default function FirstOrderBanner() {
  return (
    <OfferBanner
      desktopImage="/offers/desktop/first-order-special.png"
      mobileImage="/offers/mobile/first-order-special.png"
      href="/collections/all"
      alt="First Order Special"
    />
  );
}