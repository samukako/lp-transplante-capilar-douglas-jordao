import { Helmet } from "react-helmet-async";
import App from "../App";

export function Canoas() {
  return (
    <>
      <Helmet>
        <title>Transplante Capilar em Canoas | Dr. Douglas Jordão</title>
        <meta
          name="description"
          content="Unidade Canoas — Grupo Dr. Douglas Jordão. Técnica FUE com naturalidade, precisão e cuidado humanizado. Atendimento premium com resultados naturais e acompanhamento individualizado."
        />
        <link
          rel="canonical"
          href="https://www.grupodrdouglasjordao.com.br/transplante-capilar-canoas"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Transplante Capilar em Canoas | Dr. Douglas Jordão"
        />
        <meta
          property="og:description"
          content="Atendimento premium em Canoas. Técnica FUE com naturalidade, precisão e cuidado humanizado. Resultados naturais e duradouros."
        />
        <meta
          property="og:url"
          content="https://www.grupodrdouglasjordao.com.br/transplante-capilar-canoas"
        />
        <meta
          property="og:image"
          content="https://www.grupodrdouglasjordao.com.br/assets/og-canoas.jpg"
        />
        <meta property="og:locale" content="pt_BR" />
      </Helmet>

      <App />
    </>
  );
}