<script lang="ts">
  import type { Inline } from "../shared/catalog";

  import Inlines from "./Inlines.svelte";

  let { parts }: { parts: Inline[] } = $props();
</script>

{#each parts as part, i (i)}
  {#if part.kind === "code"}<code>{part.text}</code>{:else if part.kind === "strong"}<strong><Inlines parts={part.children} /></strong>{:else if part.kind === "link"}<a href={part.href} rel="noreferrer" target="_blank">{part.text}</a>{:else}{part.text}{/if}
{/each}
