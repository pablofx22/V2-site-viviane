export interface ProcedimentoAncora {
  numero: string;
  label: string;
  titulo: string;
  descricao: string;
  icone: "botox" | "preenchimento" | "bioestimulador";
  imagem: string;
  imagemAlt: string;
}

export const procedimentosAncora: ProcedimentoAncora[] = [
  {
    numero: "01 - DESTAQUE",
    label: "Mais Solicitado",
    titulo: "Toxina Botulínica",
    descricao:
      "Expressão natural, resultado preciso. Suaviza linhas de expressão com técnica que preserva movimento e autenticidade.",
    icone: "botox",
    imagem: "/images/procedimentos/toxina-botulinica.jpeg",
    imagemAlt: "Aplicação de toxina botulínica pela Dra. Viviane Seguro",
  },
  {
    numero: "02 - DESTAQUE",
    label: "Alto Impacto",
    titulo: "Preenchimento Facial com Ácido Hialurônico",
    descricao:
      "Contornos que realçam, não que alteram. Reestruturação completa de face - malar, mento, mandíbula, lábios e mais.",
    icone: "preenchimento",
    imagem: "/images/procedimentos/preenchimento-facial.jpeg",
    imagemAlt: "Procedimento de preenchimento facial com ácido hialurônico",
  },
  {
    numero: "03 - DESTAQUE",
    label: "Resultado Progressivo",
    titulo: "Bioestimuladores de Colágeno",
    descricao:
      "Rejuvenescimento que melhora com o tempo. Sculptra e Radiesse estimulam a produção natural de colágeno com resultado duradouro.",
    icone: "bioestimulador",
    imagem: "/images/procedimentos/bioestimuladores.jpeg",
    imagemAlt: "Bioestimulador de colágeno Sculptra aplicado pela Dra. Viviane",
  },
];

export interface PortfolioCategoria {
  titulo: string;
  itens: string[];
}

export const portfolioCategorias: PortfolioCategoria[] = [
  {
    titulo: "Renovação da Pele",
    itens: [
      "Limpeza de pele profissional",
      "Peelings químicos (glicólico, salicílico, TCA e mais)",
      "Peeling físico de Diamante",
      "Microagulhamento com Drug Delivery",
      "LEDterapia",
      "Consultoria de Skincare",
    ],
  },
  {
    titulo: "Tecnologia e Inovação",
    itens: [
      "Luz Intensa Pulsada (IPL)",
      "SkinBoosters",
      "Regeneração tecidual com Peptídeos e Exossomos",
      "Prescrições Biomédicas",
    ],
  },
  {
    titulo: "Modelagem e Contorno",
    itens: [
      "Rinomodelação",
      "Preenchimento labial",
      "Contorno de mandíbula e mento",
      "Correção de olheiras",
    ],
  },
];