import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import Artists from "@/components/artists";
import Testimonials from "@/components/testimonials";
import Booking from "@/components/booking";
import FloatingDock from "@/components/floating-dock";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-[#f5f5f5] selection:bg-[#00F078] selection:text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Artists />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <FloatingDock />
    </div>
  );
}
