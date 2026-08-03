export default function ProcedimentosHero() {
  const tags = [
    "Toxina Botulínica",
    "Preenchimento Facial",
    "Bioestimuladores",
    "SkinBoosters",
  ];

  return (
    <section className="proc-page-hero">
      <div className="proc-page-hero-bg"></div>
      <div className="proc-page-hero-line"></div>

      <div className="container relative z-10 text-center">
        <span className="proc-page-hero-label">
          <span className="proc-page-hero-label-line"></span>
          Procedimentos Estéticos
          <span className="proc-page-hero-label-line"></span>
        </span>

        <h1 className="proc-page-hero-title">
          Beleza que{" "}
          <span style={{ color: "var(--gold-light)", fontStyle: "italic" }}>
            transforma
          </span>
        </h1>

        <p className="proc-page-hero-subtitle">
          Experiências estéticas com técnica, segurança e respeito à
          individualidade. Cada tratamento é pensado para revelar o melhor de você.
        </p>

        <div className="proc-page-hero-tags">
          {tags.map((tag) => (
            <span key={tag} className="proc-page-hero-tag">
              <span className="proc-page-hero-tag-dot"></span>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}