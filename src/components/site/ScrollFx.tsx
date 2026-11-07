import { useEffect } from "react";

/** JS fallback for scroll effects on browsers without CSS scroll timelines (e.g. older iPhone Safari). */
export function ScrollFx() {
  useEffect(() => {
    if (CSS.supports("animation-timeline: view()")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      const bar = document.querySelector<HTMLElement>(".scroll-progress");
      if (bar) bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      const h = Math.min(y / vh, 1);
      document.querySelectorAll<HTMLElement>(".hero-parallax").forEach((el) => {
        el.style.transform = `translateY(${h * 30}%) scale(${1 + h * 0.1})`;
        el.style.filter = `brightness(${1 - h * 0.4})`;
      });
      document.querySelectorAll<HTMLElement>(".hero-text-parallax").forEach((el) => {
        const t = Math.min(y / (vh * 0.7), 1);
        el.style.transform = `translateY(${-80 * t}px)`;
        el.style.opacity = String(1 - t);
      });
      document.querySelectorAll<HTMLElement>(".reveal a img, .parallax img").forEach((img) => {
        const r = img.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const p = (r.top + r.height / 2) / (vh + r.height) - 0.5;
        img.style.transform = `translateY(${p * -16}%) scale(1.18)`;
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
