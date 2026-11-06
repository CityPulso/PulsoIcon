<script setup lang="ts">
import type { ListItem } from "../shared/catalog";

import { inline } from "../shared/catalog";
import Inlines from "./Inlines.vue";

defineProps<{ items: ListItem[] }>();
</script>

<template>
  <ul>
    <li v-for="(item, i) in items" :key="i">
      <Inlines :parts="inline(item.text)" />
      <ChangelogList v-if="item.children.length" :items="item.children" />
    </li>
  </ul>
</template>
