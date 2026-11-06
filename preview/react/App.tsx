import type { ReactNode } from "react";
import type { Inline, ListItem } from "../shared/catalog";

import { memo, useEffect, useMemo, useRef, useState } from "react";
import { BrandCitypulso } from "pulsoicon-react";
import { ICONS } from "pulsoicon-react/all";

import {
  ALL,
  BATCH,
  CATEGORY_COUNTS,
  CATEGORY_NAMES,
  categoryLabel,
  CHANGELOG_BLOCKS,
  filterIcons,
  FIRST_VERSION,
  FrameworkEnum,
  FRAMEWORKS,
  frameworkUrl,
  hint,
  ICON_NAMES,
  initialTheme,
  inline as inlineOf,
  letterCounts,
  LETTERS,
  neighbours,
  playVisible,
  reducedMotion,
  REVIEW_COUNTS,
  REVIEW_STATES,
  reviewOf,
  SEARCH_DEBOUNCE_MS,
  ThemeEnum,
  VERSION_NAMES,
  versionOf,
  versionOptionLabel,
  visibleIcons,
} from "../shared/catalog";

function Inlines({ parts }: { parts: Inline[] }): ReactNode {
  return parts.map((part, i) => {
    if (part.kind === "code") return <code key={i}>{part.text}</code>;
    if (part.kind === "strong")
      return (
        <strong key={i}>
          <Inlines parts={part.children} />
        </strong>
      );
    if (part.kind === "link")
      return (
        <a href={part.href} key={i} rel="noreferrer" target="_blank">
          {part.text}
        </a>
      );
    return part.text;
  });
}

function List({ items }: { items: ListItem[] }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <Inlines parts={inlineOf(item.text)} />
          {item.children.length > 0 && <List items={item.children} />}
        </li>
      ))}
    </ul>
  );
}

/** CHANGELOG.md; each release heading can filter the grid to its icons. */
function Changelog({ onShow }: { onShow: (version: string) => void }) {
  return (
    <section className="changelog">
      {CHANGELOG_BLOCKS.map((block, i) => {
        if (block.kind === "h2")
          return (
            <h2 key={i}>
              {block.text}
              {block.show && (
                <button className="button small" onClick={() => onShow(block.show!.group)} type="button">
                  {block.show.label}
                </button>
              )}
            </h2>
          );
        if (block.kind === "h3") return <h3 key={i}>{block.text}</h3>;
        if (block.kind === "p")
          return (
            <p key={i}>
              <Inlines parts={inlineOf(block.text)} />
            </p>
          );
        return <List items={block.items} key={i} />;
      })}
    </section>
  );
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
  const [theme, setTheme] = useState(initialTheme);
  const [letter, setLetter] = useState("A");
  const [category, setCategory] = useState(ALL);
  const [version, setVersion] = useState(ALL);
  const [showLog, setShowLog] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setQuery(input), SEARCH_DEBOUNCE_MS);
    return () => window.clearTimeout(timer);
  }, [input]);

  const filters = { category, version, review };
  const inCategory = useMemo(() => filterIcons({ category, version, review }), [category, version, review]);
  const names = useMemo(() => visibleIcons(inCategory, query, letter), [inCategory, query, letter]);
  const counts = useMemo(() => letterCounts(inCategory), [inCategory]);
  const searching = !!query.trim();
  const { previous, next } = neighbours(counts, letter);

  const goTo = (to: string) => {
    setLetter(to);
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
          <nav aria-label="Framework" className="frameworks">
            {FRAMEWORKS.map((f) => (
              <a aria-current={f.id === FrameworkEnum.REACT ? "page" : undefined} href={frameworkUrl(f.port)} key={f.id}>
                {f.label}
              </a>
            ))}
          </nav>
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
                {versionOptionLabel(v)}
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
          <button aria-pressed={letter === ALL} className="letter" disabled={searching} onClick={() => goTo(ALL)} type="button">
            All
          </button>
          {LETTERS.map((l) => (
            <button
              aria-pressed={letter === l}
              className="letter"
              disabled={searching || !counts.get(l)}
              key={l}
              onClick={() => goTo(l)}
              title={`${counts.get(l) ?? 0} icons`}
              type="button"
            >
              {l}
            </button>
          ))}
        </nav>
        <p className="hint">{hint(names.length, filters, query, letter)}</p>
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
      {!searching && letter !== ALL && (
        <footer className="pager">
          {previous && (
            <button className="button" onClick={() => goTo(previous)} type="button">
              ← {previous}
            </button>
          )}
          {next && (
            <button className="button" onClick={() => goTo(next)} type="button">
              {next} →
            </button>
          )}
        </footer>
      )}
    </div>
  );
}
