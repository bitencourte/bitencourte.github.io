function initMenu() {
  const toggle =
    document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const nav = document.querySelector<HTMLElement>("[data-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Menu");
    document.body.classList.toggle("nav-open", isOpen);
  });

  const closeNav = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menu");
    document.body.classList.remove("nav-open");
  };

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
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

function initSmoothAnchorScroll() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  document
    .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    .forEach((link) => {
      link.addEventListener("click", (event) => {
        const id = link.getAttribute("href")?.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (!target) return;

        event.preventDefault();

        const scrollMargin =
          parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        const startY = window.scrollY;
        const targetY =
          target.getBoundingClientRect().top + startY - scrollMargin;

        if (reduceMotion) {
          window.scrollTo({ top: targetY, behavior: "instant" });
          history.pushState(null, "", `#${id}`);
          return;
        }

        const distance = targetY - startY;
        const duration = Math.min(
          1600,
          Math.max(900, Math.abs(distance) * 1.2),
        );
        const start = performance.now();

        // Linear: constant speed, no ease-in/ease-out curve. "instant" is
        // required here — "auto" defers to the html { scroll-behavior:
        // smooth } rule, which re-smooths every single per-frame jump and
        // makes the motion look like it's accelerating.
        const step = (now: number) => {
          const elapsed = Math.min((now - start) / duration, 1);
          window.scrollTo({
            top: startY + distance * elapsed,
            behavior: "instant",
          });
          if (elapsed < 1) {
            requestAnimationFrame(step);
          } else {
            history.pushState(null, "", `#${id}`);
          }
        };

        requestAnimationFrame(step);
      });
    });
}

function initHero() {
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  const photo = document.querySelector<HTMLElement>("[data-hero-photo]");
  if (!hero || !photo) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const canHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;

  // Mouse-tilt only — no scroll-linked drift. The photo and the
  // subtitle/CTA below it used to drift toward each other on scroll,
  // which either overlapped on short mobile heroes or (once fixed with a
  // fade) left a dead gap where the text used to be. Letting the hero
  // scroll away as one static block avoids both.
  if (reduceMotion || !canHover) return;

  let entranceDone = false;
  photo.addEventListener("animationend", () => {
    photo.style.animation = "none";
    entranceDone = true;
  });

  hero.addEventListener("mousemove", (event) => {
    if (!entranceDone) return;
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    const tx = x * 16;
    const ty = y * 12;
    const rotate = x * 6;
    photo.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) rotate(${rotate}deg)`;
  });

  hero.addEventListener("mouseleave", () => {
    if (!entranceDone) return;
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
initSmoothAnchorScroll();
initHero();
initReveal();
