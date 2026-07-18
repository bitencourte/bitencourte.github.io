function initMenu() {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const nav = document.querySelector<HTMLElement>("[data-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  const closeNav = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.querySelector<HTMLButtonElement>("[data-nav-close]")?.addEventListener("click", closeNav);
}

function initHeaderScroll() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initHeroParallax() {
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  const photo = document.querySelector<HTMLElement>("[data-hero-photo]");
  if (!hero || !photo) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (reduceMotion || !canHover) return;

  hero.addEventListener("mousemove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    const tx = x * 16;
    const ty = y * 12;
    const rotate = x * 6;
    photo.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) rotate(${rotate}deg)`;
  });

  hero.addEventListener("mouseleave", () => {
    photo.style.transform = "translate(-50%, -50%) rotate(0deg)";
  });
}

function initReveal() {
  const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
  );

  items.forEach((el) => observer.observe(el));
}

initMenu();
initHeaderScroll();
initHeroParallax();
initReveal();
