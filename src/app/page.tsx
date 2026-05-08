import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
      <BookingModal />
    </main>
  );
}
