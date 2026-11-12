# Changelog

## 6.2.0

### Added

- **Four more web packages**, drawing the same 9955 icons with the same motion and props as React:
  - `pulsoicon-solid` (Solid 1.8+): reactive props, `ref` handle, server rendering.
  - `pulsoicon-preact` (Preact 10.11+ and 11): `ref` handle, no React aliasing needed.
  - `pulsoicon-angular` (Angular 19+): a standalone `<pulso-icon [icon]="Bell">` component and an `svg[pulsoIcon]`
    directive sharing one engine; each icon is a data object you import, so bundles keep only the icons used. Built
    with ng-packagr (Angular Package Format, partial Ivy), safe under SSR, with a `label` input for standalone icons.
  - `pulsoicon-astro` (Astro 5+): server-rendered `.astro` components; each icon on the page adds one small script
    for its motion, and `getIconHandle()` from `pulsoicon-astro/client` plays it from code.
- A gallery for each of them (`npm run preview:solid`, `preview:preact`, `preview:angular`, `preview:astro`), and Solid
  and Preact in the browser parity test.

## 6.1.0

### Fixed

- **Swift: icons drawn with SVG paths were blank.** `SVGPath(string:)` flips the y axis by default, so every `<path>`
  was drawn above the canvas and only circles, rects and lines showed. Paths now parse with SVG's own y axis (down).
  A macOS render test draws a path-only icon so this cannot come back unnoticed.

## 6.0.2

### Fixed

- **pulsoicon-vue: `play` did nothing.** Changing `play` rebuilt the icon's player and stopped the motion it had just
  started. The icon now plays when `play` turns `true`, as in React and Svelte.
- The browser parity test also plays icons through the `play` prop, and its number comparison no longer reads the dots
  of `www.w3.org` as numbers.

## 6.0.1

### Breaking

- **The React package is now `pulsoicon-react`** (it was `pulsoicon` until 5.2.1), next to `pulsoicon-vue` and
  `pulsoicon-svelte`. Only the package name changes: replace `"pulsoicon"` with `"pulsoicon-react"` in your imports.

### Added

- **Every platform from one repository**, all drawing the same 9955 icons with the same motion and the React props:
  - `pulsoicon-vue` (Vue 3.5+) and `pulsoicon-svelte` (Svelte 5): the same `<svg>` as React, played with Motion's `animate()`.
  - `com.citypulso:pulsoicon-compose` (Android, Jetpack Compose) and the `PulsoIcon` Swift package (SwiftUI), with solid
    icons, every recipe and the icons' own transforms and dashes.
  - `pulsoicon-core`: the icon data, recipes and solid drawings the packages share.
- **`<package>/names`**: every icon key without loading any icon, for pickers that load icons on demand.
- Preview: one gallery per framework (`npm run preview:react`, `preview:vue`, `preview:svelte`).

### Changed

- The repository is an npm workspace: icons live in `packages/core/src/icons/<name>.ts` (`icon(...)` instead of
  `createIcon(...)`), aliases in `packages/core/src/aliases.ts`. The React package renders exactly as 5.2.1 did.
- One version for every package, set in the root `package.json`; CI publishes npm and Maven Central and tags the Swift
  release when it changes.

## 5.0.0

### Added

