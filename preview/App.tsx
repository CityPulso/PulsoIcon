import type { ReactNode } from "react";

import { memo, useEffect, useMemo, useRef, useState } from "react";
import { BrandCitypulso } from "pulsoicon";
import { ICON_NAMES, ICONS } from "pulsoicon/all";

import CHANGELOG from "../CHANGELOG.md?raw";
import CATEGORIES from "./categories.json";
import REVIEW from "./solid-review.json";
import VERSIONS from "./versions.json";

enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

/** Hover every card on screen, the way a pointer would, then release. */
function playVisible() {
  const cards = [...document.querySelectorAll<HTMLElement>("[data-icon-trigger]")].filter((el) => {
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight;
  });
  for (const card of cards) card.dispatchEvent(new PointerEvent("pointerenter"));
  window.setTimeout(() => {
    for (const card of cards) card.dispatchEvent(new PointerEvent("pointerleave"));
  }, 1400);
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ALL = "all";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const categoriesOf = (name: string): readonly string[] => (CATEGORIES as Record<string, string[]>)[name] ?? ["other"];
const CATEGORY_NAMES = [...new Set(ICON_NAMES.flatMap(categoriesOf))].sort();
const CATEGORY_COUNTS = new Map<string, number>();
for (const name of ICON_NAMES) for (const c of categoriesOf(name)) CATEGORY_COUNTS.set(c, (CATEGORY_COUNTS.get(c) ?? 0) + 1);
/** "food-beverage" -> "Food & beverage". */
const categoryLabel = (c: string) => (c.charAt(0).toUpperCase() + c.slice(1)).replace("-beverage", " & beverage").replace(/-/g, " ");
const letterOf = (name: string) => name.charAt(0).toUpperCase();
/** Release in which each icon first shipped (from the release commits, see CHANGELOG.md). */
const releaseOf = (name: string): string => (VERSIONS as Record<string, string>)[name] ?? "3.0.0";
/** Icons are grouped by major version: 1.0.0–1.x.x is "1.x", 2.0.0–2.x.x is "2.x", … */
const majorOf = (release: string) => `${release.split(".")[0]}.x`;
const versionOf = (name: string): string => majorOf(releaseOf(name));
const VERSION_NAMES = [...new Set(ICON_NAMES.map(versionOf))].sort((a, b) => Number.parseInt(a) - Number.parseInt(b));
const VERSION_COUNTS = new Map(VERSION_NAMES.map((v) => [v, ICON_NAMES.filter((name) => versionOf(name) === v).length]));
const FIRST_VERSION = VERSION_NAMES[0];

const SEARCH_DEBOUNCE_MS = 200;
/** Review state of each solid drawing (see solid-review.json); icons not listed still need a check. */
const REVIEW_STATES = ["todo", "designed", "imported-ok", "auto-ok"] as const;
const reviewOf = (name: string): string => (REVIEW as Record<string, string>)[name] ?? "todo";
const REVIEW_COUNTS = new Map<string, number>();
for (const name of ICON_NAMES) REVIEW_COUNTS.set(reviewOf(name), (REVIEW_COUNTS.get(reviewOf(name)) ?? 0) + 1);

/** `code`, **bold** and [links](url) inside one changelog line. */
function inline(text: string): ReactNode[] {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    if (part.startsWith("`")) return <code key={i}>{part.slice(1, -1)}</code>;
    if (part.startsWith("**")) return <strong key={i}>{inline(part.slice(2, -2))}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link)
      return link[2].startsWith("http") ? (
        <a href={link[2]} key={i} rel="noreferrer" target="_blank">
          {link[1]}
        </a>
      ) : (
        link[1]
      );
    return part;
  });
}

