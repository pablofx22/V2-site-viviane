export interface ProcedimentoMeta {
  imagem: string;
  descricaoCurta: string;
  label: string;
}

export const procedimentosMetadata: Record<string, ProcedimentoMeta> = {
  "Limpeza de pele profissional": {
    imagem: "/images/procedimentos/limpeza-pele.jpg",
    descricaoCurta: "Remoção de impurezas e renovação celular.",
    label: "Limpeza",
  },
  "SkinBoosters": {
    imagem: "/images/procedimentos/skinbooster.jpg",
    descricaoCurta: "Hidratação intensa e revitalização.",
    label: "Hidratação",
  },
  "Peelings químicos (glicólico, salicílico, TCA e mais)": {
    imagem: "/images/procedimentos/peeling-quimico.jpg",
    descricaoCurta: "Renovação celular com ácidos específicos.",
    label: "Renovação",
  },
  "Peeling físico de Diamante": {
    imagem: "/images/procedimentos/peeling-diamante.jpg",
    descricaoCurta: "Esfoliação mecânica suave.",
    label: "Esfoliação",
  },
  "Microagulhamento com Drug Delivery": {
    imagem: "/images/procedimentos/microagulhamento.jpg",
    descricaoCurta: "Estimulação de colágeno com ativos.",
    label: "Colágeno",
  },
  "LEDterapia": {
    imagem: "/images/procedimentos/ledterapia.jpg",
    descricaoCurta: "Regeneração com luz terapêutica.",
    label: "LED",
  },
  "Consultoria de Skincare": {
    imagem: "/images/procedimentos/skincare.jpg",
    descricaoCurta: "Plano personalizado de cuidados.",
    label: "Skincare",
  },
  "Luz Intensa Pulsada (IPL)": {
    imagem: "/images/procedimentos/ipl.jpg",
    descricaoCurta: "Rejuvenescimento e tratamento de manchas.",
    label: "IPL",
  },
  "Regeneração tecidual com Peptídeos e Exossomos": {
    imagem: "/images/procedimentos/regeneracao.jpg",
    descricaoCurta: "Tecnologia avançada para reparação celular.",
    label: "Regeneração",
  },
  "Prescrições Biomédicas": {
    imagem: "/images/procedimentos/prescricao.jpg",
    descricaoCurta: "Ativos e cosméticos personalizados.",
    label: "Prescrição",
  },
  "Rinomodelação": {
    imagem: "/images/procedimentos/rinomodelacao.jpg",
    descricaoCurta: "Correção e harmonização nasal.",
    label: "Nariz",
  },
  "Preenchimento labial": {
    imagem: "/images/procedimentos/labios.jpg",
    descricaoCurta: "Volume e definição natural.",
    label: "Lábios",
  },
  "Contorno de mandíbula e mento": {
    imagem: "/images/procedimentos/mandibula.jpg",
    descricaoCurta: "Definição de mandíbula e mento.",
    label: "Mandíbula",
  },
  "Correção de olheiras": {
    imagem: "/images/procedimentos/olheiras.jpg",
    descricaoCurta: "Suavização de olheiras.",
    label: "Olheiras",
  },
  "Bigode chinês": {
    imagem: "/images/procedimentos/bigode-chines.jpg",
    descricaoCurta: "Suavização do sulco nasogeniano.",
    label: "Sulco",
  },
  "Preenchimento de malar e têmporas": {
    imagem: "/images/procedimentos/malar.jpg",
    descricaoCurta: "Restauração de volume facial.",
    label: "Volume",
  },
};