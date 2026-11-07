import { describe, expect, it } from "vitest";
import { filterTours, fromPrice, tours, transfers, whatsappLink, tourMessage } from "@/data/catalog";

const bySlug = (s: string) => tours.find((t) => t.slug === s)!;

describe("catalog data from PDF", () => {
  it("has 15 tours and 8 transfer routes", () => {
    expect(tours).toHaveLength(15);
    expect(transfers).toHaveLength(8);
  });
  it("Lagoa Azul costs R$130 per person", () => {
    expect(fromPrice(bySlug("circuito-lagoa-azul"))).toBe(130);
  });
  it("Café da manhã is R$1500 private up to 4", () => {
    expect(bySlug("cafe-da-manha-nos-lencois").prices[0]?.value).toBe(1500);
  });
  it("São Luís → Barreirinhas van is R$130", () => {
    expect(transfers[0]!.options.find((o) => o.vehicle === "Van compartilhada")!.price).toBe(130);
  });
});

describe("filters", () => {
  it("filters Santo Amaro tours", () => {
    expect(filterTours(tours, { origin: "Santo Amaro" })).toHaveLength(4);
  });
  it("search ignores accents", () => {
    expect(filterTours(tours, { query: "cabure" }).length).toBeGreaterThanOrEqual(3);
  });
});

describe("whatsapp", () => {
  it("includes tour name in message", () => {
    const url = whatsappLink(tourMessage(bySlug("circuito-atins")));
    expect(url.startsWith("https://wa.me/5598991379433?text=")).toBe(true);
    expect(decodeURIComponent(url)).toContain("Circuito Atins");
  });
});
