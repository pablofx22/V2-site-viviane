"use client";

import Image from "next/image";
import { ProcedimentoAncora } from "@/data/procedimentos";
import { useEffect, useRef, useState } from "react";

interface ProcedimentoCardProps {
  procedimento: ProcedimentoAncora;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ProcedimentoCard({
  procedimento,
  isExpanded,
  onToggle,
}: ProcedimentoCardProps) {
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    setMaxHeight(isExpanded ? contentRef.current.scrollHeight : 0);
  }, [isExpanded]);

  const detalhes = {
    duracao: "30-60 minutos",
    recuperacao: "Imediata",
    resultados: "3-6 meses",
  };

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-[2rem] border bg-white-warm transition-all duration-300 ${
        isExpanded
          ? "border-gold shadow-[0_24px_60px_rgba(201,169,110,0.14)]"
          : "border-border hover:border-gold/60 hover:shadow-lg hover:-translate-y-1"
      }`}
    >
      <div className="relative h-56 overflow-hidden bg-cream">
        <Image
          src={procedimento.imagem}
          alt={procedimento.imagemAlt}
          fill
          className="object-cover transition-transform duration-500 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4">
          <span className="rounded-full border border-gold/30 bg-black-deep/70 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-gold">
            {procedimento.label}
          </span>
          <span className="rounded-full bg-black-deep/70 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white-warm">
            {procedimento.numero.split(" - ")[0]}
          </span>
        </div>

        <button
          onClick={onToggle}
          aria-expanded={isExpanded}
          className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-black-deep transition-transform duration-300 hover:bg-gold-dark hover:scale-110"
          aria-label={isExpanded ? "Fechar detalhes" : "Abrir detalhes"}
        >
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl font-light text-text-primary leading-tight">
          {procedimento.titulo}
        </h3>
        <p className="t-body text-text-secondary mt-3 line-clamp-2">
          {procedimento.descricao}
        </p>

        <div
          className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{ maxHeight: `${maxHeight}px` }}
        >
          <div ref={contentRef}>
            <div className="mt-5 pt-5 border-t border-border/60">
              <p className="t-body text-text-secondary leading-relaxed">
                {procedimento.descricao} Técnica avançada com resultado natural, procedência segura e atenção aos detalhes para cada etapa do tratamento.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-3xl bg-cream p-4 text-center">
                  <span className="block text-[0.65rem] font-medium uppercase tracking-[0.12em] text-text-secondary">
                    Duração
                  </span>
                  <span className="mt-2 block text-sm font-semibold text-text-primary">
                    {detalhes.duracao}
                  </span>
                </div>
                <div className="rounded-3xl bg-cream p-4 text-center">
                  <span className="block text-[0.65rem] font-medium uppercase tracking-[0.12em] text-text-secondary">
                    Recuperação
                  </span>
                  <span className="mt-2 block text-sm font-semibold text-text-primary">
                    {detalhes.recuperacao}
                  </span>
                </div>
                <div className="rounded-3xl bg-cream p-4 text-center">
                  <span className="block text-[0.65rem] font-medium uppercase tracking-[0.12em] text-text-secondary">
                    Resultados
                  </span>
                  <span className="mt-2 block text-sm font-semibold text-text-primary">
                    {detalhes.resultados}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <a
                  href="https://wa.me/5551999765243?text=Olá%2C%20Dra.%20Viviane!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20procedimento%20de%20..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark transition-colors hover:text-gold"
                >
                  Quero saber mais
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
