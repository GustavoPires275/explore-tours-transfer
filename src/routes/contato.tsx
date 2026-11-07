import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageShell } from "@/components/site/Layout";
import { btn, WhatsAppIcon } from "@/components/site/kit";
import { company, tours, whatsappLink } from "@/data/catalog";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e reservas — Explore Tours Transfer" },
      { name: "description", content: "Fale com a Explore Tours Transfer pelo WhatsApp, telefone ou e-mail e reserve seu passeio nos Lençóis Maranhenses." },
      { property: "og:title", content: "Contato e reservas — Explore Tours Transfer" },
      { property: "og:description", content: "Reserve passeios e traslados nos Lençóis Maranhenses pelo WhatsApp." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim().slice(0, 80);
    const tour = String(f.get("tour") ?? "");
    const date = String(f.get("date") ?? "");
    const people = Number(f.get("people"));
    const msg = String(f.get("msg") ?? "").trim().slice(0, 500);
    if (name.length < 2) return setError("Informe seu nome.");
    if (!Number.isInteger(people) || people < 1 || people > 50) return setError("Informe o número de pessoas (1 a 50).");
    setError(null);
    const lines = [
      `Olá! Meu nome é ${name}.`,
      tour ? `Tenho interesse no passeio ${tour}.` : "Gostaria de informações sobre os passeios.",
      date ? `Data desejada: ${date.split("-").reverse().join("/")}.` : "",
      `Número de pessoas: ${people}.`,
      msg,
      "Gostaria de saber a disponibilidade e como posso realizar a reserva.",
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const field = "h-12 w-full rounded-xl border bg-card px-4 text-base outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-12 md:grid-cols-[1fr_1.1fr] md:px-8 md:py-20">
        <div>
          <p className="eyebrow text-primary">Contato</p>
          <h1 className="mt-3 text-4xl md:text-6xl">Vamos planejar sua viagem?</h1>
          <p className="mt-4 max-w-md text-muted-foreground">{company.tagline}. Responderemos pelo WhatsApp com disponibilidade e detalhes.</p>
          <ul className="mt-10 space-y-5">
            {company.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p.replace(/[^\d+]/g, "")}`} className="flex items-center gap-4 text-lg hover:text-primary">
                  <Phone className="h-5 w-5 text-primary" /> {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${company.email}`} className="flex items-center gap-4 break-all text-lg hover:text-primary">
                <Mail className="h-5 w-5 shrink-0 text-primary" /> {company.email}
              </a>
            </li>
            <li>
              <a href={`https://instagram.com/${company.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-primary">
                <Instagram className="h-5 w-5 text-primary" /> @{company.instagram}
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-2xl border bg-card p-6 shadow-soft md:p-8">
          <h2 className="text-2xl">Solicitar reserva</h2>
          <p className="mt-1 text-sm text-muted-foreground">Preencha e envie direto para o nosso WhatsApp.</p>
          <div className="mt-6 grid gap-4">
            <label className="grid gap-1.5 text-sm font-medium">Seu nome
              <input name="name" required maxLength={80} autoComplete="name" className={field} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">Passeio
              <select name="tour" className={field} defaultValue="">
                <option value="">Ainda não sei / traslado</option>
                {tours.map((t) => <option key={t.slug} value={t.name}>{t.name} ({t.origin})</option>)}
              </select>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="grid gap-1.5 text-sm font-medium">Data
                <input name="date" type="date" className={field} />
              </label>
              <label className="grid gap-1.5 text-sm font-medium">Pessoas
                <input name="people" type="number" min={1} max={50} defaultValue={2} required className={field} />
              </label>
            </div>
            <label className="grid gap-1.5 text-sm font-medium">Mensagem (opcional)
              <textarea name="msg" maxLength={500} rows={3} className="w-full rounded-xl border bg-card p-4 text-base outline-none focus:border-primary focus:ring-2 focus:ring-ring/30" />
            </label>
            {error && <p role="alert" className="text-sm font-medium text-destructive">{error}</p>}
            <button type="submit" className={btn("whatsapp", "min-h-14 text-base")}>
              <WhatsAppIcon /> Enviar pelo WhatsApp
            </button>
            <a href={whatsappLink("Olá! Gostaria de informações sobre os passeios nos Lençóis Maranhenses.")} target="_blank" rel="noopener noreferrer" className="text-center text-sm text-muted-foreground underline underline-offset-4">
              ou abra uma conversa direta
            </a>
          </div>
        </form>
      </section>
    </PageShell>
  );
}
