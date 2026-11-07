import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { categoryLabels, formatBRL, fromPrice, type Tour } from "@/data/catalog";
import { leadFor } from "@/data/showcase";
import { cn } from "@/lib/utils";

export function TourCard({ tour, large = false, wide = false }: { tour: Tour; large?: boolean; wide?: boolean }) {
  const s = tour.schedules[0]!;
  return (
    <Link
      to="/passeios/$slug"
      params={{ slug: tour.slug }}
      className="group relative block h-full overflow-hidden rounded-2xl bg-deep text-deep-foreground shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className={cn("relative w-full", wide ? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[28rem]" : large ? "aspect-[4/5] md:aspect-[5/6]" : "aspect-[4/5]")}>
        <img
          src={tour.images[0]}
          alt={`${tour.name} — Lençóis Maranhenses`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="scrim absolute inset-0" />
        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-2">
          <span className="eyebrow rounded-full bg-deep/50 px-3 py-1.5 backdrop-blur-md">
            {categoryLabels[tour.category]}
          </span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-deep-foreground text-deep transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-deep-foreground/80">
            <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{tour.origin}</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {s.departure} – {s.return}
              {tour.schedules.length > 1 && " · 2 horários"}
            </span>
          </p>
          <h3 className={cn("font-display leading-tight", large ? "text-3xl md:text-4xl" : "text-2xl")}>{tour.name}</h3>
          {large && <p className="mt-2 line-clamp-2 max-w-md text-sm text-deep-foreground/85">{leadFor(tour)}</p>}
          <p className="mt-3 text-sm text-deep-foreground/80">
            a partir de <span className="text-lg font-semibold text-deep-foreground">{formatBRL(fromPrice(tour))}</span>
            <span className="ml-1 text-xs">· {tour.prices.find((p) => p.value === fromPrice(tour))?.label.toLowerCase()}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
