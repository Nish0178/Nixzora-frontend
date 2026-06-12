import Container from "@/components/common/Container";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />

      <Container>
        <h1 className="mt-8 text-4xl font-bold">
          NIXZORA
        </h1>
      </Container>
    </main>
  );
}