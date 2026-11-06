<script setup lang="ts">
import { BrandCitypulso } from "pulsoicon-vue";
import { computed, ref, watch } from "vue";

import {
  ALL,
  CATEGORY_COUNTS,
  CATEGORY_NAMES,
  categoryLabel,
  filterIcons,
  FrameworkEnum,
  FRAMEWORKS,
  frameworkUrl,
  hint,
  ICON_NAMES,
  initialTheme,
  letterCounts,
  LETTERS,
  neighbours,
  playVisible,
  reducedMotion,
  REVIEW_COUNTS,
  REVIEW_STATES,
  SEARCH_DEBOUNCE_MS,
  ThemeEnum,
  VERSION_NAMES,
  versionOptionLabel,
  visibleIcons,
} from "../shared/catalog";
import Changelog from "./Changelog.vue";
import Grid from "./Grid.vue";

const input = ref("");
const query = ref("");
const review = ref(ALL);
const size = ref(32);
const stroke = ref(2);
const theme = ref(initialTheme());
const letter = ref("A");
const category = ref(ALL);
const version = ref(ALL);
const showLog = ref(false);

let timer = 0;
watch(input, (value) => {
  window.clearTimeout(timer);
  timer = window.setTimeout(() => (query.value = value), SEARCH_DEBOUNCE_MS);
});

const filters = computed(() => ({ category: category.value, version: version.value, review: review.value }));
const inCategory = computed(() => filterIcons(filters.value));
const names = computed(() => visibleIcons(inCategory.value, query.value, letter.value));
const counts = computed(() => letterCounts(inCategory.value));
const searching = computed(() => !!query.value.trim());
const pages = computed(() => neighbours(counts.value, letter.value));

const goTo = (to: string) => {
  letter.value = to;
  window.scrollTo({ top: 0 });
};

const showVersion = (v: string) => {
  version.value = v;
  letter.value = ALL;
  showLog.value = false;
  window.scrollTo({ top: 0 });
};
</script>

<template>
  <div class="page" :data-theme="theme">
    <header class="bar">
      <div class="title">
        <h1 class="brand" data-icon-trigger title="PulsoIcon by CityPulso">
          PulsoIcon
          <BrandCitypulso class="company" :size="26" />
          <!-- The CityPulso bars use the logo's orange gradient (see .company in app.css). -->
          <svg aria-hidden="true" height="0" style="position: absolute" width="0">
            <defs>
              <linearGradient id="citypulso-orange" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="14" y2="3">
                <stop offset="0" stop-color="#e8412c" />
                <stop offset="1" stop-color="#f7941d" />
              </linearGradient>
            </defs>
          </svg>
        </h1>
        <nav aria-label="Framework" class="frameworks">
          <a v-for="f in FRAMEWORKS" :key="f.id" :aria-current="f.id === FrameworkEnum.VUE ? 'page' : undefined" :href="frameworkUrl(f.port)">{{ f.label }}</a>
        </nav>
        <p>{{ ICON_NAMES.length }} animated icons. Hover a card to play it.</p>
        <p v-if="reducedMotion" class="warn">Your system asks for reduced motion, so icons will not animate. Turn it off to review.</p>
      </div>
      <div class="controls">
        <select v-model="category" aria-label="Category" class="select">
          <option :value="ALL">All categories ({{ ICON_NAMES.length }})</option>
          <option v-for="c in CATEGORY_NAMES" :key="c" :value="c">{{ categoryLabel(c) }} ({{ CATEGORY_COUNTS.get(c) }})</option>
        </select>
        <select v-model="version" aria-label="Version" class="select">
          <option :value="ALL">All versions ({{ ICON_NAMES.length }})</option>
          <option v-for="v in VERSION_NAMES" :key="v" :value="v">{{ versionOptionLabel(v) }}</option>
        </select>
        <select v-model="review" aria-label="Solid review" class="select">
          <option :value="ALL">All solid states</option>
          <option v-for="s in REVIEW_STATES" :key="s" :value="s">{{ s }} ({{ REVIEW_COUNTS.get(s) ?? 0 }})</option>
        </select>
        <input v-model="input" aria-label="Search icons" class="search" placeholder="Search, e.g. calendar" type="search" />
        <label class="range">
          Size {{ size }}
          <input v-model.number="size" max="96" min="16" type="range" />
        </label>
        <label class="range">
          Stroke {{ stroke }}
          <input v-model.number="stroke" max="3" min="1" step="0.25" type="range" />
        </label>
        <button :aria-expanded="showLog" class="button" type="button" @click="showLog = !showLog">Changelog</button>
        <button class="button" type="button" @click="playVisible">Play visible</button>
        <button class="button" type="button" @click="theme = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK">
          {{ theme === ThemeEnum.DARK ? "Light" : "Dark" }}
        </button>
      </div>
      <nav aria-label="Pages by first letter" class="letters">
        <button :aria-pressed="letter === ALL" class="letter" :disabled="searching" type="button" @click="goTo(ALL)">All</button>
        <button
          v-for="l in LETTERS"
          :key="l"
          :aria-pressed="letter === l"
          class="letter"
          :disabled="searching || !counts.get(l)"
          :title="`${counts.get(l) ?? 0} icons`"
          type="button"
          @click="goTo(l)"
        >
          {{ l }}
        </button>
      </nav>
      <p class="hint">{{ hint(names.length, filters, query, letter) }}</p>
    </header>
    <Changelog v-if="showLog" @show="showVersion" />
    <Grid :names="names" :size="size" :stroke="stroke" />
    <footer v-if="!searching && letter !== ALL" class="pager">
      <button v-if="pages.previous" class="button" type="button" @click="goTo(pages.previous)">← {{ pages.previous }}</button>
      <button v-if="pages.next" class="button" type="button" @click="goTo(pages.next)">{{ pages.next }} →</button>
    </footer>
  </div>
</template>
