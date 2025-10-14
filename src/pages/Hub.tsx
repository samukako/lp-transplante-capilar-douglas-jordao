import { Helmet } from "react-helmet-async";
import App from "../App";

export function Hub() {
  return (
    <>
      <Helmet>
        <title>Transplante Capilar FUE | Grupo Dr. Douglas Jordão</title>
        <meta
          name="description"
          content="Transplante capilar com técnica FUE, naturalidade e segurança. Atendimentos em Canoas e Balneário Camboriú."
        />
        <link
          rel="canonical"
          href="https://www.grupodrdouglasjordao.com.br/transplante-capilar"
        />
      </Helmet>

      <App />
    </>
  );
}