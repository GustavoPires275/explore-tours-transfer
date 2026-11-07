import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { categoryLabels, formatBRL, fromPrice, type Tour } from "@/data/catalog";
import { cn } from "@/lib/utils";

type Variant = "feature" | "wide" | "standard";

/**
 * Bento card for the home featured section — presentation only, uses the same
 * truthful catalog data as TourCard (origin, schedule, from-price, condition).
 */
export function BentoTourCard({ tour, variant = "standard" }: { tour: Tour; variant?: Variant }) {
  const s = tour.schedules[0]!;
  const price = fromPrice(tour);
  const condition = tour.prices.find((p) => p.value === price)?.label.toLowerCase();

  const meta = (
    <p
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-1",
        variant === "feature"
          ? "text-[0.65rem] font-bold uppercase tracking-[0.18em] text-deep-foreground/70"
          : "text-xs text-deep-foreground/80",
      )}
    >
      <span className="inline-flex items-center gap-1.5">
        <MapPin className="h-3.5 w-3.5" />
        {tour.origin}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" />
        {s.departure} – {s.return}
        {tour.schedules.length > 1 && " · 2 horários"}
      </span>
    </p>
  );

  return (
    <Link
      to="/passeios/$slug"
      params={{ slug: tour.slug }}
      className={cn(
        "group relative block h-full overflow-hidden bg-deep text-deep-foreground shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        variant === "feature" ? "min-h-[30rem] rounded-[2rem] md:min-h-0 md:rounded-[2.5rem]" : "min-h-[22rem] rounded-[1.75rem] md:min-h-0",
      )}
    >
      <div className="absolute inset-0">
        <img
          src={tour.images[0]}
          alt={`${tour.name} — Lençóis Maranhenses`}
          loading="lazy"
          decoding="async"
          className={cn(
            "h-full w-full object-cover transition-transform ease-out group-hover:scale-105",
            variant === "feature" ? "duration-1000" : "duration-700",
          )}
        />
        <div
          className={cn(
            "absolute inset-0",
            variant === "wide"
              ? "bg-gradient-to-t from-deep/95 via-deep/35 to-deep/10 sm:bg-gradient-to-r sm:from-deep/90 sm:via-deep/40 sm:to-transparent"
              : "bg-gradient-to-t from-deep/95 via-deep/30 to-transparent",
          )}
        />

        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-2 md:left-6 md:right-6 md:top-6">
          <span className="eyebrow rounded-full border border-deep-foreground/15 bg-deep/50 px-3.5 py-1.5 backdrop-blur-md">
            {categoryLabels[tour.category]}
          </span>
          <span
            className={cn(
              "flex shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45",
              variant === "feature"
                ? "h-12 w-12 bg-deep-foreground text-deep md:h-14 md:w-14"
                : "h-10 w-10 bg-deep/50 text-deep-foreground backdrop-blur-md group-hover:bg-deep-foreground group-hover:text-deep",
            )}
          >
            <ArrowUpRight className={variant === "feature" ? "h-6 w-6" : "h-5 w-5"} />
          </span>
        </div>

        {variant === "feature" ? (
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            {meta}
            <h3 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl lg:text-6xl">{tour.name}</h3>
            <div className="mt-6 flex items-end justify-between gap-4 border-t border-deep-foreground/15 pt-5 md:mt-8 md:pt-6">
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-deep-foreground/60">
                  a partir de
                </p>
                <p className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">{formatBRL(price)}</p>
              </div>
              {condition && <p className="pb-1 text-xs italic text-deep-foreground/70">{condition}</p>}
            </div>
          </div>
        ) : variant === "wide" ? (
          <div className="absolute inset-x-0 bottom-0 max-w-md p-6 md:p-8">
            {meta}
            <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">{tour.name}</h3>
            <p className="mt-4 text-sm text-deep-foreground/85">
              a partir de <span className="text-lg font-semibold">{formatBRL(price)}</span>
              <span className="ml-1 text-xs">· {condition}</span>
            </p>
          </div>
        ) : (
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            {meta}
            <h3 className="mt-2.5 font-display text-2xl leading-tight">{tour.name}</h3>
            <p className="mt-2.5 text-sm text-deep-foreground/80">
              a partir de <span className="text-base font-semibold">{formatBRL(price)}</span>
              <span className="ml-1 text-xs">· {condition}</span>
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}
