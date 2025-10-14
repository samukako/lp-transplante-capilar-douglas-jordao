import { motion } from "motion/react";
import { useState } from "react";

export function FAQTransplante() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const faqColumnLeft = [
    {
      question: "O que é o método FUE?",
      answer:
        "Técnica moderna e minimamente invasiva, onde os fios são retirados individualmente da área doadora e implantados nas falhas. Sem cortes lineares, sem pontos e com recuperação mais rápida que o método tradicional.",
    },
    {
      question: "Quanto tempo dura o procedimento?",
      answer:
        "De 6 a 10 horas, realizado em um único dia. O paciente passa o dia na clínica e retorna para casa sem necessidade de internação.",
    },
    {
      question: "O transplante capilar dói?",
      answer:
        "Não. É feito com anestesia local, garantindo conforto. Após o procedimento, pode haver leve sensibilidade controlada com analgésicos simples.",
    },
    {
      question: "O cabelo transplantado cai depois?",
      answer:
        "Sim, entre 20 e 40 dias ocorre a queda transitória. Depois, os novos fios crescem entre o 3º e o 6º mês, com resultado final em até 12 meses.",
    },
    {
      question: "O resultado é definitivo?",
      answer:
        "Sim. Os fios vêm de áreas resistentes à calvície e não voltam a cair. O resultado é permanente e natural, com acompanhamento adequado.",
    },
    {
      question: "Quando posso voltar a trabalhar ou treinar?",
      answer:
        "Atividades leves: 2 a 3 dias. Trabalho: 3 a 5 dias. Exercícios intensos: 15 a 20 dias, conforme liberação médica.",
    },
  ];

  const faqColumnRight = [
    {
      question: "Precisa raspar toda a cabeça?",
      answer:
        "Na maioria dos casos, sim. Mas há opção sem raspagem total, indicada para casos menores ou correções.",
    },
    {
      question: "Em quanto tempo verei o resultado final?",
      answer:
        "3º mês: novos fios surgem. 6º mês: metade do resultado. 12º mês: fios fortes e naturais.",
    },
    {
      question: "Quais são os cuidados após o transplante?",
      answer:
        "Lavar com cuidado, evitar sol e atrito, dormir com cabeça elevada e seguir as orientações médicas. Retornos garantem o acompanhamento do crescimento dos fios.",
    },
    {
      question: "Qualquer pessoa pode fazer o transplante FUE?",
      answer:
        "A maioria sim, mas é necessária avaliação médica para analisar área doadora, grau da calvície e saúde geral.",
    },
    {
      question: "O transplante serve apenas para o couro cabeludo?",
      answer:
        "Não. Também pode ser aplicado em sobrancelhas, barba e correções de cicatrizes.",
    },
    {
      question: "Posso combinar o transplante com outros tratamentos?",
      answer:
        "Sim. PRP, bioestimuladores e medicamentos tópicos potencializam os resultados. Na clínica, o plano é personalizado para fortalecer todos os fios.",
    },
  ];

  const AccordionItemCustom = ({
    item,
    value,
  }: {
    item: { question: string; answer: string };
    value: string;
  }) => {
    const isOpen = openItems.includes(value);

    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <button
          onClick={() => toggleItem(value)}
          aria-expanded={isOpen}
          aria-controls={`content-${value}`}
          className="w-full flex items-center justify-between gap-3 px-5 py-4 hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#A89888] focus:ring-offset-2"
        >
          {/* Pergunta */}
          <span
            className="flex-1 min-w-0 text-left font-semibold text-[#1E1E1E] whitespace-normal break-words hyphens-auto"
            style={{ fontFamily: "DM Sans, sans-serif", WebkitHyphens: "auto", hyphens: "auto" }}
          >
            {item.question}
          </span>

          {/* Ícone */}
          <span
            className="flex-shrink-0 text-2xl text-[#1E1E1E] transition-transform duration-300 flex items-center justify-center"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", minWidth: 24, marginTop: 2 }}
          >
            +
          </span>
        </button>

        {/* Resposta */}
        <div
          id={`content-${value}`}
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: isOpen ? 500 : 0, opacity: isOpen ? 1 : 0 }}
        >
          <div className="px-5 pb-4 pt-2">
            <p className="text-[#1E1E1E]/70 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const path = typeof window !== "undefined" ? window.location.pathname : "";

  const whatsappByUnit: Record<string, string> = {
    canoas: "https://wa.me/5551996305040",
    balneario: "https://wa.me/5547991378070",
  };

  const href = path.includes("/transplante-capilar-balneario-camboriu")
    ? whatsappByUnit.balneario
    : whatsappByUnit.canoas;

  const handleWhatsApp = () => {
    window.open(href, "_blank");
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Título */}
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
            Perguntas Frequentes
          </h2>
          <p
            className="text-lg text-[#1E1E1E]/80 max-w-2xl mx-auto"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Esclarecemos as principais dúvidas sobre o transplante capilar para que você se sinta seguro e bem informado.
          </p>
        </motion.div>

        {/* FAQ - 2 colunas desktop / 1 no mobile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6"
        >
          <div className="space-y-3">
            {faqColumnLeft.map((item, index) => (
              <AccordionItemCustom key={`left-${index}`} item={item} value={`left-${index}`} />
            ))}
          </div>

          <div className="space-y-3">
            {faqColumnRight.map((item, index) => (
              <AccordionItemCustom key={`right-${index}`} item={item} value={`right-${index}`} />
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-[#A89888] text-white p-6 md:p-8 rounded-2xl max-w-4xl mx-auto">
            <p className="text-lg mb-4" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Ainda tem dúvidas? Nossa equipe está pronta para esclarecer todas as suas questões.
            </p>
            <button
              onClick={handleWhatsApp}
              className="bg-white text-[#A89888] px-6 py-3 rounded-full font-semibold hover:bg-[#F5F5F3] transition-colors duration-300"
              style={{ fontFamily: "Montserrat, sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              Tire suas dúvidas agora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}