// Presentation-only layer. Does NOT change tour data (catalog.ts stays the source of truth).
// Leads are short rewrites using only facts already present in each tour's description.
import type { Tour } from "./catalog";

/** Tours with the strongest existing photos / landscape appeal, shown larger in the catalog. */
export const showcaseSlugs = [
  "circuito-lagoa-bonita",
  "circuito-lagoa-azul",
  "circuito-atins",
  "circuito-emendadas",
  "circuito-betania",
  "circuito-lagoa-da-america",
  "circuito-cabure-lancha",
  "cafe-da-manha-nos-lencois",
] as const;

const leads: Record<string, string> = {
  "circuito-lagoa-azul": "Balsa no Rio Preguiças, trilha pelo cerrado e uma caminhada curta entre 2 a 3 lagoas até a Lagoa Azul.",
  "circuito-lagoa-bonita": "Uma tarde nas dunas: trilha pelo cerrado e caminhada entre 2 a 3 lagoas até a Lagoa Bonita.",
  "lagoa-azul-e-lagoa-bonita": "O dia inteiro nos Lençóis: Lagoa Azul pela manhã e circuito Lagoa Bonita à tarde.",
  "circuito-atins": "Banho de praia em Atins, o encontro do Rio Preguiças com o Atlântico e a lagoa da época para fotos e descanso.",
  "circuito-cabure-lancha": "De lancha pelo Rio Preguiças: macacos-prego em Vassouras, vista do alto do Farol das Preguiças e redes na praia do Caburé.",
  "circuito-cabure-quadriciclo": "50 km de quadriciclo por estrada, vegetação e dunas até a praia do Caburé, com guia.",
  "combo-cabure-lancha-e-quadriciclo": "Ida de lancha pelo Rio Preguiças com paradas em Vassouras e no farol, volta de quadriciclo a partir do Caburé.",
  "cafe-da-manha-nos-lencois": "Madrugada nas dunas: você curte a lagoa enquanto preparamos a mesa do café da manhã.",
  "piquenique-nos-lencois": "Fim de tarde na lagoa com mesa, cadeiras e tábua de frios montadas aos pés das dunas.",
  "bate-volta-santo-amaro": "Lagoas de Santo Amaro em dois períodos do dia, terminando com o pôr do sol nos Lençóis.",
  "circuito-cardosa": "Trilha até o Rio Formigas e 1 hora de descida de boia até o restaurante.",
  "circuito-lagoa-da-andorinha": "Trilha por vegetação e dunas com paradas para a paisagem e banho em 2 lagoas.",
  "circuito-betania": "Lagoas pela manhã, almoço na vila de Betânia e retorno aos Lençóis até o pôr do sol.",
  "circuito-emendadas": "Caminhada até a duna mais alta, toda a Lagoa das Emendadas aos seus pés e o pôr do sol.",
  "circuito-lagoa-da-america": "De lancha pelo Lago da Jangada, um dos maiores lagos de água doce do Maranhão, até a Lagoa da América.",
};

export const leadFor = (t: Tour) => leads[t.slug] ?? t.description.split(". ")[0] + ".";
export const isShowcase = (t: Tour) => (showcaseSlugs as readonly string[]).includes(t.slug);
