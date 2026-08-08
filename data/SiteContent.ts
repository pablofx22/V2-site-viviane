export interface EstatisticaAutoridade {
  numero: string;
  sufixo?: string;
  label: string;
}

export const estatisticasAutoridade: EstatisticaAutoridade[] = [
  { numero: "5.0", label: "Avaliação no Google" },
  // TODO: Quando os dados de workshops chegarem, adicionar aqui, exemplo:
  // { numero: "150", sufixo: "+", label: "Profissionais formados" },
  // { numero: "20", sufixo: "+", label: "Workshops realizados" },
];

export interface WorkshopFoto {
  id: string;
  destaque?: boolean;
  imagem?: string;
  legenda?: string;
}

export const workshopsFotos: WorkshopFoto[] = [
  {
    id: "workshop-1",
    destaque: true,
    imagem: "/images/workshops/workshop1.jpeg",
    legenda: "Workshop 1",
  },
  {
    id: "workshop-2",
    imagem: "/images/workshops/workshop2.jpeg",
    legenda: "Workshop 2",
  },
  {
    id: "workshop-3",
    imagem: "/images/workshops/workshop3.jpeg",
    legenda: "Workshop 3",
  },
];

export const contatoInfo = {
  whatsapp: "5551999765243",
  instagram: "https://www.instagram.com/clinicavivianeseguro",
  instagramHandle: "@clinicavivianeseguro",
  facebook: "https://www.facebook.com/share/1HMeouh55i/",
  localizacao: "Porto Alegre e Região, Rio Grande do Sul",
  telefoneFormatado: "+55 (51) 99976-5243",
};

export const procedimentosOpcoes: string[] = [
  "Toxina Botulínica",
  "Preenchimento Facial com Ácido Hialurônico",
  "Bioestimuladores de Colágeno",
  "Rinomodelação",
  "SkinBoosters",
  "Luz Intensa Pulsada (IPL)",
  "Peelings Químicos",
  "Microagulhamento",
  "Consultoria de Skincare",
  "Não sei ainda, quero uma avaliação",
];