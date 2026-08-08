"use client";

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
    titulo: "Renovação da Pele",
    itens: [
      {
        nome: "Limpeza de pele profissional",
        descricao: "Remoção profunda de impurezas com renovação celular e brilho imediato.",
        imagem: "/images/procedimentos/limpeza-pele.jpg",
      },
      {
        nome: "Peelings químicos",
        descricao: "Renovação celular com ácidos específicos: glicólico, salicílico, TCA e mais.",
        imagem: "/images/procedimentos/peeling-quimico.jpg",
      },
      {
        nome: "Peeling físico de Diamante",
        descricao: "Esfoliação mecânica suave para textura refinada e pele renovada.",
        imagem: "/images/procedimentos/peeling-diamante.jpg",
      },
      {
        nome: "Microagulhamento com Drug Delivery",
        descricao: "Estimulação de colágeno com entrega de ativos nas camadas mais profundas.",
        imagem: "/images/procedimentos/microagulhamento.jpg",
      },
      {
        nome: "LEDterapia",
        descricao: "Regeneração e tratamento com luz terapêutica de diferentes comprimentos de onda.",
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
    titulo: "Tecnologia e Inovação",
    itens: [
      {
        nome: "Luz Intensa Pulsada (IPL)",
        descricao: "Rejuvenescimento, manchas, rosácea, acne e epilação com tecnologia de luz.",
        imagem: "/images/procedimentos/ipl.jpg",
      },
      {
        nome: "SkinBoosters",
        descricao: "Hidratação intensa com ácido hialurônico injetável para revitalização profunda.",
        imagem: "/images/procedimentos/skinbooster.jpg",
      },
      {
        nome: "Regeneração tecidual com Peptídeos e Exossomos",
        descricao: "Tecnologia avançada para reparação e rejuvenescimento celular.",
        imagem: "/images/procedimentos/regeneracao.jpg",
      },
      {
        nome: "Prescrições Biomédicas",
        descricao: "Cosméticos e ativos personalizados prescritos exclusivamente para você.",
        imagem: "/images/procedimentos/prescricao.jpg",
      },
    ],
  },
  {
    titulo: "Modelagem e Contorno",
    itens: [
      {
        nome: "Rinomodelação",
        descricao: "Correção e harmonização nasal sem cirurgia, com resultado imediato.",
        imagem: "/images/procedimentos/rinomodelacao.jpg",
      },
      {
        nome: "Preenchimento labial",
        descricao: "Volume e definição natural dos lábios respeitando a anatomia facial.",
        imagem: "/images/procedimentos/labios.jpg",
      },
      {
        nome: "Contorno de mandíbula e mento",
        descricao: "Definição e projeção da mandíbula e mento para harmonia facial.",
        imagem: "/images/procedimentos/mandibula.jpg",
      },
      {
        nome: "Correção de olheiras",
        descricao: "Suavização de olheiras com preenchimento e rejuvenescimento do olhar.",
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