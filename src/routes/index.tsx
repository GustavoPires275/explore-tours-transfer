import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Car, Compass, ShieldCheck, Sun } from "lucide-react";
import { PageShell } from "@/components/site/Layout";
import { BentoTourCard } from "@/components/site/BentoTourCard";
import { Destinations } from "@/components/site/Destinations";
import { btn, Reveal, WhatsAppIcon } from "@/components/site/kit";
import { company, tips, tours, transfers, whatsappLink } from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Explore Tours Transfer — Passeios nos Lençóis Maranhenses" },
      { name: "description", content: "Circuitos nas lagoas, café da manhã nas dunas, Atins, Caburé e traslados saindo de Barreirinhas e Santo Amaro. Reserve pelo WhatsApp." },
      { property: "og:title", content: "Explore Tours Transfer — Lençóis Maranhenses" },
      { property: "og:description", content: "Passeios e traslados nos Lençóis Maranhenses. Há 22 anos realizando sonhos." },
    ],
  }),
  component: Home,
});

const FEATURE_ORDER: { slug: string; variant: "feature" | "wide" | "standard" }[] = [
  { slug: "cafe-da-manha-nos-lencois", variant: "feature" },
  { slug: "circuito-lagoa-azul", variant: "standard" },
  { slug: "circuito-lagoa-bonita", variant: "standard" },
  { slug: "piquenique-nos-lencois", variant: "standard" },
  { slug: "lagoa-azul-e-lagoa-bonita", variant: "standard" },
  { slug: "circuito-atins", variant: "wide" },
  { slug: "circuito-emendadas", variant: "standard" },
  { slug: "circuito-lagoa-da-america", variant: "standard" },
  { slug: "circuito-betania", variant: "standard" },
  { slug: "bate-volta-santo-amaro", variant: "standard" },
  { slug: "circuito-cardosa", variant: "standard" },
  { slug: "circuito-lagoa-da-andorinha", variant: "standard" },
  { slug: "circuito-cabure-lancha", variant: "wide" },
  { slug: "circuito-cabure-quadriciclo", variant: "standard" },
  { slug: "combo-cabure-lancha-e-quadriciclo", variant: "standard" },
];

const featured = FEATURE_ORDER.flatMap(({ slug, variant }) => {
  const tour = tours.find((t) => t.slug === slug);
  return tour ? [{ tour, variant }] : [];
});

