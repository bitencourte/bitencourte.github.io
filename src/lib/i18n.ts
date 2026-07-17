import type { Lang } from "../content/site";

export function otherLang(lang: Lang): Lang {
  return lang === "pt" ? "en" : "pt";
}

/** Builds the href for `path` (e.g. "/", "/sobre", "/projetos/eager") in the given language. */
export function localePath(lang: Lang, path: string): string {
  if (lang === "pt") return path;
  return path === "/" ? "/en/" : `/en${path}`;
}
