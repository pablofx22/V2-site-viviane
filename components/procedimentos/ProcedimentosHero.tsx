export default function ProcedimentosHero() {
  return (
    <section className="relative overflow-hidden bg-black-deep pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,110,0.12),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(248,238,220,0.08),transparent_26%)]"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      <div className="container relative z-10 text-center">
        <span className="inline-flex items-center gap-3 text-gold text-xs font-medium tracking-[0.18em] uppercase mb-4">
          <span className="h-px w-12 bg-gold inline-block"></span>
          Procedimentos Estéticos
          <span className="h-px w-12 bg-gold inline-block"></span>
        </span>

        <h1 className="t-display font-light text-white-warm leading-tight max-w-4xl mx-auto">
          Beleza que <span className="text-gold-light italic">transforma</span>
        </h1>

        <p className="t-body text-white-warm/70 mt-6 max-w-2xl mx-auto">
          Experiências estéticas com técnica, segurança e respeito à individualidade. Cada tratamento é pensado para revelar o melhor de você.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3 text-[0.75rem] uppercase tracking-[0.18em] text-white-warm/70">
          {[
            "Toxina Botulínica",
            "Preenchimento Facial",
            "Bioestimuladores",
            "SkinBoosters",
          ].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-2 rounded-full border border-white-warm/15 bg-white-warm/5 px-4 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold block"></span>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
