import { useState } from "react";
import { ICON_NAMES, ICONS } from "pulsoicon/all";

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

export function App() {
  const [query, setQuery] = useState("");
  const [size, setSize] = useState(32);
  const [stroke, setStroke] = useState(2);
  const [theme, setTheme] = useState(() => (window.matchMedia("(prefers-color-scheme: dark)").matches ? ThemeEnum.DARK : ThemeEnum.LIGHT));

  const q = query.trim().toLowerCase();
  const names = ICON_NAMES.filter((name) => !q || name.includes(q));

  return (
    <div className="page" data-theme={theme}>
      <header className="bar">
        <div className="title">
          <h1>PulsoIcon</h1>
          <p>{ICON_NAMES.length} animated icons. Hover a card to play it.</p>
          {reducedMotion && <p className="warn">Your system asks for reduced motion, so icons will not animate. Turn it off to review.</p>}
        </div>
        <div className="controls">
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
        <p className="hint">Showing {names.length}.</p>
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
    </div>
  );
}
