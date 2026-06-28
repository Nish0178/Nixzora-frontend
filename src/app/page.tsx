import HeroBannerSlider from "@/components/home/HeroBannerSlider";
import LaunchOfferBanner from "@/components/home/LaunchOfferBanner";
import CardBannerSlider from "@/components/home/CardBannerSlider";
import FirstOrderBanner from "@/components/home/FirstOrderBanner";

export default function Home() {
  return (
    <>
      {/* Temporarily hidden while we build the loader */}
      
      <HeroBannerSlider />

      <LaunchOfferBanner />

      <CardBannerSlider />

      <FirstOrderBanner />
    </>
  );
}