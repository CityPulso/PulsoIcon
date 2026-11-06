<script lang="ts">
  import { BrandCitypulso } from "pulsoicon-svelte";

  import {
    ALL,
    CATEGORY_COUNTS,
    CATEGORY_NAMES,
    categoryLabel,
    FrameworkEnum,
    FRAMEWORKS,
    frameworkUrl,
    filterIcons,
    hint,
    ICON_NAMES,
    initialTheme,
    letterCounts,
    LETTERS,
    neighbours,
    playVisible,
    reducedMotion,
    REVIEW_COUNTS,
    REVIEW_STATES,
    SEARCH_DEBOUNCE_MS,
    ThemeEnum,
    VERSION_NAMES,
    versionOptionLabel,
    visibleIcons,
  } from "../shared/catalog";
  import Changelog from "./Changelog.svelte";
  import Grid from "./Grid.svelte";

  let input = $state("");
  let query = $state("");
  let review = $state(ALL);
  let size = $state(32);
  let stroke = $state(2);
  let theme = $state(initialTheme());
  let letter = $state("A");
  let category = $state(ALL);
  let version = $state(ALL);
  let showLog = $state(false);

  $effect(() => {
    const value = input;
    const timer = window.setTimeout(() => (query = value), SEARCH_DEBOUNCE_MS);
    return () => window.clearTimeout(timer);
  });

  const filters = $derived({ category, version, review });
  const inCategory = $derived(filterIcons(filters));
  const names = $derived(visibleIcons(inCategory, query, letter));
  const counts = $derived(letterCounts(inCategory));
  const searching = $derived(!!query.trim());
  const pages = $derived(neighbours(counts, letter));

  const goTo = (to: string) => {
    letter = to;
    window.scrollTo({ top: 0 });
  };

  const showVersion = (v: string) => {
    version = v;
    letter = ALL;
    showLog = false;
    window.scrollTo({ top: 0 });
  };
</script>

<div class="page" data-theme={theme}>
  <header class="bar">
    <div class="title">
      <h1 class="brand" data-icon-trigger title="PulsoIcon by CityPulso">
        PulsoIcon
        <BrandCitypulso class="company" size={26} />
        <!-- The CityPulso bars use the logo's orange gradient (see .company in app.css). -->
        <svg aria-hidden="true" height="0" style="position: absolute" width="0">
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="citypulso-orange" x1="0" x2="0" y1="14" y2="3">
              <stop offset="0" stop-color="#e8412c" />
              <stop offset="1" stop-color="#f7941d" />
            </linearGradient>
          </defs>
        </svg>
      </h1>
      <nav aria-label="Framework" class="frameworks">
        {#each FRAMEWORKS as f (f.id)}
          <a aria-current={f.id === FrameworkEnum.SVELTE ? "page" : undefined} href={frameworkUrl(f.port)}>{f.label}</a>
        {/each}
      </nav>
      <p>{ICON_NAMES.length} animated icons. Hover a card to play it.</p>
      {#if reducedMotion}<p class="warn">Your system asks for reduced motion, so icons will not animate. Turn it off to review.</p>{/if}
    </div>
    <div class="controls">
      <select aria-label="Category" bind:value={category} class="select">
        <option value={ALL}>All categories ({ICON_NAMES.length})</option>
        {#each CATEGORY_NAMES as c (c)}<option value={c}>{categoryLabel(c)} ({CATEGORY_COUNTS.get(c)})</option>{/each}
      </select>
      <select aria-label="Version" bind:value={version} class="select">
        <option value={ALL}>All versions ({ICON_NAMES.length})</option>
        {#each VERSION_NAMES as v (v)}<option value={v}>{versionOptionLabel(v)}</option>{/each}
      </select>
      <select aria-label="Solid review" bind:value={review} class="select">
        <option value={ALL}>All solid states</option>
        {#each REVIEW_STATES as s (s)}<option value={s}>{s} ({REVIEW_COUNTS.get(s) ?? 0})</option>{/each}
      </select>
      <input aria-label="Search icons" bind:value={input} class="search" placeholder="Search, e.g. calendar" type="search" />
      <label class="range">
        Size {size}
        <input bind:value={size} max="96" min="16" type="range" />
      </label>
      <label class="range">
        Stroke {stroke}
        <input bind:value={stroke} max="3" min="1" step="0.25" type="range" />
      </label>
      <button aria-expanded={showLog} class="button" onclick={() => (showLog = !showLog)} type="button">Changelog</button>
      <button class="button" onclick={playVisible} type="button">Play visible</button>
      <button class="button" onclick={() => (theme = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK)} type="button">
        {theme === ThemeEnum.DARK ? "Light" : "Dark"}
      </button>
    </div>
    <nav aria-label="Pages by first letter" class="letters">
      <button aria-pressed={letter === ALL} class="letter" disabled={searching} onclick={() => goTo(ALL)} type="button">All</button>
      {#each LETTERS as l (l)}
        <button aria-pressed={letter === l} class="letter" disabled={searching || !counts.get(l)} onclick={() => goTo(l)} title="{counts.get(l) ?? 0} icons" type="button">{l}</button>
      {/each}
    </nav>
    <p class="hint">{hint(names.length, filters, query, letter)}</p>
  </header>
  {#if showLog}<Changelog onshow={showVersion} />{/if}
  <Grid {names} {size} {stroke} />
  {#if !searching && letter !== ALL}
    <footer class="pager">
      {#if pages.previous}
        {@const previous = pages.previous}
        <button class="button" onclick={() => goTo(previous)} type="button">← {previous}</button>
      {/if}
      {#if pages.next}
        {@const next = pages.next}
        <button class="button" onclick={() => goTo(next)} type="button">{next} →</button>
      {/if}
    </footer>
  {/if}
</div>
