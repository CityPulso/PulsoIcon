<script lang="ts">
  import { ICONS } from "pulsoicon-svelte/all";

  import { FIRST_VERSION, reviewOf, versionOf } from "../shared/catalog";

  let { name, size, stroke }: { name: string; size: number; stroke: number } = $props();
  const Icon = $derived(ICONS[name]);
</script>

<div class="card" data-icon-trigger>
  <div class="pair">
    <div class="cell" title="Outline"><Icon {size} strokeWidth={stroke} /></div>
    <div class="cell" title="Solid"><Icon {size} solid strokeWidth={stroke} /></div>
  </div>
  <div class="name">
    {name}
    <span class="tag review-{reviewOf(name)}">{reviewOf(name)}</span>
    {#if versionOf(name) !== FIRST_VERSION}<span class="tag">{versionOf(name)}</span>{/if}
  </div>
</div>
