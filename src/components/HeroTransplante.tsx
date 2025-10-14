import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroTransplante() {
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  const whatsappByUnit: Record<string, string> = {
    canoas: "https://wa.me/5551996305040",
    balneario: "https://wa.me/5547991378070",
  };

  const href = path.includes("/transplante-capilar-balneario-camboriu")
    ? whatsappByUnit.balneario
    : path.includes("/transplante-capilar-canoas")
    ? whatsappByUnit.canoas
    : whatsappByUnit.canoas; // padrão no hub

  const handleWhatsApp = () => {
    window.open(href, "_blank");
  };

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F3] py-20 md:py-0">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center min-h-screen">
          {/* Conteúdo textual - móvel primeiro, desktop à direita */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-2 lg:order-2 text-center lg:text-left"
          >
            <h1
              className="tracking-[0.12em] uppercase text-2xl md:text-3xl lg:text-4xl text-[#1E1E1E] mb-6 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              Recupere seu cabelo e sua confiança com resultado 100% natural
            </h1>
            
            <p
              className="text-lg md:text-xl text-[#1E1E1E] mb-8 leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '400' }}
            >
              Recupere sua linha capilar e sua autoestima com técnicas avançadas e resultados permanentes.
            </p>
          
            <Button
              onClick={handleWhatsApp}
              className="bg-[#A89888] hover:bg-[#8B7B6B] text-white px-8 py-4 text-base rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 border-2 border-[#A89888]/20"
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}
            >
              <span className="hidden md:inline">Agende sua avaliação exclusiva</span>
              <span className="md:hidden">Agende sua avaliação</span>
            </Button>
          </motion.div>

          {/* Imagem - móvel acima, desktop à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-1 flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A89888]/20 to-[#D6CFC5]/30 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1658196253174-154270bcffa1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Homem com cabelo volumoso - Resultado de transplante capilar"
                  className="w-full h-auto rounded-2xl object-cover object-top"
                  style={{ aspectRatio: '3/4' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}