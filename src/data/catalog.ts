// Source of truth: "Portfólio 2025 — Passeios e Traslado".
// To add or change a tour, edit this file only; pages read from here.

export const company = {
  name: "Explore Tours Transfer",
  short: "Explore",
  phones: ["+55 98 99137-9433", "+55 98 99136-6941", "+55 98 99992-8810"],
  whatsapp: "5598991379433",
  email: "receptivolotusturismo@hotmail.com",
  site: "www.lotusturismo.com.br",
  instagram: "lotusturismo_",
  tagline: "Há 22 anos realizando sonhos",
};

export type Category = "experiencias" | "lagoas" | "rio-mar" | "aventura";
export type Origin = "Barreirinhas" | "Santo Amaro";

export const categoryLabels: Record<Category, string> = {
  experiencias: "Experiências exclusivas",
  lagoas: "Circuitos nas lagoas",
  "rio-mar": "Rio e mar",
  aventura: "Aventura",
};

export type Price = { value: number; label: string };

export type Tour = {
  slug: string;
  name: string;
  origin: Origin;
  category: Category;
  schedules: { departure: string; return: string }[];
  description: string;
  includes: string[];
  prices: Price[];
  notes?: string[];
  images: string[];
};

const img = (n: string) => `/images/tours/${n}.webp`;

