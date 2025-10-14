import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import drYusneydisPhoto from "figma:asset/c92bb6569ed8843679645045cec430ae765b7a46.png";

export function DrYusneydis() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#F5F5F3]">
      <div className="container mx-auto max-w-6xl">
        
        {/* Título da seção - sempre no topo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left mb-8 lg:mb-12"
        >
          <h2
            className="tracking-[0.12em] uppercase text-2xl md:text-3xl lg:text-4xl text-[#1E1E1E]"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
          >
            Especialista em<br />
            <span className="text-[#A89888]">Transplante Capilar</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          
          {/* Foto da Dra. Yusneydis */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-1"
          >
            <div className="relative">
              {/* Fundo decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A89888]/20 to-[#D6CFC5]/30 rounded-3xl transform -rotate-3"></div>
              
              {/* Container da imagem */}
              <div className="relative bg-white p-6 rounded-3xl shadow-2xl">
                <ImageWithFallback
                  src={drYusneydisPhoto}
                  alt="Dra. Yusneydis Ricardo - Especialista em Transplante Capilar"
                  className="w-full rounded-2xl object-cover"
                  style={{ aspectRatio: '3/4' }}
                />
                
                {/* Badge de identificação */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <h3
                    className="text-lg font-semibold text-[#1E1E1E]"
                    style={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                  >
                    Dra. Yusneydis Ricardo
                  </h3>
                  <p
                    className="text-[#A89888] font-medium"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    CRM/RS 56048
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conteúdo textual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-2 space-y-8"
          >
            
            {/* Descrição principal */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <p
                className="text-lg text-[#1E1E1E] leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                O transplante é realizado pela <strong>Dra. Yusneydis Ricardo CRM/RS 56048</strong>, especialista em transplante capilar e referência em resultados sofisticados e naturais.
              </p>
            </div>

            {/* Citação em destaque */}
            <div className="bg-[#1E1E1E] text-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-[#A89888]">
              <blockquote
                className="text-xl md:text-2xl italic leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '500' }}
              >
                "Cada fio é reposicionado com precisão, respeitando a identidade única de cada paciente."
              </blockquote>
              
              <footer className="mt-4">
                <cite
                  className="text-[#A89888] not-italic"
                  style={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                >
                  — Dra. Yusneydis Ricardo
                </cite>
              </footer>
            </div>

            {/* Especialidades */}
            <div className="grid grid-cols-1 gap-4">
              {[
                "Transplante Capilar FUE",
                "Restauração de Linha Capilar",
                "Técnicas Minimamente Invasivas",
                "Resultados Naturais Premium"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-[#A89888] text-white px-4 py-3 rounded-xl"
                >
                  <span
                    className="font-medium"
                    style={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                  >
                    ✓ {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}