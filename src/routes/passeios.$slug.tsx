import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Clock, Info, MapPin } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/site/Layout";
import { TourCard } from "@/components/site/TourCard";
import { btn, WhatsAppIcon } from "@/components/site/kit";
import { categoryLabels, formatBRL, fromPrice, tourMessage, tours, whatsappLink } from "@/data/catalog";
import { leadFor } from "@/data/showcase";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/passeios/$slug")({
  loader: ({ params }) => {
    const tour = tours.find((t) => t.slug === params.slug);
    if (!tour) throw notFound();
    return { tour };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Passeio não encontrado — Explore Tours Transfer" }, { name: "robots", content: "noindex" }] };
    const t = loaderData.tour;
    const title = `${t.name} — saída de ${t.origin} | Explore Tours Transfer`;
    const desc = `${t.description.slice(0, 150)}…`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: TourNotFound,
  component: TourPage,
});

function TourNotFound() {
  return (
    <PageShell>
      <div className="mx-auto max-w-xl px-5 py-32 text-center">
        <h1 className="text-4xl">Passeio não encontrado</h1>
        <p className="mt-3 text-muted-foreground">Esse passeio não existe ou foi removido do catálogo.</p>
        <Link to="/passeios" className={btn("primary", "mt-8")}>Ver todos os passeios</Link>
      </div>
    </PageShell>
  );
}

function TourPage() {
  const { tour } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const wa = whatsappLink(tourMessage(tour));
  const related = tours.filter((t) => t.slug !== tour.slug && (t.category === tour.category || t.origin === tour.origin)).slice(0, 3);
  const gallery = tour.images;

  return (
    <PageShell hideFloating>
      {/* 1-2. Name over the main photo */}
      <section className="relative isolate overflow-hidden bg-deep text-deep-foreground">
        <img
          src={gallery[0]}
          alt={`${tour.name} — foto principal`}
          fetchPriority="high"
          className="animate-slow-zoom absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="scrim absolute inset-0 -z-10" />
        <div className="mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-between px-5 pb-10 pt-6 md:min-h-[78svh] md:px-8 md:pb-14 md:pt-10">
          <Link to="/passeios" className="inline-flex w-fit items-center gap-2 rounded-full bg-deep/40 px-4 py-2 text-sm font-medium backdrop-blur-md hover:bg-deep/60">
            <ArrowLeft className="h-4 w-4" /> Todos os passeios
          </Link>
          <div className="animate-reveal">
            <p className="eyebrow text-sand">{categoryLabels[tour.category]} · saída de {tour.origin}</p>
            <h1 className="mt-3 max-w-4xl text-5xl leading-[0.95] md:text-7xl">{tour.name}</h1>
            {/* 3. Short lead */}
            <p className="mt-5 max-w-2xl text-base text-deep-foreground/90 md:text-xl">{leadFor(tour)}</p>
          </div>
        </div>
      </section>

      <article className="mx-auto grid max-w-7xl gap-10 px-5 pb-32 pt-10 md:px-8 lg:grid-cols-[1fr_24rem] lg:gap-16 lg:pb-24">
        <div className="min-w-0">
          {/* 7. Schedule */}
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm"><MapPin className="h-4 w-4 text-primary" /> Saída de {tour.origin}</span>
            {tour.schedules.map((s) => (
              <span key={s.departure} className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
                <Clock className="h-4 w-4 text-primary" /> Saída {s.departure} · retorno {s.return}
              </span>
            ))}
          </div>

          {/* 8. Includes */}
          {tour.includes.length > 0 && (
            <>
              <h2 className="mt-10 text-2xl">O que está incluso</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {tour.includes.map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-primary"><Check className="h-4 w-4" /></span>
                    {i}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* 9. Notes */}
          {tour.notes && (
            <div className="mt-10 rounded-2xl bg-secondary p-5">
              <p className="flex items-center gap-2 font-semibold"><Info className="h-4 w-4 text-primary" /> Observações</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {tour.notes.map((n) => <li key={n}>• {n}</li>)}
              </ul>
            </div>
          )}

          {/* 10. Gallery */}
          {gallery.length > 1 && (
            <section className="mt-12" aria-label="Galeria de fotos">
              <h2 className="text-2xl">Galeria</h2>
              <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-2xl bg-muted sm:aspect-[16/10]">
                {gallery.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${tour.name} — foto ${i + 1}`}
                    loading="lazy"
                    className={cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-500", i === active ? "opacity-100" : "opacity-0")}
                  />
                ))}
                <span className="absolute bottom-3 right-3 rounded-full bg-deep/60 px-3 py-1 text-xs text-deep-foreground backdrop-blur-md">
                  {active + 1} / {gallery.length}
                </span>
              </div>
              <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Ver foto ${i + 1}`}
                    aria-current={i === active}
                    className={cn("h-20 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition", i === active ? "border-primary" : "border-transparent opacity-70 hover:opacity-100")}
                  >
                    <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </section>
          )}

          <details className="group mt-12 rounded-2xl border p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-2xl">
              Roteiro completo
              <span className="text-base text-primary transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 leading-relaxed text-muted-foreground">{tour.description}</p>
          </details>
        </div>

        {/* 4-6 + 11. Price, condition, capacity, CTA */}
        <aside className="order-first lg:order-none lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <p className="eyebrow text-muted-foreground">Valores</p>
            <ul className="mt-4 divide-y">
              {tour.prices.map((p) => (
                <li key={p.label} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="text-muted-foreground">{p.label}</span>
                  <span className="font-display text-2xl">{formatBRL(p.value)}</span>
                </li>
              ))}
            </ul>
            <a href={wa} target="_blank" rel="noopener noreferrer" className={btn("whatsapp", "mt-5 hidden w-full min-h-14 text-base lg:flex")}>
              <WhatsAppIcon /> Reservar pelo WhatsApp
            </a>
          </div>
        </aside>
      </article>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
          <h2 className="text-3xl">Você também pode gostar</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => <TourCard key={t.slug} tour={t} />)}
          </div>
        </section>
      )}

      {/* Mobile sticky booking bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 px-5 py-3 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-4">
          <div className="leading-tight">
            <p className="text-xs text-muted-foreground">a partir de</p>
            <p className="font-display text-xl">{formatBRL(fromPrice(tour))}</p>
          </div>
          <a href={wa} target="_blank" rel="noopener noreferrer" className={btn("whatsapp", "flex-1 max-w-60")}>
            <WhatsAppIcon /> Reservar
          </a>
        </div>
      </div>
    </PageShell>
  );
}
