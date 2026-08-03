"use client";

import { useEffect, useRef } from "react";

interface ProcedimentoItem {
  nome: string;
  descricao: string;
  imagem?: string;
}

interface Categoria {
  titulo: string;
  itens: ProcedimentoItem[];
}

const categorias: Categoria[] = [
  {
    titulo: "Renovacao da Pele",
    itens: [
      {
        nome: "Limpeza de pele profissional",
        descricao: "Remocao profunda de impurezas com renovacao celular e brilho imediato.",
        imagem: "/images/procedimentos/limpeza-pele.jpg",
      },
      {
        nome: "Peelings quimicos",
        descricao: "Renovacao celular com acidos especificos: glicólico, salicílico, TCA e mais.",
        imagem: "/images/procedimentos/peeling-quimico.jpg",
      },
      {
        nome: "Peeling fisico de Diamante",
        descricao: "Esfoliacao mecanica suave para textura refinada e pele renovada.",
        imagem: "/images/procedimentos/peeling-diamante.jpg",
      },
      {
        nome: "Microagulhamento com Drug Delivery",
        descricao: "Estimulacao de colageno com entrega de ativos nas camadas mais profundas.",
        imagem: "/images/procedimentos/microagulhamento.jpg",
      },
      {
        nome: "LEDterapia",
        descricao: "Regeneracao e tratamento com luz terapeutica de diferentes comprimentos de onda.",
        imagem: "/images/procedimentos/ledterapia.jpg",
      },
      {
        nome: "Consultoria de Skincare",
        descricao: "Plano personalizado de cuidados com a pele baseado no seu biotipo e objetivos.",
        imagem: "/images/procedimentos/skincare.jpg",
      },
    ],
  },
  {
    titulo: "Tecnologia e Inovacao",
    itens: [
      {
        nome: "Luz Intensa Pulsada (IPL)",
        descricao: "Rejuvenescimento, manchas, rosácea, acne e epilação com tecnologia de luz.",
        imagem: "/images/procedimentos/ipl.jpg",
      },
      {
        nome: "SkinBoosters",
        descricao: "Hidratacao intensa com acido hialuronico injetavel para revitalizacao profunda.",
        imagem: "/images/procedimentos/skinbooster.jpg",
      },
      {
        nome: "Regeneracao tecidual com Peptideos e Exossomos",
        descricao: "Tecnologia avancada para reparacao e rejuvenescimento celular.",
        imagem: "/images/procedimentos/regeneracao.jpg",
      },
      {
        nome: "Prescricoes Biomedicas",
        descricao: "Cosmeticos e ativos personalizados prescritos exclusivamente para voce.",
        imagem: "/images/procedimentos/prescricao.jpg",
      },
    ],
  },
  {
    titulo: "Modelagem e Contorno",
    itens: [
      {
        nome: "Rinomodelacao",
        descricao: "Correcao e harmonizacao nasal sem cirurgia, com resultado imediato.",
        imagem: "/images/procedimentos/rinomodelacao.jpg",
      },
      {
        nome: "Preenchimento labial",
        descricao: "Volume e definicao natural dos labios respeitando a anatomia facial.",
        imagem: "/images/procedimentos/labios.jpg",
      },
      {
        nome: "Contorno de mandibula e mento",
        descricao: "Definicao e projecao da mandibula e mento para harmonia facial.",
        imagem: "/images/procedimentos/mandibula.jpg",
      },
      {
        nome: "Correcao de olheiras",
        descricao: "Suavizacao de olheiras com preenchimento e rejuvenescimento do olhar.",
        imagem: "/images/procedimentos/olheiras.jpg",
      },
    ],
  },
];

function CardPlaceholder({ letra }: { letra: string }) {
  return (
    <div className="pfg-card-placeholder">
      <span className="pfg-card-placeholder-letter">{letra}</span>
    </div>
  );
}

export default function ProcedimentosPortfolioGrid() {
  return (
    <div className="pfg-wrapper">
      {categorias.map((categoria) => (
        <div key={categoria.titulo} className="pfg-categoria">
          <div className="pfg-categoria-header">
            <span className="pfg-categoria-linha"></span>
            <h3 className="pfg-categoria-titulo">{categoria.titulo}</h3>
            <span className="pfg-categoria-linha"></span>
          </div>

          <div className="pfg-grid">
            {categoria.itens.map((item) => (
              <div key={item.nome} className="pfg-card">
                <div className="pfg-card-foto">
                  {item.imagem ? (
                    <img
                      src={item.imagem}
                      alt={item.nome}
                      className="pfg-card-img"
                    />
                  ) : (
                    <CardPlaceholder letra={item.nome.charAt(0)} />
                  )}
                </div>
                <div className="pfg-card-body">
                  <h4 className="pfg-card-nome">{item.nome}</h4>
                  <p className="pfg-card-desc">{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}