export const tours: Tour[] = [
  {
    slug: "cafe-da-manha-nos-lencois",
    name: "Café da manhã nos Lençóis",
    origin: "Barreirinhas",
    category: "experiencias",
    schedules: [{ departure: "3:30", return: "7:00" }],
    description:
      "Saída de Barreirinhas em jardineira 4×4 que nos conduzirá até o Parque Nacional dos Lençóis Maranhenses. Primeiro atravessamos o Rio Preguiças em uma balsa, logo depois pegamos uma trilha de areia de aproximadamente 30 minutos cortando a vegetação do cerrado até a chegada nas dunas. Aos pés das dunas, descemos do veículo e iniciamos uma caminhada de aproximadamente 5 minutos, onde vocês curtem a lagoa enquanto preparamos toda a estrutura do café da manhã.",
    includes: ["Guia da região", "Mesa e cadeira", "Café da manhã", "Visita às lagoas"],
    prices: [{ value: 1500, label: "Privativo até 4 pessoas" }],
    notes: ["Adicional de R$ 50,00 por pessoa."],
    images: [img("p2_2"), img("p2_1")],
  },
  {
    slug: "piquenique-nos-lencois",
    name: "Piquenique nos Lençóis",
    origin: "Barreirinhas",
    category: "experiencias",
    schedules: [{ departure: "15:30", return: "19:00" }],
    description:
      "Saída de Barreirinhas em jardineira 4×4 que nos conduzirá até o Parque Nacional dos Lençóis Maranhenses. Primeiro atravessamos o Rio Preguiças em uma balsa, logo depois pegamos uma trilha de areia de aproximadamente 50 minutos cortando a vegetação do cerrado até a chegada nas dunas. Aos pés das dunas, descemos do veículo e iniciamos uma caminhada de aproximadamente 5 minutos, onde vocês curtem a lagoa enquanto preparamos toda a estrutura para o piquenique.",
    includes: ["Guia da região", "Mesa e cadeira", "Tábua de frios e outros", "Visita às lagoas"],
    prices: [{ value: 1400, label: "Privativo até 4 pessoas" }],
    notes: ["Adicional de R$ 50,00 por pessoa."],
    images: [img("p3_4"), img("p3_3")],
  },
  {
    slug: "circuito-lagoa-azul",
    name: "Circuito Lagoa Azul",
    origin: "Barreirinhas",
    category: "lagoas",
    schedules: [{ departure: "8:30", return: "12:00" }],
    description:
      "Saída de Barreirinhas em jardineira 4×4 que nos conduzirá até o Parque Nacional dos Lençóis Maranhenses. Primeiro atravessamos o Rio Preguiças em uma balsa, logo depois pegamos uma trilha de areia de aproximadamente 30 minutos cortando a vegetação do cerrado até a chegada nas dunas. Aos pés das dunas, descemos do veículo e iniciamos uma caminhada de aproximadamente 5 a 10 minutos até a Lagoa Azul; durante a caminhada você conhece entre 2 e 3 lagoas.",
    includes: ["Guia da região", "Visita às lagoas"],
    prices: [
      { value: 950, label: "Privativo até 10 pessoas" },
      { value: 130, label: "Por pessoa" },
    ],
    images: [img("p4_2"), img("p4_3")],
  },
  {
    slug: "circuito-lagoa-bonita",
    name: "Circuito Lagoa Bonita",
    origin: "Barreirinhas",
    category: "lagoas",
    schedules: [{ departure: "14:00", return: "18:00" }],
    description:
      "Saída de Barreirinhas em jardineira 4×4 que nos conduzirá até o Parque Nacional dos Lençóis Maranhenses. Primeiro atravessamos o Rio Preguiças em uma balsa, logo depois pegamos uma trilha de areia de aproximadamente 50 minutos cortando a vegetação do cerrado até a chegada nas dunas. Aos pés das dunas, descemos do veículo e iniciamos uma caminhada de aproximadamente 5 a 10 minutos até a Lagoa Bonita; durante a caminhada você conhece entre 2 e 3 lagoas.",
    includes: ["Guia da região", "Visita às lagoas"],
    prices: [
      { value: 950, label: "Privativo até 10 pessoas" },
      { value: 130, label: "Por pessoa" },
    ],
    images: [img("p5_4"), img("p5_3"), img("p5_1"), img("p5_2")],
  },
  {
    slug: "lagoa-azul-e-lagoa-bonita",
    name: "2 Lagoas: Azul e Bonita",
    origin: "Barreirinhas",
    category: "lagoas",
    schedules: [{ departure: "8:30", return: "18:00" }],
    description:
      "Saída de Barreirinhas em jardineira 4×4 que nos conduzirá até o Parque Nacional dos Lençóis Maranhenses. Primeiro atravessamos o Rio Preguiças em uma balsa, logo depois pegamos uma trilha de areia de aproximadamente 30 minutos cortando a vegetação do cerrado até a chegada nas dunas. Aos pés das dunas, descemos do veículo e iniciamos uma caminhada de aproximadamente 5 a 10 minutos até a Lagoa Azul, conhecendo entre 2 e 3 lagoas. Logo após o passeio vamos para o restaurante da Dona Graça ou Dona Regina (almoço não incluso) e, após o almoço, fazemos o circuito Lagoa Bonita, conhecendo entre 2 e 3 lagoas.",
    includes: ["Guia da região", "Visita às lagoas"],
    prices: [{ value: 1500, label: "Privativo até 10 pessoas" }],
    notes: ["Almoço não incluso."],
    images: [img("p6_1"), img("p6_2")],
  },
  {
    slug: "circuito-atins",
    name: "Circuito Atins",
    origin: "Barreirinhas",
    category: "rio-mar",
    schedules: [{ departure: "8:30", return: "16:00" }],
    description:
      "Saída de Barreirinhas em jardineira 4×4 que nos conduzirá até o Parque Nacional dos Lençóis Maranhenses. Primeiro atravessamos o Rio Preguiças em uma balsa, logo depois pegamos uma trilha de areia de aproximadamente 1h30 cortando a vegetação do cerrado até a chegada em Atins, onde teremos a primeira parada para banho na praia e para apreciar o encontro do Rio Preguiças com o Oceano Atlântico. Seguimos até o Canto do Atins, local dos famosos restaurantes do Sr. Antônio (almoço não incluso). Após o almoço, o carro nos levará para curtir a lagoa da época para banho, fotos e descanso. Retorno a Barreirinhas.",
    includes: ["Guia da região", "Visita às lagoas"],
    prices: [
      { value: 1500, label: "Privativo até 10 pessoas" },
      { value: 180, label: "Por pessoa" },
    ],
    notes: ["Almoço não incluso."],
    images: [img("p7_2"), img("p7_3"), img("p7_4"), img("p7_1")],
  },
  {
    slug: "bate-volta-santo-amaro",
    name: "Bate-volta Santo Amaro (Passeio Betânia)",
    origin: "Barreirinhas",
    category: "lagoas",
    schedules: [{ departure: "8:15", return: "19:00" }],
    description:
      "Saída de Barreirinhas em van até Santo Amaro. Chegando lá, embarcamos na jardineira 4×4 que nos conduzirá até o Parque Nacional dos Lençóis Maranhenses, por uma trilha de areia de aproximadamente 5 minutos cortando a vegetação do cerrado até a chegada nas dunas, onde conhecemos algumas lagoas. Às 12:30 retornamos para Santo Amaro para o almoço (não incluso) e, após o almoço, voltamos aos Lençóis, onde conhecemos mais algumas lagoas e assistimos ao pôr do sol.",
    includes: ["Guia da região", "Visita às lagoas"],
    prices: [
      { value: 1600, label: "Até 4 pessoas" },
      { value: 300, label: "Por pessoa" },
    ],
    notes: ["Adicional de R$ 250,00 por pessoa acima de 4 no valor privativo.", "Almoço não incluso."],
    images: [img("p8_3"), img("p8_2")],
  },
  {
    slug: "circuito-cabure-lancha",
    name: "Circuito Caburé de lancha",
    origin: "Barreirinhas",
    category: "rio-mar",
    schedules: [{ departure: "8:30", return: "15:00" }],
    description:
      "Saída de Barreirinhas descendo o Rio Preguiças. Após 40 minutos de navegação chegamos à comunidade de Vassouras (Pequenos Lençóis), onde vivem os macacos-prego. Seguimos para a segunda parada, no povoado de Mandacaru, onde está o Farol das Preguiças. Subimos o farol, de onde se tem uma visão privilegiada das dunas, do rio, da sua foz, do oceano e da vegetação típica. Depois partimos para a terceira parada, na praia do Caburé, com parada para almoço (não incluso). Após descanso nas redes, retornamos para Barreirinhas.",
    includes: ["Lancha voadeira", "Parada na praia"],
    prices: [
      { value: 1100, label: "Privativo até 10 pessoas" },
      { value: 130, label: "Por pessoa" },
    ],
    notes: ["Almoço não incluso."],
    images: [img("p9_2"), img("p9_1")],
  },
  {
    slug: "circuito-cabure-quadriciclo",
    name: "Circuito Caburé de quadriciclo",
    origin: "Barreirinhas",
    category: "aventura",
    schedules: [{ departure: "8:30", return: "15:00" }],
    description:
      "Saída de Barreirinhas em quadriciclo, acompanhado por um guia: um trecho de estrada, trilha no meio da vegetação e trilha pelas dunas. O percurso tem 50 km e dura aproximadamente 2h30 até a chegada à praia do Caburé, com pausa para o almoço (não incluso). A pilotagem é muito simples e o guia dá as instruções antes de começar. Após o descanso, retorno às 14:30, com previsão de chegada em Barreirinhas às 17:00.",
    includes: ["Quadriciclo", "Guia da região", "Pequenos Lençóis"],
    prices: [{ value: 550, label: "Até 2 pessoas" }],
    notes: ["Almoço não incluso.", "Saída de Caburé às 14:30, chegada prevista em Barreirinhas às 17:00."],
    images: [img("p10_1"), img("p10_2")],
  },
  {
    slug: "combo-cabure-lancha-e-quadriciclo",
    name: "Combo Caburé: lancha e quadriciclo",
    origin: "Barreirinhas",
    category: "aventura",
    schedules: [{ departure: "8:30", return: "15:00" }],
    description:
      "Saída de Barreirinhas descendo o Rio Preguiças. Após 40 minutos de navegação chegamos à comunidade de Vassouras (Pequenos Lençóis), onde vivem os macacos-prego. Seguimos para o povoado de Mandacaru, onde está o Farol das Preguiças, com vista para as dunas, o rio, a foz, o oceano e a vegetação típica. Depois seguimos para a praia do Caburé, com parada para almoço (não incluso). Após descanso nas redes, às 14:30 embarcamos nos quadriciclos e retornamos para Barreirinhas, com previsão de chegada às 17:00.",
    includes: ["Lancha voadeira", "Parada na praia", "Quadriciclo"],
    prices: [{ value: 750, label: "Até 2 pessoas" }],
    notes: ["Almoço não incluso.", "Retorno de quadriciclo às 14:30, chegada prevista às 17:00."],
    images: [img("p11_2"), img("p11_1")],
  },
  {
    slug: "circuito-cardosa",
    name: "Circuito Cardosa",
    origin: "Barreirinhas",
    category: "aventura",
    schedules: [{ departure: "8:30", return: "15:00" }],
    description:
      "Saída de Barreirinhas em jardineira 4×4 até o Povoado Cardosa. Primeiro pegamos uma trilha de 1 hora até um ponto acima do Rio Formigas, onde começamos a descida em uma boia (câmara de caminhão): 1 hora de descida até o restaurante, onde o carro já nos espera para retornar a Barreirinhas.",
    includes: [],
    prices: [
      { value: 900, label: "Privativo até 10 pessoas" },
      { value: 110, label: "Por pessoa" },
    ],
    images: [img("p12_1"), img("p12_2")],
  },
  {
    slug: "circuito-lagoa-da-andorinha",
    name: "Circuito Lagoa da Andorinha",
    origin: "Santo Amaro",
    category: "lagoas",
    schedules: [
      { departure: "9:00", return: "12:00" },
      { departure: "15:00", return: "18:00" },
    ],
    description:
      "Saída de Santo Amaro em jardineira 4×4 que nos conduzirá até os Lençóis Maranhenses. Primeiro pegamos uma trilha por vegetação e dunas de aproximadamente 30 minutos, com algumas paradas para observar a paisagem deslumbrante, conhecendo 2 lagoas, e logo após retornamos para Santo Amaro.",
    includes: ["Guia da região", "Jardineira 4×4", "Banho nas lagoas"],
    prices: [
      { value: 850, label: "Privativo até 10 pessoas" },
      { value: 120, label: "Por pessoa" },
    ],
    images: [img("p13_1"), img("p13_2")],
  },
  {
    slug: "circuito-betania",
    name: "Circuito Betânia",
    origin: "Santo Amaro",
    category: "lagoas",
    schedules: [{ departure: "9:30", return: "18:00" }],
    description:
      "Saída de Santo Amaro em jardineira 4×4 que nos conduzirá até os Lençóis Maranhenses. Primeiro pegamos uma trilha por vegetação e dunas de aproximadamente 30 minutos, com algumas paradas para observar a paisagem, conhecendo 2 lagoas. Às 12:00 seguimos para a vila de Betânia, com parada para almoço (não incluso), e às 14:30 retornamos aos Lençóis Maranhenses, onde ficamos até o pôr do sol.",
    includes: ["Guia da região", "Jardineira 4×4", "Banho nas lagoas"],
    prices: [
      { value: 1300, label: "Privativo até 10 pessoas" },
      { value: 200, label: "Por pessoa" },
    ],
    notes: [
      "Percurso de barco dos Lençóis até a vila de Betânia: R$ 10,00 por pessoa.",
      "Almoço não incluso.",
    ],
    images: [img("p14_1"), img("p14_2")],
  },
  {
    slug: "circuito-emendadas",
    name: "Circuito Emendadas",
    origin: "Santo Amaro",
    category: "lagoas",
    schedules: [{ departure: "14:00", return: "19:00" }],
    description:
      "Saída de Santo Amaro em jardineira 4×4 que nos conduzirá até os Lençóis Maranhenses. Primeiro pegamos uma trilha por vegetação e dunas de aproximadamente 40 minutos até o estacionamento e lá começamos uma caminhada de aproximadamente 1 hora até a duna mais alta, de onde observamos paisagens deslumbrantes, conhecendo toda a Lagoa das Emendadas. Após o pôr do sol, retornamos até a jardineira em uma caminhada de 1 hora.",
    includes: ["Guia da região", "Jardineira 4×4", "Banho nas lagoas"],
    prices: [
      { value: 1300, label: "Privativo até 10 pessoas" },
      { value: 200, label: "Por pessoa" },
    ],
    images: [img("p15_1"), img("p15_2")],
  },
  {
    slug: "circuito-lagoa-da-america",
    name: "Circuito Lagoa da América",
    origin: "Santo Amaro",
    category: "rio-mar",
    schedules: [
      { departure: "9:00", return: "12:00" },
      { departure: "15:00", return: "18:00" },
    ],
    description:
      "Saída de Santo Amaro em lancha voadeira, num percurso diferenciado: passamos pelo Lago da Jangada, um dos maiores lagos de água doce do Maranhão. São 20 minutos até as primeiras dunas, conhecendo a Lagoa da América e outras da região, e logo após retornamos para Santo Amaro.",
    includes: ["Guia da região", "Lancha voadeira", "Banho nas lagoas"],
    prices: [
      { value: 700, label: "Privativo até 6 pessoas" },
      { value: 120, label: "Por pessoa" },
    ],
    images: [img("p16_2"), img("p16_1")],
  },
];

