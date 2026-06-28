"use client";

import OfferBanner from "./OfferBanner";

export default function LaunchOfferBanner() {
  return (
    <OfferBanner
      desktopImage="/offers/desktop/launch-offer.png"
      mobileImage="/offers/mobile/launch-offer.png"
      href="/collections/all"
      alt="Launch Offer"
    />
  );
}