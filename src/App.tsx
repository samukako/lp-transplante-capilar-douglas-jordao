import { Navigation } from "./components/Navigation";
import { HeroTransplante } from "./components/HeroTransplante";
import { ProblemaeSolucao } from "./components/ProblemaeSolucao";
import { DiferenciaisBeneficios } from "./components/DiferenciaisBeneficios";
import { ResultadosTransplante } from "./components/ResultadosTransplante";
import { DrYusneydis } from "./components/DrYusneydis";
import { FAQTransplante } from "./components/FAQTransplante";
import { TiposCalvicie } from "./components/TiposCalvicie";
import { CTAFinal } from "./components/CTAFinal";
import { Localizacao } from "./components/Localizacao";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F3]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <Navigation />
      <HeroTransplante />
      <ProblemaeSolucao />
      <section id="diferenciais">
        <DiferenciaisBeneficios />
      </section>
      <section id="resultados">
        <ResultadosTransplante />
      </section>
      <section id="especialista">
        <DrYusneydis />
      </section>
      <FAQTransplante />
      <TiposCalvicie />
      <CTAFinal />
      <section id="contato">
        <Localizacao />
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}