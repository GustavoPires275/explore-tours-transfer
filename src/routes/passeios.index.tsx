import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useMemo } from "react";
import { PageShell } from "@/components/site/Layout";
import { TourCard } from "@/components/site/TourCard";
import { categoryLabels, filterTours, tours, type Category, type Origin } from "@/data/catalog";
import { isShowcase } from "@/data/showcase";
import { cn } from "@/lib/utils";

type Search = { categoria?: Category | undefined; origem?: Origin | undefined; q?: string | undefined };
const cats = Object.keys(categoryLabels) as Category[];
const origins: Origin[] = ["Barreirinhas", "Santo Amaro"];

export const Route = createFileRoute("/passeios/")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    categoria: cats.includes(s["categoria"] as Category) ? (s["categoria"] as Category) : undefined,
    origem: origins.includes(s["origem"] as Origin) ? (s["origem"] as Origin) : undefined,
    q: typeof s["q"] === "string" && s["q"].length <= 80 ? s["q"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Passeios nos Lençóis Maranhenses — Explore Tours Transfer" },
      { name: "description", content: "Todos os passeios saindo de Barreirinhas e Santo Amaro: Lagoa Azul, Lagoa Bonita, Atins, Caburé, Emendadas, Betânia e mais, com preços." },
      { property: "og:title", content: "Passeios nos Lençóis Maranhenses — Explore Tours Transfer" },
      { property: "og:description", content: "Circuitos nas lagoas, experiências nas dunas, rio, mar e aventura. Veja preços e horários." },
    ],
  }),
  component: Catalog,
});

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors",
        active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-foreground/40",
      )}
    >
      {children}
    </button>
  );
}

function Catalog() {
  const { categoria, origem, q } = Route.useSearch();
  const navigate = useNavigate({ from: "/passeios/" });
  const set = (patch: Partial<Search>) =>
    navigate({ search: (prev) => ({ ...prev, ...patch }), replace: true, resetScroll: false });

  const list = useMemo(
    () => filterTours(tours, { category: categoria ?? "all", origin: origem ?? "all", query: q }),
    [categoria, origem, q],
  );
  const hasFilters = !!(categoria || origem || q);

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 pb-6 pt-10 md:px-8 md:pt-16">
        <p className="eyebrow text-primary">Catálogo 2025</p>
        <h1 className="mt-3 text-4xl md:text-6xl">Passeios</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Saídas de Barreirinhas e Santo Amaro, com guia da região. Toque em um passeio para ver roteiro, valores e reservar.
        </p>
      </section>

      <div className="sticky top-16 z-30 border-y bg-background/95 backdrop-blur-md md:top-20">
        <div className="mx-auto max-w-7xl space-y-3 px-5 py-4 md:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <label className="relative flex-1">
              <span className="sr-only">Buscar passeio</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={q ?? ""}
                maxLength={80}
                onChange={(e) => set({ q: e.target.value || undefined })}
                placeholder="Buscar: lagoa, quadriciclo, Atins…"
                className="h-12 w-full rounded-full border bg-card pl-11 pr-4 text-base outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <div className="flex gap-2 overflow-x-auto" role="group" aria-label="Local de saída">
              <Chip active={!origem} onClick={() => set({ origem: undefined })}>Todas as saídas</Chip>
              {origins.map((o) => (
                <Chip key={o} active={origem === o} onClick={() => set({ origem: o })}>{o}</Chip>
              ))}
            </div>
          </div>
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0" role="group" aria-label="Categoria">
            <Chip active={!categoria} onClick={() => set({ categoria: undefined })}>Todos</Chip>
            {cats.map((c) => (
              <Chip key={c} active={categoria === c} onClick={() => set({ categoria: c })}>{categoryLabels[c]}</Chip>
            ))}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <p className="mb-6 text-sm text-muted-foreground" aria-live="polite">
          {list.length} {list.length === 1 ? "passeio encontrado" : "passeios encontrados"}
          {hasFilters && (
            <button type="button" onClick={() => navigate({ search: {}, replace: true })} className="ml-3 inline-flex items-center gap-1 font-semibold text-primary">
              <X className="h-3.5 w-3.5" /> Limpar filtros
            </button>
          )}
        </p>
        {list.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...list.filter(isShowcase).slice(0, 2), ...list.filter((t) => !list.filter(isShowcase).slice(0, 2).includes(t))].map((t, i) => {
              const wide = i < 2 && isShowcase(t);
              return (
                <div key={t.slug} className={wide ? (i === 0 ? "sm:col-span-2" : "sm:col-span-2 lg:col-span-1") : ""}>
                  <TourCard tour={t} large={wide} wide={wide} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed p-12 text-center">
            <p className="font-display text-2xl">Nenhum passeio encontrado</p>
            <p className="mt-2 text-muted-foreground">Tente outra palavra ou remova os filtros.</p>
            <button type="button" onClick={() => navigate({ search: {}, replace: true })} className="mt-6 font-semibold text-primary">
              Ver todos os passeios
            </button>
          </div>
        )}
      </section>
    </PageShell>
  );
}
