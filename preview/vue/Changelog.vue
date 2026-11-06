<script setup lang="ts">
import { CHANGELOG_BLOCKS, inline } from "../shared/catalog";
import ChangelogList from "./ChangelogList.vue";
import Inlines from "./Inlines.vue";

/** CHANGELOG.md; each release heading can filter the grid to its icons. */
const emit = defineEmits<{ show: [version: string] }>();
</script>

<template>
  <section class="changelog">
    <template v-for="(block, i) in CHANGELOG_BLOCKS" :key="i">
      <h2 v-if="block.kind === 'h2'">
        {{ block.text }}
        <button v-if="block.show" class="button small" type="button" @click="emit('show', block.show.group)">{{ block.show.label }}</button>
      </h2>
      <h3 v-else-if="block.kind === 'h3'">{{ block.text }}</h3>
      <p v-else-if="block.kind === 'p'"><Inlines :parts="inline(block.text)" /></p>
      <ChangelogList v-else :items="block.items" />
    </template>
  </section>
</template>
