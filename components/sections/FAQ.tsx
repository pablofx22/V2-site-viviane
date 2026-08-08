import Button from "@/components/ui/Button";
import FaqAccordionItem from "@/components/ui/FaqAccordionItem";
import { faqs } from "@/data/faqs";


const WHATSAPP_NUMBER = "5551999765243";
const FAQ_MESSAGE = "Olá, Dra. Viviane! Tenho uma dúvida sobre os procedimentos.";

export default function FAQ() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    FAQ_MESSAGE
  )}`;

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-sidebar fade-up">
            <div className="section-label">
              <span className="t-label" style={{ color: "var(--gold)" }}>
                Dúvidas Frequentes
              </span>
            </div>
            <h2 className="t-h1" style={{ color: "var(--white-warm)" }}>
              Tudo que você
              <br />
              precisa saber
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
                antes de agendar.
              </em>
            </h2>
            <p style={{ color: "rgba(250,248,245,0.45)", marginBottom: "var(--s6)" }}>
              Respondemos as perguntas mais comuns para que você chegue à
              sua avaliação com segurança e confiança.
            </p>
            <Button href={whatsappLink} variant="outline" target="_blank" rel="noopener noreferrer">
              Tirar dúvida pelo WhatsApp
            </Button>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <FaqAccordionItem
                key={item.id}
                pergunta={item.pergunta}
                resposta={item.resposta}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}