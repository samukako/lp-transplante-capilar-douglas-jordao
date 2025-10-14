import { motion } from "motion/react";
import { CheckCircle, Award, Target, Sparkles, Heart, Briefcase, Users } from "lucide-react";

export function DiferenciaisBeneficios() {
  const diferenciais = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Procedimento minimamente invasivo",
      description: "Técnica avançada que reduz desconforto e acelera a recuperação"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Resultado definitivo e natural",
      description: "Fios que crescem naturalmente respeitando sua linha capilar original"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Análise personalizada da linha capilar",
      description: "Estudo detalhado para um resultado harmonioso e único"
    }
  ];

  const beneficios = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Aparência rejuvenescida",
      description: "Recupere anos de juventude com uma linha capilar revitalizada"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Linha capilar harmonizada de forma natural",
      description: "Resultados que respeitam sua fisionomia e personalidade"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Autoestima renovada em ambientes pessoais e profissionais",
      description: "Confiança que se reflete em todas as áreas da sua vida"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Resultados permanentes, preservando sua essência",
      description: "Transformação duradoura que mantém sua identidade única"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#F5F5F3]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          
          {/* Diferenciais */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h2
                className="tracking-[0.12em] uppercase text-2xl md:text-3xl lg:text-4xl text-[#1E1E1E] mb-8"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                Diferenciais
              </h2>
            </div>
            
            <div className="space-y-6">
              {diferenciais.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-[#A89888]/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#A89888] text-white p-3 rounded-full flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        className="text-lg font-semibold text-[#1E1E1E] mb-2"
                        style={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[#1E1E1E]/80"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefícios */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h2
                className="tracking-[0.12em] uppercase text-2xl md:text-3xl lg:text-4xl text-[#1E1E1E] mb-8"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                Benefícios
              </h2>
            </div>
            
            <div className="space-y-6">
              {beneficios.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="bg-[#1E1E1E] text-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#A89888] text-white p-3 rounded-full flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        className="text-lg font-semibold mb-2"
                        style={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-white/80"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}