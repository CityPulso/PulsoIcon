<script lang="ts">
  import { CHANGELOG_BLOCKS, inline } from "../shared/catalog";
  import ChangelogList from "./ChangelogList.svelte";
  import Inlines from "./Inlines.svelte";

  /** CHANGELOG.md; each release heading can filter the grid to its icons. */
  let { onshow }: { onshow: (version: string) => void } = $props();
</script>

<section class="changelog">
  {#each CHANGELOG_BLOCKS as block, i (i)}
    {#if block.kind === "h2"}
      <h2>
        {block.text}
        {#if block.show}
          {@const show = block.show}
          <button class="button small" onclick={() => onshow(show.group)} type="button">{show.label}</button>
        {/if}
      </h2>
    {:else if block.kind === "h3"}
      <h3>{block.text}</h3>
    {:else if block.kind === "p"}
      <p><Inlines parts={inline(block.text)} /></p>
    {:else}
      <ChangelogList items={block.items} />
    {/if}
  {/each}
</section>
