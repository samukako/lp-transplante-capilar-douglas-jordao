import { motion } from "motion/react";

export function TiposCalvicie() {
  const calvicieImage =
    "https://pub-e3b763a078db46f6a1b2f02e1d69ed43.r2.dev/tipos-de-calvicie.png";

  const tipos = [
    {
      title: "Graus 1, 2 e 3 – Estágio inicial",
      subtitle: "Pacote Básico",
      description:
        "Leve recuo nas têmporas, entradas discretas e pequena perda de volume frontal.",
      highlights: [
        {
          label: "Objetivo:",
          text: "fortalecer a linha capilar e evitar a progressão da queda.",
        },
        { label: "Regiões tratadas:", text: "linha frontal e entradas." },
        {
          label: "Indicado para:",
          text: "quem nota os primeiros sinais de rarefação.",
        },
      ],
    },
    {
      title: "Graus 4 e 5 – Estágio moderado",
      subtitle: "Pacote Intermediário",
      description:
        "Entradas mais profundas e rarefação visível no topo e coroa.",
      highlights: [
        {
          label: "Objetivo:",
          text: "reconstruir a moldura facial e recuperar o volume com equilíbrio.",
        },
        {
          label: "Regiões tratadas:",
          text: "linha frontal, topo e início da coroa.",
        },
        {
          label: "Indicado para:",
          text: "quem apresenta rarefação moderada.",
        },
      ],
    },
    {
      title: "Graus 6 e 7 – Estágio avançado",
      subtitle: "Pacote Avançado",
      description:
        "Calvície extensa no topo e coroa, com baixa densidade nas laterais.",
      highlights: [
        {
          label: "Objetivo:",
          text: "reconstruir toda a área superior e devolver contorno e rejuvenescimento.",
        },
        {
          label: "Regiões tratadas:",
          text: "linha frontal, topo e coroa completa.",
        },
        {
          label: "Indicado para:",
          text: "quem busca reconstrução total com naturalidade.",
        },
      ],
    },
  ];

  return (
    <section id="tipos-calvicie" className="scroll-mt-[120px] py-16 md:py-24 px-4 md:px-6 bg-[#F5F5F3]">
      <div className="container mx-auto max-w-6xl">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="tracking-[0.12em] uppercase text-2xl md:text-3xl lg:text-4xl text-[#1E1E1E] mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
          >
            Tipos de Calvície
          </h2>
          <p
            className="text-lg text-[#1E1E1E]/80 max-w-2xl mx-auto"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Entenda o estágio da sua queda e o plano ideal para você.
          </p>
        </motion.div>

        {/* Imagem ilustrativa dos graus de calvície */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 md:mb-16 relative left-1/2 -translate-x-1/2 w-[calc(100%+2rem)] md:w-auto flex justify-center"
          style={{
            marginTop: "64px",
            marginBottom: "48px",
          }}
        >
          <img
            src={calvicieImage}
            alt="Ilustração dos 7 graus de calvície masculina, mostrando a progressão da perda capilar do estágio inicial ao avançado."
            className="tipos-calvicie-image w-full h-auto rounded-xl md:rounded-2xl"
            style={{
              boxShadow: "0 4px 16px rgba(229, 226, 223, 0.3)",
              border: "1px solid rgba(229, 226, 223, 0.3)",
              display: "block",
            }}
            loading="lazy"
          />
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tipos.map((tipo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Título do card */}
              <div className="mb-4">
                <h3
                  className="text-[#1E1E1E] mb-2"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    fontSize: "1.0rem",
                    lineHeight: "1.4",
                  }}
                >
                  {tipo.title}
                </h3>
                <div
                  className="text-[#A89888] uppercase tracking-wider"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 500,
                    fontSize: "0.85rem",
                  }}
                >
                  {tipo.subtitle}
                </div>
              </div>

              {/* Descrição */}
              <p
                className="text-[#1E1E1E]/70 mb-6 leading-relaxed"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {tipo.description}
              </p>

              {/* Destaques */}
              <div className="space-y-3 mt-auto">
                {tipo.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[#A89888] mt-1 flex-shrink-0">•</span>
                    <p
                      className="text-[#1E1E1E]/80 leading-relaxed"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        fontSize: "0.95rem",
                      }}
                    >
                      <span
                        className="font-semibold text-[#1E1E1E]"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        {highlight.label}
                      </span>{" "}
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}