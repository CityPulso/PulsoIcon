/**
 * Everything the three previews (React, Vue, Svelte) share: the icon list with its categories, release groups and
 * solid review states, the filters, the "Play visible" helper and the parsed changelog. Each preview only renders it.
 */
import { ICON_NAMES } from "pulsoicon-core/names";

import CHANGELOG from "../../CHANGELOG.md?raw";
import CATEGORIES from "./categories.json";
import REVIEW from "./solid-review.json";
import VERSIONS from "./versions.json";

export { FRAMEWORKS, FrameworkEnum } from "./frameworks.js";

export { ICON_NAMES };

export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

export const frameworkUrl = (port: number) => `${window.location.protocol}//${window.location.hostname}:${port}/`;

export const initialTheme = (): ThemeEnum => (window.matchMedia("(prefers-color-scheme: dark)").matches ? ThemeEnum.DARK : ThemeEnum.LIGHT);

export const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Hover every card on screen, the way a pointer would, then release. */
export function playVisible(): void {
  const cards = [...document.querySelectorAll<HTMLElement>("[data-icon-trigger]")].filter((el) => {
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight;
  });
  for (const card of cards) card.dispatchEvent(new PointerEvent("pointerenter"));
  window.setTimeout(() => {
    for (const card of cards) card.dispatchEvent(new PointerEvent("pointerleave"));
  }, 1400);
}

export const ALL = "all";
export const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
export const SEARCH_DEBOUNCE_MS = 200;
/** Cards mounted at first and added each time the end of the grid comes near the screen. */
export const BATCH = 60;

const categoriesOf = (name: string): readonly string[] => (CATEGORIES as Record<string, string[]>)[name] ?? ["other"];
export const CATEGORY_NAMES = [...new Set(ICON_NAMES.flatMap(categoriesOf))].sort();
export const CATEGORY_COUNTS = new Map<string, number>();
for (const name of ICON_NAMES) for (const c of categoriesOf(name)) CATEGORY_COUNTS.set(c, (CATEGORY_COUNTS.get(c) ?? 0) + 1);
/** "food-beverage" -> "Food & beverage". */
export const categoryLabel = (c: string) => (c.charAt(0).toUpperCase() + c.slice(1)).replace("-beverage", " & beverage").replace(/-/g, " ");
const letterOf = (name: string) => name.charAt(0).toUpperCase();

/** Release in which each icon first shipped (from the release commits, see CHANGELOG.md). */
const releaseOf = (name: string): string => (VERSIONS as Record<string, string>)[name] ?? "3.0.0";
/** Icons are grouped by major version: 1.0.0–1.x.x is "1.x", 2.0.0–2.x.x is "2.x", … */
const majorOf = (release: string) => `${release.split(".")[0]}.x`;
export const versionOf = (name: string): string => majorOf(releaseOf(name));
export const VERSION_NAMES = [...new Set(ICON_NAMES.map(versionOf))].sort((a, b) => Number.parseInt(a) - Number.parseInt(b));
export const VERSION_COUNTS = new Map(VERSION_NAMES.map((v) => [v, ICON_NAMES.filter((name) => versionOf(name) === v).length]));
export const FIRST_VERSION = VERSION_NAMES[0];
export const versionOptionLabel = (v: string) => (v === FIRST_VERSION ? `${v} (${VERSION_COUNTS.get(v)})` : `New in ${v} (+${VERSION_COUNTS.get(v)})`);

/** Review state of each solid drawing (see solid-review.json); icons not listed still need a check. */
export const REVIEW_STATES = ["todo", "designed", "imported-ok", "auto-ok"] as const;
export const reviewOf = (name: string): string => (REVIEW as Record<string, string>)[name] ?? "todo";
export const REVIEW_COUNTS = new Map<string, number>();
for (const name of ICON_NAMES) REVIEW_COUNTS.set(reviewOf(name), (REVIEW_COUNTS.get(reviewOf(name)) ?? 0) + 1);

export type Filters = { category: string; version: string; review: string };

/** The icons in the chosen category, release group and review state. */
export const filterIcons = ({ category, version, review }: Filters): string[] =>
  ICON_NAMES.filter(
    (name) => (category === ALL || categoriesOf(name).includes(category)) && (version === ALL || versionOf(name) === version) && (review === ALL || reviewOf(name) === review),
  );