/** Renders CHANGELOG.md (headings, paragraphs and nested bullet lists); each release heading can filter the grid to its icons. */
function Changelog({ onShow }: { onShow: (version: string) => void }) {
  const blocks: ReactNode[] = [];
  const shown = new Set<string>(); // one "show" button per major version, on its newest release
  let items: { depth: number; text: string }[] = [];
  const flush = () => {
    if (!items.length) return;
    const list = items;
    items = [];
    const build = (start: number, depth: number): [ReactNode, number] => {
      const lis: ReactNode[] = [];
      let i = start;
      while (i < list.length && list[i].depth >= depth) {
        const text = list[i].text;
        i++;
        let child: ReactNode = null;
        if (i < list.length && list[i].depth > depth) [child, i] = build(i, list[i].depth);
        lis.push(
          <li key={i}>
            {inline(text)}
            {child}
          </li>,
        );
      }
      return [<ul key={start}>{lis}</ul>, i];
    };
    blocks.push(build(0, list[0].depth)[0]);
  };
  for (const raw of CHANGELOG.split("\n")) {
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
      const v = raw.slice(3).trim();
      const group = /^\d+\.\d+\.\d+$/.test(v) ? majorOf(v) : "";
      const button = VERSION_COUNTS.has(group) && !shown.has(group);
      if (button) shown.add(group);
      blocks.push(
        <h2 key={blocks.length}>
          {v}
          {button && (
            <button className="button small" onClick={() => onShow(group)} type="button">
              {group === FIRST_VERSION ? `Show all ${VERSION_COUNTS.get(group)} ${group} icons` : `Show the ${VERSION_COUNTS.get(group)} icons new in ${group}`}
            </button>
          )}
        </h2>,
      );
    } else if (raw.startsWith("### ")) blocks.push(<h3 key={blocks.length}>{raw.slice(4)}</h3>);
    else if (raw.trim() && !raw.startsWith("# ")) blocks.push(<p key={blocks.length}>{inline(raw)}</p>);
  }
  flush();
  return <section className="changelog">{blocks}</section>;
}

const Card = memo(function Card({ name, size, stroke }: { name: string; size: number; stroke: number }) {
  const Icon = ICONS[name as keyof typeof ICONS];
  return (
    <div className="card" data-icon-trigger>
      <div className="pair">
        <div className="cell" title="Outline">
          <Icon size={size} strokeWidth={stroke} />
        </div>
        <div className="cell" title="Solid">
          <Icon size={size} solid strokeWidth={stroke} />
        </div>
      </div>
      <div className="name">
        {name}
        <span className={`tag review-${reviewOf(name)}`}>{reviewOf(name)}</span>
        {versionOf(name) !== FIRST_VERSION && <span className="tag">{versionOf(name)}</span>}
      </div>
    </div>
  );
});

/** Cards mounted at first and added each time the end of the grid comes near the screen. */
const BATCH = 60;

