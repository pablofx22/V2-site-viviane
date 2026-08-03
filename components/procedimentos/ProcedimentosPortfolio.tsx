import Image from "next/image";
import { PortfolioCategoria } from "@/data/procedimentos";
import { procedimentosMetadata } from "@/data/procedimentos-metadata";

interface ProcedimentosPortfolioProps {
  categorias: PortfolioCategoria[];
}

function ProcedimentoPlaceholder({ label }: { label: string }) {
  return (
    <div className="proc-portfolio-badge-placeholder">
      <span className="proc-portfolio-badge-placeholder-letter">
        {label.charAt(0)}
      </span>
    </div>
  );
}

export default function ProcedimentosPortfolio({ categorias }: ProcedimentosPortfolioProps) {
  return (
    <div className="proc-portfolio-section">
      {categorias.map((categoria) => (
        <div key={categoria.titulo} className="proc-portfolio-category-block">
          <h3 className="proc-portfolio-cat-title">{categoria.titulo}</h3>
          <div className="proc-portfolio-badges-grid">
            {categoria.itens.map((item) => {
              const meta = procedimentosMetadata[item];
              return (
                <div key={item} className="proc-portfolio-badge-item">
                  <div className="proc-portfolio-badge-icon">
                    {meta ? (
                      <Image
                        src={meta.imagem}
                        alt={item}
                        width={44}
                        height={44}
                        style={{ objectFit: "cover", borderRadius: "50%" }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    ) : (
                      <ProcedimentoPlaceholder label={item} />
                    )}
                  </div>
                  <div className="proc-portfolio-badge-info">
                    <span className="proc-portfolio-badge-name">{item}</span>
                    {meta && (
                      <span className="proc-portfolio-badge-desc">
                        {meta.descricaoCurta}
                      </span>
                    )}
                  </div>
                  {meta?.label && (
                    <span className="proc-portfolio-badge-tag">{meta.label}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}