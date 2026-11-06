<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";

import { BATCH } from "../shared/catalog";
import Card from "./Card.vue";

/** Mounts the cards in batches as the page scrolls, so a long page or search stays responsive. */
const props = defineProps<{ names: readonly string[]; size: number; stroke: number }>();
const count = ref(BATCH);
const end = ref<HTMLDivElement>();
watch(
  () => props.names,
  () => (count.value = BATCH),
);
watchEffect((onCleanup) => {
  const el = end.value;
  if (!el || count.value >= props.names.length) return;
  const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && (count.value += BATCH), { rootMargin: "800px" });
  observer.observe(el);
  onCleanup(() => observer.disconnect());
});
</script>

<template>
  <main class="grid">
    <Card v-for="name in names.slice(0, count)" :key="name" :name="name" :size="size" :stroke="stroke" />
    <div v-if="count < names.length" ref="end" aria-hidden="true" class="more" />
  </main>
</template>