/** Mounts the cards in batches as the page scrolls, so a long page or search stays responsive. */
const Grid = memo(function Grid({ names, size, stroke }: { names: readonly string[]; size: number; stroke: number }) {
  const [shown, setShown] = useState({ names, count: BATCH });
  const count = shown.names === names ? shown.count : BATCH;
  if (shown.names !== names) setShown({ names, count: BATCH });
  const end = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = end.current;
    if (!el || count >= names.length) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setShown((s) => ({ names: s.names, count: s.count + BATCH })), {
      rootMargin: "800px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [count, names]);
  return (
    <main className="grid">
      {names.slice(0, count).map((name) => (
        <Card key={name} name={name} size={size} stroke={stroke} />
      ))}
      {count < names.length && <div aria-hidden="true" className="more" ref={end} />}
    </main>
  );
});

export function App() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [review, setReview] = useState(ALL);
  const [size, setSize] = useState(32);
  const [stroke, setStroke] = useState(2);

  useEffect(() => {
    const timer = window.setTimeout(() => setQuery(input), SEARCH_DEBOUNCE_MS);
    return () => window.clearTimeout(timer);
  }, [input]);
  const [theme, setTheme] = useState(() => (window.matchMedia("(prefers-color-scheme: dark)").matches ? ThemeEnum.DARK : ThemeEnum.LIGHT));

  const [letter, setLetter] = useState("A");
  const [category, setCategory] = useState(ALL);
  const [version, setVersion] = useState(ALL);
  const [showLog, setShowLog] = useState(false);

  const q = query.trim().toLowerCase();
  const inCategory = useMemo(
    () =>
      ICON_NAMES.filter(
        (name) => (category === ALL || categoriesOf(name).includes(category)) && (version === ALL || versionOf(name) === version) && (review === ALL || reviewOf(name) === review),
      ),
    [category, version, review],
  );
  // Search looks across every letter; the letter pages apply when the search box is empty.
  const names = useMemo(() => {
    const matching = q ? inCategory.filter((name) => name.includes(q)) : inCategory;
    return q || letter === ALL ? matching : matching.filter((name) => letterOf(name) === letter);
  }, [inCategory, q, letter]);
  const letterCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const name of inCategory) counts.set(letterOf(name), (counts.get(letterOf(name)) ?? 0) + 1);
    return counts;
  }, [inCategory]);

  const goTo = (next: string) => {
    setLetter(next);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="page" data-theme={theme}>
      <header className="bar">
        <div className="title">
          <h1 className="brand" data-icon-trigger title="PulsoIcon by CityPulso">
            PulsoIcon
            <BrandCitypulso className="company" size={26} />
            {/* The CityPulso bars use the logo's orange gradient (see .company in app.css). */}
            <svg aria-hidden="true" height="0" style={{ position: "absolute" }} width="0">
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="citypulso-orange" x1="0" x2="0" y1="14" y2="3">
                  <stop offset="0" stopColor="#e8412c" />
                  <stop offset="1" stopColor="#f7941d" />
                </linearGradient>
              </defs>
            </svg>
          </h1>
          <p>{ICON_NAMES.length} animated icons. Hover a card to play it.</p>
          {reducedMotion && <p className="warn">Your system asks for reduced motion, so icons will not animate. Turn it off to review.</p>}
        </div>
        <div className="controls">
          <select aria-label="Category" className="select" onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value={ALL}>All categories ({ICON_NAMES.length})</option>
            {CATEGORY_NAMES.map((c) => (
              <option key={c} value={c}>
                {categoryLabel(c)} ({CATEGORY_COUNTS.get(c)})
              </option>
            ))}
          </select>
          <select aria-label="Version" className="select" onChange={(e) => setVersion(e.target.value)} value={version}>
            <option value={ALL}>All versions ({ICON_NAMES.length})</option>
            {VERSION_NAMES.map((v) => (
              <option key={v} value={v}>
                {v === FIRST_VERSION ? `${v} (${VERSION_COUNTS.get(v)})` : `New in ${v} (+${VERSION_COUNTS.get(v)})`}
              </option>
            ))}
          </select>
          <select aria-label="Solid review" className="select" onChange={(e) => setReview(e.target.value)} value={review}>
            <option value={ALL}>All solid states</option>
            {REVIEW_STATES.map((s) => (
              <option key={s} value={s}>
                {s} ({REVIEW_COUNTS.get(s) ?? 0})
              </option>
            ))}
          </select>
          <input aria-label="Search icons" className="search" onChange={(e) => setInput(e.target.value)} placeholder="Search, e.g. calendar" type="search" value={input} />
          <label className="range">
            Size {size}
            <input max={96} min={16} onChange={(e) => setSize(Number(e.target.value))} type="range" value={size} />
          </label>
          <label className="range">
            Stroke {stroke}
            <input max={3} min={1} onChange={(e) => setStroke(Number(e.target.value))} step={0.25} type="range" value={stroke} />
          </label>
          <button aria-expanded={showLog} className="button" onClick={() => setShowLog(!showLog)} type="button">
            Changelog
          </button>
          <button className="button" onClick={playVisible} type="button">
            Play visible
          </button>
          <button className="button" onClick={() => setTheme(theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK)} type="button">
            {theme === ThemeEnum.DARK ? "Light" : "Dark"}
          </button>
        </div>
        <nav aria-label="Pages by first letter" className="letters">
          <button aria-pressed={letter === ALL} className="letter" disabled={!!q} onClick={() => goTo(ALL)} type="button">
            All
          </button>
          {LETTERS.map((l) => (
            <button
              aria-pressed={letter === l}
              className="letter"
              disabled={!!q || !letterCounts.get(l)}
              key={l}
              onClick={() => goTo(l)}
              title={`${letterCounts.get(l) ?? 0} icons`}
              type="button"
            >
              {l}
            </button>
          ))}
        </nav>
        <p className="hint">
          Showing {names.length}
          {q ? " matches across all letters" : letter === ALL ? "" : ` starting with ${letter}`}
          {category === ALL ? "" : ` in ${categoryLabel(category)}`}
          {version === ALL ? "" : version === FIRST_VERSION ? ` from ${version}` : ` new in ${version}`}.
        </p>
      </header>
      {showLog && (
        <Changelog
          onShow={(v) => {
            setVersion(v);
            setLetter(ALL);
            setShowLog(false);
            window.scrollTo({ top: 0 });
          }}
        />
      )}
      <Grid names={names} size={size} stroke={stroke} />
      {!q && letter !== ALL && (
        <footer className="pager">
          {(() => {
            const pages = LETTERS.filter((l) => letterCounts.get(l));
            const i = pages.indexOf(letter);
            return (
              <>
                {i > 0 && (
                  <button className="button" onClick={() => goTo(pages[i - 1])} type="button">
                    ← {pages[i - 1]}
                  </button>
                )}
                {i >= 0 && i < pages.length - 1 && (
                  <button className="button" onClick={() => goTo(pages[i + 1])} type="button">
                    {pages[i + 1]} →
                  </button>
                )}
              </>
            );
          })()}
        </footer>
      )}
    </div>
  );
}
