import image_652403232830b39a4713498a54881aa86b8edd5f from 'figma:asset/652403232830b39a4713498a54881aa86b8edd5f.png';
import image_76ceb164a1b012d6763388bcf34e82d047e5c6de from 'figma:asset/76ceb164a1b012d6763388bcf34e82d047e5c6de.png';
import { motion } from "motion/react";
import { ResultadosReais } from "./ResultadosReais";

export function ResultadosTransplante() {
  // Imagens de antes e depois (fotos reais)
  const resultImages = [
    {
      before: image_76ceb164a1b012d6763388bcf34e82d047e5c6de,
      after: image_652403232830b39a4713498a54881aa86b8edd5f,
      alt: "Resultado 1 - Transplante capilar",
    },
    {
      before: image_76ceb164a1b012d6763388bcf34e82d047e5c6de,
      after: image_652403232830b39a4713498a54881aa86b8edd5f,
      alt: "Resultado 2 - Transplante capilar",
    },
    {
      before: image_76ceb164a1b012d6763388bcf34e82d047e5c6de,
      after: image_652403232830b39a4713498a54881aa86b8edd5f,
      alt: "Resultado 3 - Transplante capilar",
    },
    {
      before: image_76ceb164a1b012d6763388bcf34e82d047e5c6de,
      after: image_652403232830b39a4713498a54881aa86b8edd5f,
      alt: "Resultado 4 - Transplante capilar",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white section-resultados" style={{ display: 'none', visibility: 'hidden', pointerEvents: 'none' }}>
      <div className="container mx-auto max-w-6xl">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="tracking-[0.12em] uppercase text-2xl md:text-3xl lg:text-4xl text-[#1E1E1E] mb-8"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
          >
            Resultados Reais
          </h2>
        </motion.div>

        {/* Carrossel reaproveitado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ResultadosReais
            itens={resultImages.map((r) => ({
              alt: r.alt,
              before: r.before,
              after: r.after,
            }))}
          />
        </motion.div>

        {/* Frase de apoio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p
            className="text-xl md:text-2xl text-[#A89888] italic"
            style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "500" }}
          >
            Resultados reais que transformam a imagem e a confiança.
          </p>
        </motion.div>
      </div>
    </section>
  );
}