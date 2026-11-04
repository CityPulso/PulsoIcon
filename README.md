<p align="center">
  <img src="./logo.png" alt="PulsoIcon" width="160" />
</p>

<h1 align="center">PulsoIcon</h1>

<p align="center">
  <strong>6328 animated React icons. Every one has its own motion.</strong><br />
  A drop-in replacement for lucide-react icons that comes alive on hover.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/pulsoicon"><img src="https://img.shields.io/npm/v/pulsoicon?color=f2552c" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/pulsoicon"><img src="https://img.shields.io/npm/dm/pulsoicon?color=f2552c" alt="npm downloads" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/npm/l/pulsoicon?color=f2552c" alt="license" /></a>
</p>

---

<p align="center">
  <img src="./PulsoIcon_README_Loop.gif" alt="PulsoIcon icons animating on hover" width="720" />
</p>

A bell rings. A calendar lifts its rings. A trash can opens its lid. A clock's hand goes round.

PulsoIcon gives every icon a motion written for that icon, not one effect stamped on all of them. At rest each icon is a clean 24×24 icon; it plays when someone hovers or focuses the button, link or tab it sits in.

## Why PulsoIcon

- **6328 icons**: all 2020 Lucide icons (as of Lucide 1.68), 3505 icons from [Tabler Icons](https://tabler.io/icons) (3.50, the outline set, each given its own motion), 365 extra icons drawn for this set (animals, sports, clothing, gestures, 3D and easing tools, …) and 438 brand logos (GitHub, Slack, Spotify, OpenAI, Claude, TikTok, VS Code, Google Drive, …).
- **Switch in one line**: same component names as lucide-react (`Calendar`, `CalendarIcon`, aliases such as `AlertCircle`) and the same props. Usually you only change the import.
- **Ships only what you use**: every icon is its own module and the package is side-effect free, so bundlers keep the icons you import and drop the rest. Three icons add about 12 kB before minification.
- **Plays where people point**: hover or focus anywhere on a button, link, label, tab or menu item and its icon plays.
- **Respects reduced motion**: nothing moves when the system asks for less motion.
- **Two dependencies**: React and [Motion](https://motion.dev).

## Install

```bash
npm install pulsoicon
```

Works with React 18 or newer. [Motion](https://motion.dev) (12 or newer) is installed for you; if your app already uses Motion, PulsoIcon shares that copy.

## Quick start

```tsx
import { Bell, Calendar, Trash2 } from "pulsoicon";

export function Toolbar() {
  return (
    <>
      <button>
        <Bell size={20} /> Notifications
      </button>
      <button>
        <Calendar /> Schedule
      </button>
      <button>
        <Trash2 color="crimson" strokeWidth={1.5} /> Delete
      </button>
    </>
  );
}
```

Hover a button and its icon plays.

### Coming from lucide-react

```diff
- import { Bell, Calendar, Trash2 } from "lucide-react";
+ import { Bell, Calendar, Trash2 } from "pulsoicon";
```

Icon components and their props work the same. Lucide's helpers (`createLucideIcon`, `LucideProvider`, the `icons` object) are not included.

### Coming from Tabler

Tabler icon names work too, without the `Icon` prefix: `IconMoodSad` is `MoodSad`, `IconHome` is `Home`, `IconBrandGithub` is `BrandGithub`. Where Lucide already has the icon, the Tabler name points to it (`Home` is `House`), and Tabler families follow Lucide's naming (`HomeDollar` is `HouseDollar`, `PhotoEdit` is `ImageEdit`).

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number \| string` | `24` | Width and height |
| `color` | `string` | `currentColor` | Stroke colour |
| `strokeWidth` | `number \| string` | `2` | Stroke width on the 24-unit grid |
| `absoluteStrokeWidth` | `boolean` | `false` | Keep the stroke the same number of pixels at any size |
| `animated` | `boolean` | `true` | `false` keeps the icon still on hover; the ref still plays it |

Any other SVG attribute (`className`, `style`, `aria-label`, …) is passed to the `<svg>`. Icons render with `aria-hidden="true"`; give the surrounding button or link a label.

## When the animation plays

An icon plays when the pointer enters, or focus moves into, its closest `button`, `a`, `label`, `summary`, `[role="button"]`, `[role="link"]`, `[role="tab"]` or `[role="menuitem"]`. If there is none, the icon plays on its own hover.

Any other element can become the trigger with `data-icon-trigger`:

```tsx
<div className="card" data-icon-trigger>
  <MapPin /> 3 venues near you
</div>
```

### Play from code

Every icon forwards a ref with `startAnimation()` and `stopAnimation()`. Both return a promise that resolves when the motion has finished, so you can `await check.current?.startAnimation()` before moving on:

```tsx
import { useRef } from "react";
import { Check, type IconHandle } from "pulsoicon";

function SaveButton() {
  const check = useRef<IconHandle>(null);
  return (
    <button onClick={() => check.current?.startAnimation()}>
      <Check ref={check} animated={false} /> Save
    </button>
  );
}
```

## Finding icons

### Other names

Icons also answer to the names other icon sets use: `Gear` is `Settings`, `Magnifier` is `Search`, `Cart` is `ShoppingCart`, `World` is `Globe`, `DotsHorizontal` is `Ellipsis`, and so on. Every icon is also exported with an `Icon` suffix (`BellIcon`).

### Brand logos

Brand icons start with `Brand` (`BrandGithub`, `BrandSlack`, `BrandOpenai`, …); most are also exported without the prefix (`Github`, `Slack`). They are simplified line drawings made for this set.

All product names, logos and brands are the property of their respective owners and are used here only to refer to those products or services. Their use does not imply endorsement. Follow each brand's own guidelines when you use its logo.

### All icons at once

For icon pickers and galleries, `pulsoicon/all` exports every icon by its kebab-case name. It pulls in all 6328 icons, so use it only where you need the full set:

```tsx
import { ICON_NAMES, ICONS } from "pulsoicon/all";

const Icon = ICONS["party-popper"];
```

One icon can also be imported by path: `import { Calendar } from "pulsoicon/icons/calendar"`.

## Styling

Each icon renders `<svg class="pulsoicon pulsoicon-<name>">`, so CSS can target every icon or a single one:

```css
.pulsoicon {
  vertical-align: -0.125em;
}

.pulsoicon-bell {
  color: #f2552c;
}
```

## Contributing

```bash
npm install
npm run preview   # gallery of every icon at http://localhost:10205
npm test
npm run build
```

Each icon is a small React file in `src/icons/<name>.tsx`: the shapes of the icon and, for each shape, an optional motion (`r` recipe from `src/runtime/recipes.ts`, `d` delay, `x`/`y` direction, `a` amplitude, `o` pivot point on the 24×24 grid). Edit that file to change how an icon moves.

## License

ISC © CityPulso

The animations, the runtime, the extra icons and the brand drawings are original work of this project, except for six icons adapted from [Hugeicons](https://hugeicons.com) and [Iconoir](https://iconoir.com) (both MIT, listed in [LICENSE](./LICENSE)); brand logos remain trademarks of their owners. The shapes of the icons marked "Adapted from Tabler Icons" in their source are from [Tabler Icons](https://tabler.io/icons) (MIT); their motions are written for this set. The shapes of the Lucide icons are based on [Lucide](https://lucide.dev) (ISC, with some icons derived from Feather, MIT). Their notices are included in [LICENSE](./LICENSE).
