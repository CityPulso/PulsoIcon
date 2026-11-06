<script setup lang="ts">
import type { Inline } from "../shared/catalog";

defineProps<{ parts: Inline[] }>();
</script>

<template>
  <template v-for="(part, i) in parts" :key="i">
    <code v-if="part.kind === 'code'">{{ part.text }}</code>
    <strong v-else-if="part.kind === 'strong'"><Inlines :parts="part.children" /></strong>
    <a v-else-if="part.kind === 'link'" :href="part.href" rel="noreferrer" target="_blank">{{ part.text }}</a>
    <template v-else>{{ part.text }}</template>
  </template>
</template>
