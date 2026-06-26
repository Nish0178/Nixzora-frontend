import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import HeroBannerSlider from "@/components/home/HeroBannerSlider";
import CardBannerSlider from "@/components/home/CardBannerSlider";
export default function Home() {
  return (
     <>
      <AnnouncementBar />
      <Navbar />
      <HeroBannerSlider />
      <CardBannerSlider />
    </>
  );
}