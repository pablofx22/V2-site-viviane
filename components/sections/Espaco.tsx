import Image from "next/image";

export default function Espaco() {
  const fotos = [
    { id: 1, src: "/images/espaco/recepcao.jpeg", alt: "Recepção da clínica" },
    { id: 2, src: "/images/espaco/sala-atendimento.jpeg", alt: "Sala de atendimento" },
    { id: 3, src: "/images/espaco/ambiente.jpeg", alt: "Ambiente acolhedor" },
  ];

  return (
    <section id="espaco" className="espaco-section">
      <div className="container">
        <div className="espaco-header fade-up">
          <div className="section-label section-label-centered">
            <span className="t-label" style={{ color: "var(--gold)" }}>
              Nosso Espaço
            </span>
          </div>
          <h2 className="t-h1" style={{ textAlign: "center" }}>
            Um ambiente pensado para{" "}
            <em style={{ color: "var(--gold-dark)", fontStyle: "italic" }}>
              você
            </em>
          </h2>
          <p
            className="t-body"
            style={{
              textAlign: "center",
              maxWidth: "560px",
              margin: "var(--s4) auto 0",
              color: "var(--text-secondary)",
            }}
          >
            Conforto, elegância e cuidado em cada detalhe. Conheça o espaço onde
            sua beleza é tratada com excelência.
          </p>
        </div>

        <div className="espaco-grid fade-up">
          {fotos.map((foto) => (
            <div key={foto.id} className="espaco-card">
              <div className="espaco-foto">
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}