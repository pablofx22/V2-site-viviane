import { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import ProcedimentosHero from "@/components/procedimentos/ProcedimentosHero";
import ProcedimentosGrid from "@/components/procedimentos/ProcedimentosGrid";
import ProcedimentosPortfolioGrid from "@/components/procedimentos/ProcedimentosPortfolioGrid";
import { procedimentosAncora } from "@/data/procedimentos";

export const metadata: Metadata = {
  title: "Procedimentos Estéticos | Dra. Viviane Seguro - Biomédica Esteta",
  description:
    "Conheça todos os procedimentos estéticos oferecidos pela Dra. Viviane Seguro em Porto Alegre. Toxina botulínica, preenchimento facial, bioestimuladores e muito mais.",
  keywords:
    "procedimentos estéticos, harmonização facial, toxina botulínica, preenchimento facial, bioestimuladores, skinbooster, porto alegre",
  openGraph: {
    title: "Procedimentos Estéticos | Dra. Viviane Seguro",
    description:
      "Procedimentos estéticos de alto padrão com a Dra. Viviane Seguro. Conheça todos os tratamentos disponíveis.",
    type: "website",
    url: "https://dravivianeseguro.com.br/procedimentos",
  },
};

export default function ProcedimentosPage() {
  return (
    <>
      <main>
        <ProcedimentosHero />

        {/* Seção de portfólio completo (nova) */}
        <section className="pfg-section">
          <div className="container">
            <div className="pfg-section-header">
              <span className="proc-page-section-label">
                <span className="proc-page-section-label-line"></span>
                Portfólio Completo
                <span className="proc-page-section-label-line"></span>
              </span>
              <h2 className="t-h2" style={{ color: "var(--text-primary)", fontWeight: 300, textAlign: "center" }}>
                Todos os procedimentos disponíveis
              </h2>
              <p className="t-body" style={{ color: "var(--text-secondary)", textAlign: "center", maxWidth: "560px", margin: "var(--s4) auto 0" }}>
                Cada tratamento é pensado para um objetivo específico. Converse com a Dra. Viviane para descobrir o ideal para você.
              </p>
            </div>
            <ProcedimentosPortfolioGrid />
          </div>
        </section>

        {/* CTA final */}
        <section className="proc-page-cta">
          <div className="container" style={{ maxWidth: 768, margin: "0 auto" }}>
            <span className="proc-page-cta-label">Pronta para transformar?</span>
            <h2 className="proc-page-cta-title">
              Agende sua{" "}
              <span style={{ color: "var(--gold-light)", fontStyle: "italic" }}>
                Consulta
              </span>
            </h2>
            <p className="proc-page-cta-subtitle">
              Converse agora com a Dra. Viviane Seguro e descubra qual
              procedimento é ideal para o seu rosto.
            </p>
            <div className="proc-page-cta-actions">
              <a
                href="https://wa.me/5551999765243?text=Olá%2C%20Dra.%20Viviane!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Agendar Consulta
              </a>
              <a href="#procedimentos-grid" className="btn btn-outline">
                Ver procedimentos
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}