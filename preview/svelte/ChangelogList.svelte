<script lang="ts">
  import type { ListItem } from "../shared/catalog";

  import { inline } from "../shared/catalog";
  import ChangelogList from "./ChangelogList.svelte";
  import Inlines from "./Inlines.svelte";

  let { items }: { items: ListItem[] } = $props();
</script>

<ul>
  {#each items as item, i (i)}
    <li>
      <Inlines parts={inline(item.text)} />
      {#if item.children.length}<ChangelogList items={item.children} />{/if}
    </li>
  {/each}
</ul>
