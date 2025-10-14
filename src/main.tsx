import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { Hub } from "./pages/Hub";
import { Canoas } from "./pages/Canoas";
import { BalnearioCamboriu } from "./pages/BalnearioCamboriu";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* redireciona raiz para hub */}
          <Route path="/" element={<Navigate to="/transplante-capilar" replace />} />

          {/* hub e unidades */}
          <Route path="/transplante-capilar" element={<Hub />} />
          <Route path="/transplante-capilar-canoas" element={<Canoas />} />
          <Route path="/transplante-capilar-balneario-camboriu" element={<BalnearioCamboriu />} />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/transplante-capilar" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);