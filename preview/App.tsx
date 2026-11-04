import { useState } from "react";
import { ICON_NAMES, ICONS } from "pulsoicon/all";

import CATEGORIES from "./categories.json";

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
/** "food-beverage" -> "Food & beverage". */
const categoryLabel = (c: string) => (c.charAt(0).toUpperCase() + c.slice(1)).replace("-beverage", " & beverage").replace(/-/g, " ");
const letterOf = (name: string) => name.charAt(0).toUpperCase();

export function App() {
  const [query, setQuery] = useState("");
  const [size, setSize] = useState(32);
  const [stroke, setStroke] = useState(2);
  const [theme, setTheme] = useState(() => (window.matchMedia("(prefers-color-scheme: dark)").matches ? ThemeEnum.DARK : ThemeEnum.LIGHT));

  const [letter, setLetter] = useState("A");
  const [category, setCategory] = useState(ALL);

  const q = query.trim().toLowerCase();
  // Search looks across every letter; the letter pages apply when the search box is empty.
  const inCategory = ICON_NAMES.filter((name) => category === ALL || categoriesOf(name).includes(category));
  const matching = inCategory.filter((name) => !q || name.includes(q));
  const names = q || letter === ALL ? matching : matching.filter((name) => letterOf(name) === letter);
  const letterCounts = new Map<string, number>();
  for (const name of inCategory) letterCounts.set(letterOf(name), (letterCounts.get(letterOf(name)) ?? 0) + 1);

  const goTo = (next: string) => {
    setLetter(next);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="page" data-theme={theme}>
      <header className="bar">
        <div className="title">
          <h1>PulsoIcon</h1>
          <p>{ICON_NAMES.length} animated icons. Hover a card to play it.</p>
          {reducedMotion && <p className="warn">Your system asks for reduced motion, so icons will not animate. Turn it off to review.</p>}
        </div>
        <div className="controls">
          <select aria-label="Category" className="select" onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value={ALL}>All categories ({ICON_NAMES.length})</option>
            {CATEGORY_NAMES.map((c) => (
              <option key={c} value={c}>
                {categoryLabel(c)} ({ICON_NAMES.filter((name) => categoriesOf(name).includes(c)).length})
              </option>
            ))}
          </select>
          <input aria-label="Search icons" className="search" onChange={(e) => setQuery(e.target.value)} placeholder="Search, e.g. calendar" type="search" value={query} />
          <label className="range">
            Size {size}
            <input max={64} min={16} onChange={(e) => setSize(Number(e.target.value))} type="range" value={size} />
          </label>
          <label className="range">
            Stroke {stroke}
            <input max={3} min={1} onChange={(e) => setStroke(Number(e.target.value))} step={0.25} type="range" value={stroke} />
          </label>
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
          {category === ALL ? "" : ` in ${categoryLabel(category)}`}.
        </p>
      </header>
      <main className="grid">
        {names.map((name) => {
          const Icon = ICONS[name];
          return (
            <div className="card" data-icon-trigger key={name}>
              <div className="cell">
                <Icon size={size} strokeWidth={stroke} />
              </div>
              <div className="name">{name}</div>
            </div>
          );
        })}
      </main>
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
