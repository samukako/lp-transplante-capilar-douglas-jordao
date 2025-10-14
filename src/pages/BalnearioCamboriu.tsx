import { Helmet } from "react-helmet-async";
import App from "../App";

export function BalnearioCamboriu() {
  return (
    <>
      <Helmet>
        <title>Transplante Capilar em Balneário Camboriú | Dr. Douglas Jordão</title>
        <meta
          name="description"
          content="Unidade Balneário Camboriú — Grupo Dr. Douglas Jordão. Técnica FUE com naturalidade, precisão e cuidado humanizado. Atendimento premium com resultados naturais e acompanhamento individualizado."
        />
        <link
          rel="canonical"
          href="https://www.grupodrdouglasjordao.com.br/transplante-capilar-balneario-camboriu"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Transplante Capilar em Balneário Camboriú | Dr. Douglas Jordão"
        />
        <meta
          property="og:description"
          content="Atendimento premium em Balneário Camboriú. Técnica FUE com naturalidade, precisão e cuidado humanizado. Resultados naturais e duradouros."
        />
        <meta
          property="og:url"
          content="https://www.grupodrdouglasjordao.com.br/transplante-capilar-balneario-camboriu"
        />
        <meta
          property="og:image"
          content="https://www.grupodrdouglasjordao.com.br/assets/og-balneario.jpg"
        />
        <meta property="og:locale" content="pt_BR" />
      </Helmet>

      <App />
    </>
  );
}