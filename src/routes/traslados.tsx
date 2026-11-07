import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/Layout";
import { Reveal, WhatsAppIcon } from "@/components/site/kit";
import { formatBRL, transferMessage, transfers, whatsappLink } from "@/data/catalog";

export const Route = createFileRoute("/traslados")({
  head: () => ({
    meta: [
      { title: "Traslados São Luís, Barreirinhas, Santo Amaro e Jericoacoara — Explore Tours Transfer" },
      { name: "description", content: "Táxi privativo, caminhonete, táxi e van compartilhados entre São Luís, Barreirinhas, Santo Amaro, Tutóia, Parnaíba, Jericoacoara e Barra Grande." },
      { property: "og:title", content: "Traslados — Explore Tours Transfer" },
      { property: "og:description", content: "Valores de traslados privativos e compartilhados saindo de São Luís, Barreirinhas e Santo Amaro." },
    ],
  }),
  component: Transfers,
});

function Transfers() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-10 md:px-8 md:pt-16">
        <p className="eyebrow text-primary">Traslados</p>
        <h1 className="mt-3 text-4xl md:text-6xl">Chegue e siga viagem com conforto</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Opções privativas em qualquer horário e compartilhadas em horários fixos. Toque no veículo desejado para reservar.
        </p>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-24 md:grid-cols-2 md:px-8">
        {transfers.map((r, i) => (
          <Reveal key={`${r.from}-${r.to}`} delay={(i % 2) * 80}>
            <div className="h-full rounded-2xl border bg-card p-6">
              <h2 className="flex flex-wrap items-center gap-3 text-2xl md:text-3xl">
                {r.from} <ArrowRight className="h-5 w-5 text-accent" /> {r.to}
              </h2>
              <ul className="mt-5 divide-y">
                {r.options.map((o) => (
                  <li key={o.vehicle}>
                    <a
                      href={whatsappLink(transferMessage(r, o))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <div className="min-w-0">
                        <p className="font-medium">{o.vehicle}</p>
                        <p className="text-sm text-muted-foreground">{o.detail}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <span className="font-display text-xl">{formatBRL(o.price)}</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-whatsapp transition group-hover:bg-whatsapp group-hover:text-whatsapp-foreground">
                          <WhatsAppIcon className="h-4 w-4" />
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