- **`solid`**: every icon can be drawn filled. **1712 icons** have a filled drawing taken from the
  [Tabler](https://tabler.io/icons) filled set (3.50, MIT) or the [Phosphor](https://phosphoricons.com) fill weight (MIT).
  The others fill their closed shapes and cut their inner lines out of the fill. On filled shapes, motions that draw a
  stroke on pop in instead.
- **`autoAnimated`** (default `true`): `false` turns off the built-in hover / focus trigger, so only your code plays the icon.
- **`play`**: plays the motion when it turns `true` and returns to rest when it turns `false`, with or without `autoAnimated`.
- Types `BaseIconProps`, `AnimationProps` and `DistributiveOmit`.
- Preview: a Solid toggle.

### Breaking

- **`animated={false}` now keeps the icon completely still**: `startAnimation()` and `play` do nothing. To play an icon
  only from code, use `autoAnimated={false}` instead.
- `IconProps` is now a type rather than an interface, so `<Bell animated={false} play />` is a type error. Replace
  `interface MyProps extends IconProps` with `type MyProps = IconProps & { … }`, and `Omit<IconProps, …>` with
  `DistributiveOmit<IconProps, …>`.

## 4.0.0

**9955 icons** (+3624).

### Added

- **491 icons from [Iconoir](https://iconoir.com)** (7.12, MIT). Their shapes were converted to our format, and each was given
  its own motion.
- **Lowercase letters a–z** (`letter-a-lowercase` … `letter-z-lowercase`, also `LowercaseA` …), drawn in the same
  stroke style as the uppercase set; the strokes write themselves in.
- **290 icons drawn after [Phosphor](https://phosphoricons.com)** (MIT) and **216 icons drawn from scratch** for concepts
  other sets have but we lacked: messages, files, finance, media, weather, people and more.
- **2601 brand logos**, for **3042** in total. Most are single-weight line drawings made after the logos collected by
  [Simple Icons](https://simpleicons.org), each with its own motion. They are exported only with the `Brand` prefix
  (`BrandNetflix`), because many brand names are ordinary words.
- **About 1300 aliases**: other sets' names for icons we already had (`MailOpened` is `MailOpen`, `CurrencyYen` is
  `JapaneseYen`, `ChatCircle` is `MessageCircle`, …).
- Preview: versions are grouped by major (1.x, 2.x, 3.x).

### Notes

- Brand logos that could only be drawn as a single letter at 24px were left out; a lone "Q" or "B" doesn't identify
  a brand.
- Logos whose owners license them under terms other than CC0 are listed in [LICENSE](./LICENSE) with their license
  and source.

## 3.1.0

**6331 icons** (+3).

### Added

- `brand-citypulso` (`BrandCitypulso`, also `CityPulso`), the logo of CityPulso, the company behind PulsoIcon. The C draws in,
  the city bars rise and the P presses.
- `brand-cineplex` (`BrandCineplex`, also `Cineplex`): the Cineplex rings; the two open rings draw in and the centre pops.
- `brand-uber-text` (`BrandUberText`, also `UberText`), the Uber wordmark; the letters write themselves in. `brand-uber` stays the app symbol.
- Preview: the CityPulso mark next to the PulsoIcon title, with the logo's orange bars.
- Preview: a version filter, a version tag on every card added after 1.0.0, and this changelog, readable in the preview.

### Fixed

- **Arrow shafts draw in the direction the arrow points.** `draw` traces a stroke from where its path starts, and some
  shafts started at the arrowhead, so they drew backwards (e.g. `arrows-split` drew right to left). Two new recipes:
  - `drawBack`: draws a stroke from its end back to its start.
  - `drawOut`: grows a stroke from its middle towards both ends, for a shaft with a head at each end (`arrows-up-left`,
    `dimensions`).

  32 icons use them now, among them the `arrows-split*`, `arrow-bear-*`, `arrow-curve-*`, `arrow-elbow-*`,
  `arrow-ramp-*` and `arrow-roundabout-*` families, `trending-up`/`-down`, `merge` and the `git-pull-request-*` arrows.

## 3.0.0

**6328 icons** (+3769): Tabler Icons joins the set.

### Added

- **3505 icons from [Tabler Icons](https://tabler.io/icons)** (3.50, outline set). Every one has its own motion written
  for this set, like every other icon:
  - new concepts (alien, christmas-tree, prison, jetski, cash-register, scuba-mask, more currencies, …)
  - badge variants (`mail-dollar`, `monitor-cog`, `watch-heart`, …), where the same badge moves the same way in every family
  - `-off` variants, where the slash draws in
  - numbered alternates (`message-2`, `map-pin-2`, …)
  - letter, number, arrow and math families
- **264 brand logos from Tabler**, for **438 brand logos** in total.
- **711 Tabler names as aliases**, so code written for Tabler finds its icons without the `Icon` prefix:
  `IconHome` → `Home` (= `House`), `IconPhoto` → `Photo` (= `Image`), `IconMoodSad` → `MoodSad`.
  - Tabler icons that already existed under a Lucide name (350) were not added twice; the Tabler name points to the existing icon.
  - Tabler families follow Lucide's naming: `home-*` → `house-*`, `photo-*` → `image-*`, `world-*` → `globe-*`,
    `device-mobile-*` → `smartphone-*`, `mood-*` → `face-*`. The Tabler names stay available as aliases (`HomeDollar` is `HouseDollar`).
- Preview: Tabler's categories feed the category filter.

### Fixed

- **Shapes rotate and scale about their own pivot again.** Motion was replacing each shape's `transform-origin` with
  `50% 50%`, so every motion pivoted on the icon centre: the bell swung from its middle instead of its top, and gears
  orbited the icon instead of turning in place. Pivots are now passed as `originX` / `originY`. Motions look different
  (correct) after upgrading. A test now guards the pivot.

### Notes

- Each icon file adapted from Tabler starts with an `Adapted from Tabler Icons` comment; the MIT notice is in [LICENSE](./LICENSE).
- The npm package is 1.1 MB packed. Every icon is still its own module, so bundles only grow by the icons you import.

## 2.0.0

**2559 icons** (+473): the gaps compared with the other animated icon sets are filled in.

### Added

- **Lucide 1.68**:
  - `diagram-flow-horizontal`, `diagram-flow-vertical`, `globe-ban`, `globe-plus` and `mango`;
  - the 1.68 names for renamed icons (`CircleExclamationPoint`, `TriangleExclamationPoint`, `MailAlert`, …);
  - the deprecated `rail-symbol`.
- **346 icons drawn for this set**, covering what Animated Icons, AnimateIcons, LivelyIcons, ExodeUI and Lucide Animated
  had and PulsoIcon lacked:
  - commerce variants (shopping bag, cart, basket, store and wallet with plus, minus, check and x)
  - fingerprint, priority, upvote/downvote, clap
  - animals and nature, food and kitchen, clothing
  - sports, medical and accessibility
  - tools and home
  - gestures and emoji faces
  - gaming and charts
  - file-format badges, 3D/CAD, easing curves, borders and corners
- **121 brand logos**, for 174 in total: TikTok, Reddit, Claude, DeepSeek, Perplexity, Mistral, the Google, Apple,
  Microsoft and Adobe apps, VS Code, Vue, Svelte, Tailwind and more.
- About 160 aliases for common alternative names (`VolumeUp`, `Barbecue`, `FileDollar`, `Arc3D`, …).
- Preview:
  - A–Z letter pages, with previous/next buttons at the bottom;
  - a category filter with counts per category;
  - search across all letters.

### Changed

- 25 of the new icons were redrawn after review. Six of them use shapes adapted from Hugeicons and Iconoir (MIT, listed in LICENSE).
- `brand-microsoft-admin`: the gear makes a full turn and the squares stay still. Because of the pivot bug fixed in 3.0.0,
  the gear only turns in place from 3.0.0 on.

### Fixed

- A shape with an SVG `transform` attribute keeps it while animating (the runtime wraps it in a group).

## 1.0.3

- README: animated preview GIF.

## 1.0.2

- `.gitignore`: ignore `.backup`.

## 1.0.1

- Version bump only.

## 1.0.0

**2086 icons**, the first release.

- All 2015 Lucide icons (Lucide 1.66), 18 icons drawn for this set and 53 brand logos. Every icon has its own motion.
- Drop-in replacement for `lucide-react`: same component names, aliases and props.
- Plays on hover or focus of the closest button, link, label, tab or menu item, or any element marked `data-icon-trigger`.
- `startAnimation()` / `stopAnimation()` through a ref.
- Respects `prefers-reduced-motion`.
- 32 named motion recipes (`draw`, `ring`, `spin`, `swing`, …) exported as `RECIPES`.
- `pulsoicon/all` for icon pickers, and one module per icon (`pulsoicon/icons/<name>`).
