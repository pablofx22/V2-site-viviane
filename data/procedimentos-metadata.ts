export interface ProcedimentoMeta {
  imagem: string;
  descricaoCurta: string;
  label: string;
}

export const procedimentosMetadata: Record<string, ProcedimentoMeta> = {
  "Limpeza de pele profissional": {
    imagem: "/images/procedimentos/limpeza-pele.jpg",
    descricaoCurta: "Remocao de impurezas e renovacao celular.",
    label: "Limpeza",
  },
  "SkinBoosters": {
    imagem: "/images/procedimentos/skinbooster.jpg",
    descricaoCurta: "Hidratacao intensa e revitalizacao.",
    label: "Hidratacao",
  },
  "Peelings quimicos (glicólico, salicílico, TCA e mais)": {
    imagem: "/images/procedimentos/peeling-quimico.jpg",
    descricaoCurta: "Renovacao celular com acidos especificos.",
    label: "Renovacao",
  },
  "Peeling fisico de Diamante": {
    imagem: "/images/procedimentos/peeling-diamante.jpg",
    descricaoCurta: "Esfoliacao mecanica suave.",
    label: "Esfoliacao",
  },
  "Microagulhamento com Drug Delivery": {
    imagem: "/images/procedimentos/microagulhamento.jpg",
    descricaoCurta: "Estimulacao de colageno com ativos.",
    label: "Colageno",
  },
  "LEDterapia": {
    imagem: "/images/procedimentos/ledterapia.jpg",
    descricaoCurta: "Regeneracao com luz terapeutica.",
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
  "Regeneracao tecidual com Peptideos e Exossomos": {
    imagem: "/images/procedimentos/regeneracao.jpg",
    descricaoCurta: "Tecnologia avancada para reparacao celular.",
    label: "Regeneracao",
  },
  "Prescricoes Biomedicas": {
    imagem: "/images/procedimentos/prescricao.jpg",
    descricaoCurta: "Ativos e cosmeticos personalizados.",
    label: "Prescricao",
  },
  "Rinomodelacao": {
    imagem: "/images/procedimentos/rinomodelacao.jpg",
    descricaoCurta: "Correcao e harmonizacao nasal.",
    label: "Nariz",
  },
  "Preenchimento labial": {
    imagem: "/images/procedimentos/labios.jpg",
    descricaoCurta: "Volume e definicao natural.",
    label: "Labios",
  },
  "Contorno de mandibula e mento": {
    imagem: "/images/procedimentos/mandibula.jpg",
    descricaoCurta: "Definicao de mandibula e mento.",
    label: "Mandibula",
  },
  "Correcao de olheiras": {
    imagem: "/images/procedimentos/olheiras.jpg",
    descricaoCurta: "Suavizacao de olheiras.",
    label: "Olheiras",
  },
};