/** Search looks across every letter; the letter pages apply when the search box is empty. */
export function visibleIcons(names: readonly string[], query: string, letter: string): string[] {
  const q = query.trim().toLowerCase();
  const matching = q ? names.filter((name) => name.includes(q)) : [...names];
  return q || letter === ALL ? matching : matching.filter((name) => letterOf(name) === letter);
}

export function letterCounts(names: readonly string[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const name of names) counts.set(letterOf(name), (counts.get(letterOf(name)) ?? 0) + 1);
  return counts;
}

/** The letter pages before and after `letter` that have icons. */
export function neighbours(counts: Map<string, number>, letter: string): { previous?: string; next?: string } {
  const pages = LETTERS.filter((l) => counts.get(l));
  const i = pages.indexOf(letter);
  if (i < 0) return {};
  return { previous: pages[i - 1], next: pages[i + 1] };
}

export function hint(count: number, filters: Filters, query: string, letter: string): string {
  const { category, version } = filters;
  const q = query.trim();
  return [
    `Showing ${count}`,
    q ? " matches across all letters" : letter === ALL ? "" : ` starting with ${letter}`,
    category === ALL ? "" : ` in ${categoryLabel(category)}`,
    version === ALL ? "" : version === FIRST_VERSION ? ` from ${version}` : ` new in ${version}`,
    ".",
  ].join("");
}

/** Pieces of one changelog line: `code`, **bold**, [links](url) and plain text. */
export type Inline = { kind: "text" | "code"; text: string } | { kind: "strong"; children: Inline[] } | { kind: "link"; text: string; href: string };

export function inline(text: string): Inline[] {
  return text
    .split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
    .filter(Boolean)
    .map((part): Inline => {
      if (part.startsWith("`")) return { kind: "code", text: part.slice(1, -1) };
      if (part.startsWith("**")) return { kind: "strong", children: inline(part.slice(2, -2)) };
      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) return link[2].startsWith("http") ? { kind: "link", text: link[1], href: link[2] } : { kind: "text", text: link[1] };
      return { kind: "text", text: part };
    });
}

export type ListItem = { text: string; children: ListItem[] };
/** A release heading can show its icons: `group` is the release group and `label` the button text. */
export type Block =
  { kind: "h2"; text: string; show?: { group: string; label: string } } | { kind: "h3"; text: string } | { kind: "p"; text: string } | { kind: "ul"; items: ListItem[] };

/** CHANGELOG.md as headings, paragraphs and nested bullet lists; one "show" button per release group, on its newest release. */
function parseChangelog(markdown: string): Block[] {
  const blocks: Block[] = [];
  const shown = new Set<string>();
  let items: { depth: number; text: string }[] = [];
  const flush = () => {
    if (!items.length) return;
    const list = items;
    items = [];
    const build = (start: number, depth: number): [ListItem[], number] => {
      const out: ListItem[] = [];
      let i = start;
      while (i < list.length && list[i].depth >= depth) {
        const item: ListItem = { text: list[i].text, children: [] };
        i++;
        if (i < list.length && list[i].depth > depth) [item.children, i] = build(i, list[i].depth);
        out.push(item);
      }
      return [out, i];
    };
    blocks.push({ kind: "ul", items: build(0, list[0].depth)[0] });
  };
  for (const raw of markdown.split("\n")) {
    const bullet = raw.match(/^(\s*)- (.*)$/);
    if (bullet) {
      items.push({ depth: bullet[1].length, text: bullet[2] });
      continue;
    }
    if (/^\s+\S/.test(raw) && items.length) {
      items[items.length - 1].text += " " + raw.trim();
      continue;
    }
    flush();
    if (raw.startsWith("## ")) {
      const text = raw.slice(3).trim();
      const group = /^\d+\.\d+\.\d+$/.test(text) ? majorOf(text) : "";
      if (VERSION_COUNTS.has(group) && !shown.has(group)) {
        shown.add(group);
        const label = group === FIRST_VERSION ? `Show all ${VERSION_COUNTS.get(group)} ${group} icons` : `Show the ${VERSION_COUNTS.get(group)} icons new in ${group}`;
        blocks.push({ kind: "h2", text, show: { group, label } });
      } else blocks.push({ kind: "h2", text });
    } else if (raw.startsWith("### ")) blocks.push({ kind: "h3", text: raw.slice(4) });
    else if (raw.trim() && !raw.startsWith("# ")) blocks.push({ kind: "p", text: raw });
  }
  flush();
  return blocks;
}

export const CHANGELOG_BLOCKS = parseChangelog(CHANGELOG);
