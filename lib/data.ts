export type Categoria = "Todos" | "Extensão" | "Monitoria" | "Iniciação Científica" | "Pesquisa";

export interface Opportunity {
  id: number;
  titulo: string;
  categoria: Exclude<Categoria, "Todos">;
  professor: string;
  departamento: string;
  remuneracao: string;
  vagas: number;
  descricao: string;
  prazo: string;
  requisitos: string;
}

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 1,
    titulo: "Extensão em Visão Computacional Aplicada à Saúde",
    categoria: "Extensão",
    professor: "Prof. Dr. Carlos Mendes",
    departamento: "DCC - Ciência da Computação",
    remuneracao: "R$ 500,00/mês",
    vagas: 3,
    descricao:
      "Projeto de extensão voltado ao desenvolvimento de soluções de visão computacional para auxílio no diagnóstico médico em hospitais públicos parceiros da UFJF. O aluno participará de reuniões semanais e terá contato direto com profissionais da área de saúde.",
    prazo: "30/07/2025",
    requisitos: "Cursando a partir do 4º período de CC, EC ou SI. Conhecimentos em Python e bibliotecas de CV (OpenCV, TensorFlow) são diferenciais.",
  },
  {
    id: 2,
    titulo: "Monitoria de Estruturas de Dados",
    categoria: "Monitoria",
    professor: "Prof. Dr. André Lima",
    departamento: "DCC - Ciência da Computação",
    remuneracao: "R$ 400,00/mês",
    vagas: 2,
    descricao:
      "Auxílio ao professor titular nas aulas práticas e atendimento a alunos com dificuldades na disciplina de Estruturas de Dados. O monitor realizará plantões de dúvidas e corrigirá exercícios avaliativos.",
    prazo: "15/07/2025",
    requisitos: "Ter cursado e sido aprovado em Estruturas de Dados com nota ≥ 7,0. Disponibilidade de 12h semanais.",
  },
  {
    id: 3,
    titulo: "Iniciação Científica em Inteligência Artificial",
    categoria: "Iniciação Científica",
    professor: "Profa. Dra. Helena Costa",
    departamento: "DCC - Ciência da Computação",
    remuneracao: "R$ 700,00/mês (FAPEMIG)",
    vagas: 1,
    descricao:
      "Pesquisa sobre modelos de linguagem de grande escala (LLMs) e suas aplicações no contexto acadêmico. O aluno terá a oportunidade de publicar em conferências nacionais e internacionais.",
    prazo: "10/07/2025",
    requisitos: "IRA acima de 7,5. Conhecimentos em Python, ML/DL. Inglês intermediário para leitura de artigos.",
  },
  {
    id: 4,
    titulo: "Extensão: Letramento Digital para Comunidades",
    categoria: "Extensão",
    professor: "Prof. Dr. Ricardo Souza",
    departamento: "DCC - Ciência da Computação",
    remuneracao: "R$ 450,00/mês",
    vagas: 4,
    descricao:
      "Ação de extensão com foco em promover o letramento digital em comunidades carentes de Juiz de Fora. Os alunos elaborarão e ministrarão oficinas práticas sobre uso de computadores, internet e ferramentas de produtividade.",
    prazo: "25/07/2025",
    requisitos: "A partir do 2º período de qualquer curso de TI. Boa comunicação e disposição para trabalho em comunidade.",
  },
  {
    id: 5,
    titulo: "Pesquisa em Segurança da Informação e Criptografia",
    categoria: "Pesquisa",
    professor: "Prof. Dr. Fernando Alves",
    departamento: "DCC - Ciência da Computação",
    remuneracao: "Voluntário (Declaração emitida)",
    vagas: 2,
    descricao:
      "Grupo de pesquisa voltado ao estudo de protocolos criptográficos modernos, com foco em pós-quântica. Participação em reuniões quinzenais, leitura e fichamento de artigos científicos.",
    prazo: "20/07/2025",
    requisitos: "Cursando a partir do 5º período. Conhecimento em Álgebra Linear e Teoria dos Números é essencial.",
  },
  {
    id: 6,
    titulo: "Monitoria de Cálculo I",
    categoria: "Monitoria",
    professor: "Profa. Dra. Maria Fernanda",
    departamento: "ICE - Matemática",
    remuneracao: "R$ 400,00/mês",
    vagas: 3,
    descricao:
      "Apoio pedagógico aos alunos ingressantes na disciplina de Cálculo I, com realização de plantões de dúvidas presenciais e online, além de elaboração de listas de exercícios.",
    prazo: "18/07/2025",
    requisitos: "Ter obtido nota ≥ 8,0 em Cálculo I. Disponibilidade para atender presencialmente no campus.",
  },
];

export const FILTER_CATEGORIES: Categoria[] = [
  "Todos",
  "Extensão",
  "Monitoria",
  "Iniciação Científica",
  "Pesquisa",
];

export const CATEGORY_COLORS: Record<Exclude<Categoria, "Todos">, string> = {
  Extensão: "bg-green-100 text-green-800",
  Monitoria: "bg-blue-100 text-blue-800",
  "Iniciação Científica": "bg-purple-100 text-purple-800",
  Pesquisa: "bg-orange-100 text-orange-800",
};