import type { JSX } from "solid-js";
import type { Inline, ListItem } from "../shared/catalog";

import { BrandCitypulso } from "pulsoicon-solid";
import { ICONS } from "pulsoicon-solid/all";
import { createEffect, createMemo, createSignal, For, Index, onCleanup, Show } from "solid-js";
import { Dynamic } from "solid-js/web";

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

function Inlines(props: { parts: Inline[] }): JSX.Element {
  return (
    <Index each={props.parts}>
      {(part) => {
        const p = part();
        if (p.kind === "code") return <code>{p.text}</code>;
        if (p.kind === "strong")
          return (
            <strong>
              <Inlines parts={p.children} />
            </strong>
          );
        if (p.kind === "link")
          return (
            <a href={p.href} rel="noreferrer" target="_blank">
              {p.text}
            </a>
          );
        return p.text;
      }}
    </Index>
  );
}

function List(props: { items: ListItem[] }): JSX.Element {
  return (
    <ul>
      <For each={props.items}>
        {(item) => (
          <li>
            <Inlines parts={inlineOf(item.text)} />
            <Show when={item.children.length > 0}>
              <List items={item.children} />
            </Show>
          </li>
        )}
      </For>
    </ul>
  );
}

/** CHANGELOG.md; each release heading can filter the grid to its icons. */
function Changelog(props: { onShow: (version: string) => void }): JSX.Element {
  return (
    <section class="changelog">
      <For each={CHANGELOG_BLOCKS}>
        {(block) => {
          if (block.kind === "h2")
            return (
              <h2>
                {block.text}
                <Show when={block.show}>
                  {(show) => (
                    <button class="button small" onClick={() => props.onShow(show().group)} type="button">
                      {show().label}
                    </button>
                  )}
                </Show>
              </h2>
            );
          if (block.kind === "h3") return <h3>{block.text}</h3>;
          if (block.kind === "p")
            return (
              <p>
                <Inlines parts={inlineOf(block.text)} />
              </p>
            );
          return <List items={block.items} />;
        }}
      </For>
    </section>
  );
}

function Card(props: { name: string; size: number; stroke: number }): JSX.Element {
  const Icon = ICONS[props.name];
  return (
    <div class="card" data-icon-trigger>
      <div class="pair">
        <div class="cell" title="Outline">
          <Dynamic component={Icon} size={props.size} strokeWidth={props.stroke} />
        </div>
        <div class="cell" title="Solid">
          <Dynamic component={Icon} size={props.size} solid strokeWidth={props.stroke} />
        </div>
      </div>
      <div class="name">
        {props.name}
        <span class={`tag review-${reviewOf(props.name)}`}>{reviewOf(props.name)}</span>
        <Show when={versionOf(props.name) !== FIRST_VERSION}>
          <span class="tag">{versionOf(props.name)}</span>
        </Show>
      </div>
    </div>
  );
}

/** Mounts the cards in batches as the page scrolls, so a long page or search stays responsive. */
function Grid(props: { names: readonly string[]; size: number; stroke: number }): JSX.Element {
  const [count, setCount] = createSignal(BATCH);
  const [end, setEnd] = createSignal<HTMLDivElement>();
  createEffect(() => {
    void props.names;
    setCount(BATCH);
  });
  createEffect(() => {
    const el = end();
    if (!el || count() >= props.names.length) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setCount((c) => c + BATCH), { rootMargin: "800px" });
    observer.observe(el);
    onCleanup(() => observer.disconnect());
  });
  return (
    <main class="grid">
      <For each={props.names.slice(0, count())}>{(name) => <Card name={name} size={props.size} stroke={props.stroke} />}</For>
      <Show when={count() < props.names.length}>
        <div aria-hidden="true" class="more" ref={setEnd} />
      </Show>
    </main>
  );
}

