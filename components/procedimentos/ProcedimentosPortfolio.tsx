import { PortfolioCategoria } from "@/data/procedimentos";

interface ProcedimentosPortfolioProps {
  categorias: PortfolioCategoria[];
}

export default function ProcedimentosPortfolio({ categorias }: ProcedimentosPortfolioProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {categorias.map((categoria, index) => (
        <div
          key={index}
          className="bg-cream rounded-2xl border border-border p-6 md:p-8 hover:border-gold/30 transition-colors"
        >
          <h3 className="text-xs font-medium tracking-[0.12em] uppercase text-gold mb-4">
            {categoria.titulo}
          </h3>
          <ul className="space-y-2.5">
            {categoria.itens.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0 mt-1.5"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}