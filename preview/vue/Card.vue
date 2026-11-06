<script setup lang="ts">
import { ICONS } from "pulsoicon-vue/all";

import { FIRST_VERSION, reviewOf, versionOf } from "../shared/catalog";

const props = defineProps<{ name: string; size: number; stroke: number }>();
const Icon = ICONS[props.name];
</script>

<template>
  <div class="card" data-icon-trigger>
    <div class="pair">
      <div class="cell" title="Outline"><component :is="Icon" :size="size" :stroke-width="stroke" /></div>
      <div class="cell" title="Solid"><component :is="Icon" :size="size" solid :stroke-width="stroke" /></div>
    </div>
    <div class="name">
      {{ name }}
      <span :class="`tag review-${reviewOf(name)}`">{{ reviewOf(name) }}</span>
      <span v-if="versionOf(name) !== FIRST_VERSION" class="tag">{{ versionOf(name) }}</span>
    </div>
  </div>
</template>
