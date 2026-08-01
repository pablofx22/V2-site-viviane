import { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/whatsAppFloat";
import { procedimentosAncora } from "@/data/procedimentos";
import ProcedimentosHero from "@/components/procedimentos/ProcedimentosHero";
import ProcedimentosGrid from "@/components/procedimentos/ProcedimentosGrid";

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

        <section id="procedimentos-grid" className="py-16 md:py-24 bg-cream">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <span className="inline-flex items-center gap-3 text-gold text-xs font-medium tracking-[0.18em] uppercase mb-4">
                <span className="h-px w-12 bg-gold inline-block"></span>
                Procedimentos em destaque
                <span className="h-px w-12 bg-gold inline-block"></span>
              </span>
              <h2 className="t-h2 font-light text-text-primary">
                Tratamentos com resultado natural e cuidado premium.
              </h2>
              <p className="t-body text-text-secondary mt-4">
                Cada atendimento é personalizado para respeitar a sua anatomia, o seu tempo e o seu desejo de harmonia.
              </p>
            </div>

            <ProcedimentosGrid procedimentos={procedimentosAncora} />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black-deep text-center">
          <div className="container max-w-3xl mx-auto">
            <span className="inline-block text-gold text-sm font-medium tracking-[0.18em] uppercase mb-4">
              Pronta para transformar?
            </span>
            <h2 className="t-h2 font-light text-white-warm">
              Agende sua <span className="text-gold-light italic">avaliação</span>
            </h2>
            <p className="t-body text-white-warm/70 mt-4">
              Converse agora com a Dra. Viviane Seguro e descubra qual procedimento é ideal para o seu rosto.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5551999765243?text=Olá%2C%20Dra.%20Viviane!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-wider"
              >
                Agendar avaliação
              </a>
              <a
                href="#procedimentos-grid"
                className="btn btn-outline rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-wider"
              >
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