export function App(): JSX.Element {
  const [input, setInput] = createSignal("");
  const [query, setQuery] = createSignal("");
  const [review, setReview] = createSignal(ALL);
  const [size, setSize] = createSignal(32);
  const [stroke, setStroke] = createSignal(2);
  const [theme, setTheme] = createSignal(initialTheme());
  const [letter, setLetter] = createSignal("A");
  const [category, setCategory] = createSignal(ALL);
  const [version, setVersion] = createSignal(ALL);
  const [showLog, setShowLog] = createSignal(false);

  createEffect(() => {
    const value = input();
    const timer = window.setTimeout(() => setQuery(value), SEARCH_DEBOUNCE_MS);
    onCleanup(() => window.clearTimeout(timer));
  });

  const filters = () => ({ category: category(), version: version(), review: review() });
  const inCategory = createMemo(() => filterIcons(filters()));
  const names = createMemo(() => visibleIcons(inCategory(), query(), letter()));
  const counts = createMemo(() => letterCounts(inCategory()));
  const searching = () => !!query().trim();
  const pages = () => neighbours(counts(), letter());

  const goTo = (to: string) => {
    setLetter(to);
    window.scrollTo({ top: 0 });
  };

  return (
    <div class="page" data-theme={theme()}>
      <header class="bar">
        <div class="title">
          <h1 class="brand" data-icon-trigger title="PulsoIcon by CityPulso">
            PulsoIcon
            <BrandCitypulso class="company" size={26} />
            {/* The CityPulso bars use the logo's orange gradient (see .company in app.css). */}
            <svg aria-hidden="true" height="0" style={{ position: "absolute" }} width="0">
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="citypulso-orange" x1="0" x2="0" y1="14" y2="3">
                  <stop offset="0" stop-color="#e8412c" />
                  <stop offset="1" stop-color="#f7941d" />
                </linearGradient>
              </defs>
            </svg>
          </h1>
          <nav aria-label="Framework" class="frameworks">
            <For each={FRAMEWORKS}>
              {(f) => (
                <a aria-current={f.id === FrameworkEnum.SOLID ? "page" : undefined} href={frameworkUrl(f.port)}>
                  {f.label}
                </a>
              )}
            </For>
          </nav>
          <p>{ICON_NAMES.length} animated icons. Hover a card to play it.</p>
          <Show when={reducedMotion}>
            <p class="warn">Your system asks for reduced motion, so icons will not animate. Turn it off to review.</p>
          </Show>
        </div>
        <div class="controls">
          <select aria-label="Category" class="select" onChange={(e) => setCategory(e.currentTarget.value)} value={category()}>
            <option value={ALL}>All categories ({ICON_NAMES.length})</option>
            <For each={CATEGORY_NAMES}>
              {(c) => (
                <option value={c}>
                  {categoryLabel(c)} ({CATEGORY_COUNTS.get(c)})
                </option>
              )}
            </For>
          </select>
          <select aria-label="Version" class="select" onChange={(e) => setVersion(e.currentTarget.value)} value={version()}>
            <option value={ALL}>All versions ({ICON_NAMES.length})</option>
            <For each={VERSION_NAMES}>{(v) => <option value={v}>{versionOptionLabel(v)}</option>}</For>
          </select>
          <select aria-label="Solid review" class="select" onChange={(e) => setReview(e.currentTarget.value)} value={review()}>
            <option value={ALL}>All solid states</option>
            <For each={REVIEW_STATES}>
              {(s) => (
                <option value={s}>
                  {s} ({REVIEW_COUNTS.get(s) ?? 0})
                </option>
              )}
            </For>
          </select>
          <input aria-label="Search icons" class="search" onInput={(e) => setInput(e.currentTarget.value)} placeholder="Search, e.g. calendar" type="search" value={input()} />
          <label class="range">
            Size {size()}
            <input max={96} min={16} onInput={(e) => setSize(Number(e.currentTarget.value))} type="range" value={size()} />
          </label>
          <label class="range">
            Stroke {stroke()}
            <input max={3} min={1} onInput={(e) => setStroke(Number(e.currentTarget.value))} step={0.25} type="range" value={stroke()} />
          </label>
          <button aria-expanded={showLog()} class="button" onClick={() => setShowLog(!showLog())} type="button">
            Changelog
          </button>
          <button class="button" onClick={playVisible} type="button">
            Play visible
          </button>
          <button class="button" onClick={() => setTheme(theme() === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK)} type="button">
            {theme() === ThemeEnum.DARK ? "Light" : "Dark"}
          </button>
        </div>
        <nav aria-label="Pages by first letter" class="letters">
          <button aria-pressed={letter() === ALL} class="letter" disabled={searching()} onClick={() => goTo(ALL)} type="button">
            All
          </button>
          <For each={LETTERS}>
            {(l) => (
              <button
                aria-pressed={letter() === l}
                class="letter"
                disabled={searching() || !counts().get(l)}
                onClick={() => goTo(l)}
                title={`${counts().get(l) ?? 0} icons`}
                type="button"
              >
                {l}
              </button>
            )}
          </For>
        </nav>
        <p class="hint">{hint(names().length, filters(), query(), letter())}</p>
      </header>
      <Show when={showLog()}>
        <Changelog
          onShow={(v) => {
            setVersion(v);
            setLetter(ALL);
            setShowLog(false);
            window.scrollTo({ top: 0 });
          }}
        />
      </Show>
      <Grid names={names()} size={size()} stroke={stroke()} />
      <Show when={!searching() && letter() !== ALL}>
        <footer class="pager">
          <Show when={pages().previous}>
            {(previous) => (
              <button class="button" onClick={() => goTo(previous())} type="button">
                ← {previous()}
              </button>
            )}
          </Show>
          <Show when={pages().next}>
            {(next) => (
              <button class="button" onClick={() => goTo(next())} type="button">
                {next()} →
              </button>
            )}
          </Show>
        </footer>
      </Show>
    </div>
  );
}
