import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import monograma from "figma:asset/f2039f561624ab374594bc1881fa1d0bddda8abe.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll com offset para compensar navbar fixa, com retry e fallback
  const scrollToSection = (id: string) => {
    const offset = 110; // altura aproximada da navbar fixa

    const doScroll = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      return true;
    };

    // Fecha o menu primeiro para evitar overlay interferindo
    setIsMobileMenuOpen(false);

    // Tenta imediatamente e, se não achar, tenta novamente algumas vezes
    if (!doScroll()) {
      let attempts = 0;
      const maxAttempts = 5;
      const interval = setInterval(() => {
        attempts++;
        if (doScroll() || attempts >= maxAttempts) {
          clearInterval(interval);
          if (attempts >= maxAttempts) {
            // fallback: define hash para permitir navegação nativa
            window.location.hash = id;
          }
        }
      }, 120);
    }
  };

  const menuItems = [
    { name: "INÍCIO", id: "inicio" },
    { name: "DIFERENCIAIS", id: "diferenciais" },
    { name: "ESPECIALISTA", id: "especialista" },
    { name: "FAQ", id: "faq" },
    { name: "ESTÁGIOS", id: "tipos-calvicie" },
    { name: "CONTATO", id: "contato" },
  ];

  const handleWhatsApp = () => {
    const path = typeof window !== "undefined" ? window.location.pathname : "";

    const whatsappByUnit: Record<string, string> = {
      canoas: "https://wa.me/5551996305040",
      balneario: "https://wa.me/5547991378070",
    };

    const isBC = path.includes("/transplante-capilar-balneario-camboriu");
    const href = isBC ? whatsappByUnit.balneario : whatsappByUnit.canoas;
    const cidade = isBC ? "Balneário Camboriú" : "Canoas";
    const preset = `Tenho interesse no Transplante Capilar em ${cidade}!`;
    const finalHref = `${href}?text=${encodeURIComponent(preset)}`;

    window.open(finalHref, "_blank");
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md shadow-xl"
            : "bg-gradient-to-b from-black/55 via-black/40 to-transparent"
        }`}
        style={{ height: "90px" }}
      >
        <div className="container mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="h-16 w-16 flex-shrink-0">
              <img
                src={monograma}
                alt="Dr. Douglas Jordão - Monograma"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-12">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="transition-colors duration-300 text-sm font-medium title-subtitle text-white/90 hover:text-white"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={handleWhatsApp}
                className="
                  bg-[#A89888] text-white px-6 py-3 rounded-full
                  transition-all duration-300
                  hover:bg-[#8B7B6B] hover:shadow-lg hover:scale-105
                  text-sm font-medium
                "
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                AGENDE SUA AVALIAÇÃO
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu-overlay fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden"
            style={{ paddingTop: "90px" }}
          >
            {/* Botão X no canto superior direito */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-6 p-2 text-white hover:text-white/80 transition-colors z-50"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>

            <div
              className="flex flex-col items-center justify-center h-full space-y-8 px-6"
              style={{ minHeight: "calc(100vh - 90px)" }}
            >
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: menuItems.indexOf(item) * 0.1,
                  }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white text-xl font-medium"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
                onClick={handleWhatsApp}
                className="
                  bg-[#A89888] text-white px-8 py-4 rounded-full
                  transition-all duration-300 mt-8
                  hover:bg-[#8B7B6B] hover:shadow-lg
                  text-sm font-medium
                "
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                AGENDE SUA AVALIAÇÃO
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}