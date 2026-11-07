import { ScrollFx } from "@/components/site/ScrollFx";
import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { company, whatsappLink } from "@/data/catalog";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./kit";

const nav = [
  { to: "/", label: "Início" },
  { to: "/passeios", label: "Passeios" },
  { to: "/traslados", label: "Traslados" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const light = overlay && !scrolled && !open;
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        light ? "text-deep-foreground" : "bg-background/90 text-foreground shadow-sm backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-semibold tracking-tight">Explore</span>
          <span className="eyebrow mt-0.5 text-[0.58rem] opacity-80">Tours Transfer</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-medium opacity-80 transition-opacity hover:opacity-100"
              activeProps={{ className: "!opacity-100 underline underline-offset-8 decoration-accent decoration-2" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={whatsappLink("Olá! Gostaria de informações sobre os passeios nos Lençóis Maranhenses.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-4 w-4" /> Reservar
          </a>
        </nav>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col bg-background px-5 pb-8 pt-6 md:hidden">
          <nav className="flex flex-col" aria-label="Menu móvel">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
                className="border-b py-5 font-display text-3xl"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href={whatsappLink("Olá! Gostaria de informações sobre os passeios nos Lençóis Maranhenses.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-whatsapp text-base font-semibold text-whatsapp-foreground"
          >
            <WhatsAppIcon /> Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-3xl">Explore</p>
          <p className="eyebrow mt-1 opacity-70">Tours Transfer</p>
          <p className="mt-5 max-w-xs text-sm text-deep-foreground/70">
            {company.tagline}. Passeios e traslados nos Lençóis Maranhenses, partindo de Barreirinhas e Santo Amaro.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4 opacity-60">Navegue</p>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="opacity-80 hover:opacity-100">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4 opacity-60">Contato</p>
          <ul className="space-y-3 text-sm">
            {company.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p.replace(/[^\d+]/g, "")}`} className="inline-flex items-center gap-2 opacity-80 hover:opacity-100">
                  <Phone className="h-4 w-4" /> {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 break-all opacity-80 hover:opacity-100">
                <Mail className="h-4 w-4 shrink-0" /> {company.email}
              </a>
            </li>
            <li>
              <a href={`https://instagram.com/${company.instagram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 opacity-80 hover:opacity-100">
                <Instagram className="h-4 w-4" /> @{company.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-deep-foreground/10 px-5 py-6 text-center text-xs text-deep-foreground/50">
        © {new Date().getFullYear()} {company.name} · Valores do portfólio 2025, sujeitos a confirmação.
      </div>
    </footer>
  );
}

export function FloatingWhatsApp({ message }: { message?: string | undefined }) {
  return (
    <a
      href={whatsappLink(message ?? "Olá! Gostaria de informações sobre os passeios nos Lençóis Maranhenses.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-soft transition hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

export function PageShell({ children, overlay = false, whatsappMessage, hideFloating = false }: { children: ReactNode; overlay?: boolean; whatsappMessage?: string | undefined; hideFloating?: boolean }) {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <ScrollFx />
      <SiteHeader overlay={overlay} />
      <main className={overlay ? "" : "pt-16 md:pt-20"}>{children}</main>
      <SiteFooter />
      {!hideFloating && <FloatingWhatsApp message={whatsappMessage} />}
    </>
  );
}
