<script lang="ts">
  import { BATCH } from "../shared/catalog";
  import Card from "./Card.svelte";

  /** Mounts the cards in batches as the page scrolls, so a long page or search stays responsive. */
  let { names, size, stroke }: { names: readonly string[]; size: number; stroke: number } = $props();
  let shown = $state({ names: [] as readonly string[], count: BATCH });
  const count = $derived(shown.names === names ? shown.count : BATCH);
  let end = $state<HTMLDivElement>();

  $effect(() => {
    const el = end;
    const list = names;
    const current = count;
    if (!el || current >= list.length) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && (shown = { names: list, count: current + BATCH }), { rootMargin: "800px" });
    observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<main class="grid">
  {#each names.slice(0, count) as name (name)}
    <Card {name} {size} {stroke} />
  {/each}
  {#if count < names.length}<div aria-hidden="true" class="more" bind:this={end}></div>{/if}
</main>
