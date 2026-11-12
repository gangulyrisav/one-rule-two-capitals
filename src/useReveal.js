import { useEffect, useState } from "react";

// Adds the class "is-in" once, when an element marked data-reveal enters the view.
export function useReveal(selector = "[data-reveal]") {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -12% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}

// The year of the section that crosses the middle of the screen, for the small label in the corner.
export function useYearInView() {
  const [year, setYear] = useState("");
  useEffect(() => {
    const sections = [...document.querySelectorAll("[data-year]")];
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setYear(e.target.getAttribute("data-year"));
        }),
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return year;
}

// Share of the page scrolled, 0 to 1, for the thin rule at the left edge.
export function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight;
        setP(max > 0 ? Math.min(1, scrollY / max) : 0);
      });
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);
  return p;
}