export type TransferOption = { vehicle: string; price: number; detail: string };
export type TransferRoute = { from: string; to: string; options: TransferOption[] };

const std = (a: number, b: number, c: number): TransferOption[] => [
  { vehicle: "Táxi privativo até 4 pessoas (Logan, Prisma e outros)", price: a, detail: "Qualquer horário" },
  { vehicle: "Táxi privativo até 6 pessoas (Spin, Doblò)", price: b, detail: "Qualquer horário" },
  { vehicle: "Caminhonete privativa (até 4 pessoas)", price: c, detail: "Qualquer horário" },
];

export const transfers: TransferRoute[] = [
  {
    from: "São Luís",
    to: "Barreirinhas",
    options: [
      ...std(600, 800, 1200),
      { vehicle: "Táxi compartilhado (até 4 pessoas)", price: 150, detail: "Por pessoa · entre 8:00 e 16:00" },
      {
        vehicle: "Van compartilhada",
        price: 130,
        detail: "Por pessoa · São Luís → Barreirinhas 7:00 · Barreirinhas → São Luís 16:45",
      },
    ],
  },
  { from: "Barreirinhas", to: "Santo Amaro", options: std(450, 550, 700) },
  { from: "São Luís", to: "Santo Amaro", options: std(650, 850, 1200) },
  { from: "Barreirinhas", to: "Tutóia", options: std(450, 550, 700) },
  { from: "Barreirinhas", to: "Parnaíba", options: std(700, 850, 1000) },
  { from: "Barreirinhas", to: "Jericoacoara", options: std(1500, 1700, 1800) },
  { from: "Barreirinhas", to: "Barra Grande", options: std(850, 1000, 1200) },
  { from: "Santo Amaro", to: "Tutóia", options: std(800, 900, 1200) },
];

