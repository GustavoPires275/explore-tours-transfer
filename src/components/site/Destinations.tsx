import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/kit";

type Place = { name: string; kind: "Passeio" | "Traslado"; img: string; to: string; slug?: string };

const i = (n: string) => `/images/tours/${n}.webp`;

const places: Place[] = [
  { name: "Lagoa Azul", kind: "Passeio", img: i("p4_2"), to: "/passeios/$slug", slug: "circuito-lagoa-azul" },
  { name: "Lagoa Bonita", kind: "Passeio", img: i("p5_4"), to: "/passeios/$slug", slug: "circuito-lagoa-bonita" },
  { name: "Atins", kind: "Passeio", img: i("p7_2"), to: "/passeios/$slug", slug: "circuito-atins" },
  { name: "Caburé", kind: "Passeio", img: i("p9_2"), to: "/passeios/$slug", slug: "circuito-cabure-lancha" },
  { name: "Santo Amaro", kind: "Passeio", img: i("p8_3"), to: "/passeios/$slug", slug: "bate-volta-santo-amaro" },
  { name: "Betânia", kind: "Passeio", img: i("p14_1"), to: "/passeios/$slug", slug: "circuito-betania" },
  { name: "Lagoa da América", kind: "Passeio", img: i("p16_2"), to: "/passeios/$slug", slug: "circuito-lagoa-da-america" },
  { name: "Lagoas Emendadas", kind: "Passeio", img: i("p15_1"), to: "/passeios/$slug", slug: "circuito-emendadas" },
  { name: "Lagoa da Andorinha", kind: "Passeio", img: i("p13_1"), to: "/passeios/$slug", slug: "circuito-lagoa-da-andorinha" },
  { name: "Cardosa", kind: "Passeio", img: i("p12_1"), to: "/passeios/$slug", slug: "circuito-cardosa" },
  { name: "Café nos Lençóis", kind: "Passeio", img: i("p2_2"), to: "/passeios/$slug", slug: "cafe-da-manha-nos-lencois" },
  { name: "Tutóia", kind: "Traslado", img: i("p10_1"), to: "/traslados" },
  { name: "Parnaíba", kind: "Traslado", img: i("p6_1"), to: "/traslados" },
  { name: "Jericoacoara", kind: "Traslado", img: i("p11_2"), to: "/traslados" },
  { name: "Barra Grande", kind: "Traslado", img: i("p3_4"), to: "/traslados" },
];

export function Destinations() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <p className="eyebrow">Destinos e rotas</p>
        <h2 className="section-title mt-3 font-display text-4xl leading-tight md:text-6xl">
          Para onde <em>levamos você</em>
        </h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {places.map((p, idx) => (
          <Reveal key={p.name} delay={(idx % 5) * 60}>
            <Link
              to={p.to as "/traslados"}
              params={(p.slug ? { slug: p.slug } : {}) as never}
              className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-muted"
            >
              <img src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="scrim absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-deep-foreground">
                <span className="text-[11px] uppercase tracking-widest opacity-80">{p.kind}</span>
                <p className="font-display text-lg leading-tight md:text-xl">{p.name}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
