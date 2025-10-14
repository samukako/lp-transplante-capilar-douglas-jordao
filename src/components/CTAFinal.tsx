import { motion } from "motion/react";
import { Button } from "./ui/button";

export function CTAFinal() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5551996305040", "_blank");
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-[#1E1E1E] via-[#2A2A2A] to-[#1E1E1E] relative overflow-hidden">
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#A89888] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#D6CFC5] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#A89888] rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          
          {/* Título principal */}
          <h2
            className="tracking-[0.12em] uppercase text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
          >
            Sua imagem é seu<br />
            <span className="text-[#A89888]">maior patrimônio</span>
          </h2>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '400' }}
          >
            Recupere seus fios e sua confiança com um procedimento seguro e natural.
          </motion.p>

          {/* Elementos visuais de destaque */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 py-8"
          >
            {[
              "Resultados Naturais",
              "Técnica Avançada", 
              "Procedimento Seguro",
              "Recuperação Rápida"
            ].map((item, index) => (
              <div key={index} className="bg-[#A89888]/20 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-[#A89888]/30">
                <span
                  className="text-sm font-medium"
                  style={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                >
                  ✓ {item}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <Button
              onClick={handleWhatsApp}
              className="bg-[#A89888] hover:bg-[#8B7B6B] text-white px-10 py-6 text-lg rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 border-2 border-[#A89888]/30"
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}
            >
              <span className="hidden md:inline">Agende agora sua avaliação personalizada</span>
              <span className="md:hidden">Agende sua avaliação</span>
            </Button>

            {/* Informações adicionais */}
            <div className="text-white/70 space-y-2">
              <p style={{ fontFamily: 'DM Sans, sans-serif' }}>
                ✓ Avaliação gratuita e sem compromisso
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif' }}>
                ✓ Atendimento personalizado com a Dra. Yusneydis Ricardo
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif' }}>
                ✓ Resultados com garantia de naturalidade
              </p>
            </div>
          </motion.div>

          {/* Urgência sutil */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8 border-t border-white/20"
          >
            <p
              className="text-[#A89888] italic"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              "Cada dia é uma oportunidade para recuperar sua confiança."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}