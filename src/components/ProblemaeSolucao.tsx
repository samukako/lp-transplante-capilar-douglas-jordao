import { motion } from "motion/react";

export function ProblemaeSolucao() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Layout com vídeo e conteúdo */}
        <div className="section-grid mb-12">
          {/* Vídeo vertical */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="video-vertical"
          >
            <iframe
              src="https://www.youtube.com/embed/ihPTUl_k3k4?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=ihPTUl_k3k4&playsinline=1&iv_load_policy=3&showinfo=0"
              title="Transplante capilar - Dr. Douglas Jordão"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Conteúdo textual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-12 text-center section-content"
          >
          {/* Primeiro parágrafo - Problema */}
          <div className="bg-[#EAE6E1] p-8 md:p-12 rounded-3xl">
            <p
              className="text-lg md:text-xl text-[#1E1E1E] leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Com o passar do tempo, os fios que antes traduziam <span className="text-[#A89888] font-semibold">vitalidade e presença</span> começam a rarear. O espelho já não reflete apenas a sua imagem, mas também as marcas da perda capilar — sinais que podem pesar na autoestima e mudar a forma como você se enxerga e é visto. Não é apenas sobre cabelo, é sobre <span className="text-[#A89888] font-semibold">confiança, juventude e identidade</span>.
            </p>
          </div>

          {/* Segundo parágrafo - Solução */}
          <div className="bg-[#1E1E1E] text-white p-8 md:p-12 rounded-3xl">
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Esses sinais não precisam definir sua imagem. Com uma técnica exclusiva, o Grupo Douglas Jordão carrega experiência e retoma a <span className="text-[#A89888] font-semibold">confiança</span> que você procura em sua vida. De forma moderna, segura e eficaz, garantimos fios definitivos e resultados extremamente <span className="text-[#A89888] font-semibold">naturais</span>.
            </p>
          </div>

            {/* Citação motivacional */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-8"
            >
              <blockquote
                className="text-lg md:text-xl text-[#A89888] italic leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '500' }}
              >
                "Recuperar os fios é recuperar a essência de quem você é."
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}