function Home() {
  return (
    <PageShell overlay>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-deep text-deep-foreground">
        <picture className="hero-parallax absolute inset-0 -z-10">
          <img
            src="/images/hero-por-do-sol.webp"
            alt="Pôr do sol sobre as dunas e lagoas dos Lençóis Maranhenses"
            fetchPriority="high"
            className="animate-slow-zoom h-full w-full object-cover object-[50%_40%]"
          />
        </picture>
        <div className="scrim absolute inset-0 -z-10" />
        <div className="hero-text-parallax mx-auto w-full max-w-7xl px-5 pb-14 pt-32 md:px-8 md:pb-20">
          <p className="eyebrow animate-reveal text-sand">Lençóis Maranhenses · Barreirinhas e Santo Amaro</p>
          <h1 className="animate-reveal mt-5 max-w-4xl text-5xl leading-[0.95] [animation-delay:120ms] sm:text-6xl md:text-8xl">
            Dunas, lagoas e o pôr do sol <em className="text-sand">mais bonito</em> do Maranhão.
          </h1>
          <p className="animate-reveal mt-6 max-w-xl text-base text-deep-foreground/85 [animation-delay:240ms] md:text-lg">
            {tours.length} passeios e traslados com guias da região. Escolha o seu roteiro e reserve direto pelo WhatsApp.
          </p>
          <div className="animate-reveal mt-9 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row">
            <Link to="/passeios" className={btn("sunset", "min-h-14 px-8 text-base")}>
              Ver passeios <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink("Olá! Gostaria de ajuda para escolher um passeio nos Lençóis Maranhenses.")}
              target="_blank"
              rel="noopener noreferrer"
              className={btn("ghost-light", "min-h-14 px-8 text-base")}
            >
              <WhatsAppIcon /> Consultar disponibilidade
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-8">
          {[
            { i: Sun, t: "22 anos", d: "realizando sonhos" },
            { i: Compass, t: `${tours.length} passeios`, d: "lagoas, rio, mar e aventura" },
            { i: Car, t: `${transfers.length} rotas`, d: "de traslado privativo" },
            { i: ShieldCheck, t: "Guia da região", d: "em todos os circuitos" },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-display text-lg leading-tight">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured — bento com hierarquia editorial */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-primary">Destaques</p>
            <h2 className="section-title mt-4 text-5xl leading-[0.9] tracking-tight md:text-7xl">
              Os roteiros que
              <br />
              <em>mais encantam</em>
            </h2>
          </div>
          <Link to="/passeios" className="group inline-flex items-center gap-3 font-semibold text-primary">
            <span className="border-b border-transparent pb-1 transition-colors group-hover:border-primary">
              Ver todos com filtros
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/25 transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[16rem] md:grid-flow-dense md:grid-cols-4">
          {featured.map(({ tour, variant }, i) => (
            <Reveal
              key={tour.slug}
              delay={(i % 4) * 80}
              className={variant === "feature" ? "sm:col-span-2 md:col-span-2 md:row-span-2" : variant === "wide" ? "sm:col-span-2 md:col-span-2" : ""}
            >
              <BentoTourCard tour={tour} variant={variant} />
            </Reveal>
          ))}
        </div>
      </section>

      <Destinations />

      {/* Origins */}
      <section className="bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <Reveal>
            <p className="eyebrow text-sand">Duas portas de entrada</p>
            <h2 className="section-title mt-3 text-4xl md:text-5xl">De onde você parte?</h2>
            <p className="mt-5 max-w-md text-deep-foreground/75">
              Saímos de Barreirinhas, rumo à Lagoa Azul, Lagoa Bonita, Atins e Caburé, e de Santo Amaro, porta de entrada
              para Andorinha, Betânia, Emendadas e Lagoa da América.
            </p>
          </Reveal>
          <div className="grid gap-4">
            {(["Barreirinhas", "Santo Amaro"] as const).map((o, i) => (
              <Reveal key={o} delay={i * 100}>
                <Link
                  to="/passeios"
                  search={{ origem: o }}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-deep-foreground/15 p-6 transition hover:border-sand hover:bg-deep-foreground/5"
                >
                  <div>
                    <p className="font-display text-3xl">{o}</p>
                    <p className="mt-1 text-sm text-deep-foreground/70">
                      {tours.filter((t) => t.origin === o).length} passeios partindo daqui
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <Link
                to="/traslados"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-sand p-6 text-deep transition hover:brightness-105"
              >
                <div>
                  <p className="font-display text-3xl">Traslados</p>
                  <p className="mt-1 text-sm opacity-75">São Luís, Jericoacoara, Parnaíba, Tutóia e mais</p>
                </div>
                <ArrowRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.3fr] md:px-8 md:py-28">
        <Reveal>
          <img src="/images/tours/p5_4.webp" alt="Pôr do sol nas dunas dos Lençóis" loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft" />
        </Reveal>
        <Reveal delay={100} className="self-center">
          <p className="eyebrow text-primary">Antes de ir</p>
          <h2 className="section-title mt-3 text-4xl md:text-5xl">Dicas importantes</h2>
          <ol className="mt-8 space-y-5">
            {tips.map((t, i) => (
              <li key={i} className="flex gap-4 border-b pb-5 last:border-0">
                <span className="font-display text-2xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                <p className="pt-1 text-muted-foreground">{t}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 md:px-8">
        <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground md:py-20">
          <h2 className="section-title mx-auto max-w-2xl text-4xl md:text-5xl">Será um prazer atendê-lo.</h2>
          <p className="mx-auto mt-4 max-w-md text-primary-foreground/80">
            Fale com a equipe {company.short} e monte seu roteiro pelos Lençóis.
          </p>
          <a
            href={whatsappLink("Olá! Gostaria de montar meu roteiro nos Lençóis Maranhenses.")}
            target="_blank"
            rel="noopener noreferrer"
            className={btn("whatsapp", "mt-8 min-h-14 px-8 text-base")}
          >
            <WhatsAppIcon /> Falar no WhatsApp
          </a>
        </Reveal>
      </section>
    </PageShell>
  );
}
