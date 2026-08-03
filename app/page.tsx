import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Procedimentos from "@/components/sections/Procedimentos";
import Espaco from "@/components/sections/Espaco";
import Autoridade from "@/components/sections/Autoridade";
import Avaliacoes from "@/components/sections/Avaliacoes";
import FAQ from "@/components/sections/FAQ";
import Contato from "@/components/sections/Contato";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Procedimentos />
      <Espaco />
      <Autoridade />
      <Avaliacoes />
      <FAQ />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}