export const tips = [
  "Os serviços de transporte e condução de visitantes devem ser realizados por veículos, condutores de veículos e condutores de visitantes credenciados.",
  "É proibido o trânsito de veículo motorizado sobre o campo de dunas livre.",
  "É proibido o consumo de bebidas alcoólicas e drogas ilícitas no Parque Nacional.",
  "Programe seu passeio com antecedência e curta o melhor dos Lençóis.",
  "Leve protetor solar, chapéu ou boné, roupa de banho e chinelo de dedo.",
];

export const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

export const fromPrice = (t: Tour) => Math.min(...t.prices.map((p) => p.value));

export function whatsappLink(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const tourMessage = (t: Tour) =>
  `Olá! Tenho interesse no passeio ${t.name} (saída de ${t.origin}). Gostaria de saber a disponibilidade e como posso realizar a reserva.`;

export const transferMessage = (r: TransferRoute, o?: TransferOption) =>
  `Olá! Gostaria de reservar o traslado ${r.from} → ${r.to}${o ? ` (${o.vehicle})` : ""}. Poderia me informar a disponibilidade?`;

export function filterTours(list: Tour[], opts: { category?: Category | "all"; origin?: Origin | "all"; query?: string | undefined }) {
  const q = (opts.query ?? "").trim().toLocaleLowerCase("pt-BR").normalize("NFD").replace(/\p{Diacritic}/gu, "");
  return list.filter((t) => {
    if (opts.category && opts.category !== "all" && t.category !== opts.category) return false;
    if (opts.origin && opts.origin !== "all" && t.origin !== opts.origin) return false;
    if (!q) return true;
    const hay = `${t.name} ${t.description} ${t.origin} ${t.includes.join(" ")}`
      .toLocaleLowerCase("pt-BR").normalize("NFD").replace(/\p{Diacritic}/gu, "");
    return hay.includes(q);
  });
}
