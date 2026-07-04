import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <MenuSection />
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
