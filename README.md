<p align="center">
  <img src="./logo.png" alt="PulsoIcon" width="160" />
</p>

<h1 align="center">PulsoIcon</h1>

<p align="center">
  <strong>9955 animated React icons. Every one has its own motion.</strong><br />
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

Every one of the 9955 motions is written for this set. About 3,700 icons are drawn here, including the line-art brand logos; the rest build on the shapes of [Lucide](https://lucide.dev), [Tabler Icons](https://tabler.io/icons) and [Iconoir](https://iconoir.com), which are credited in [LICENSE](./LICENSE).

## Why PulsoIcon

- **9955 icons, each with its own motion**:
  - **About 3,700 drawn for this set**: about 2,770 line-art brand logos (CityPulso, GitHub, Slack, Spotify, OpenAI, Claude, TikTok, VS Code, Google Drive, …, most drawn after the logos collected by [Simple Icons](https://simpleicons.org)) and around 900 other icons, including lowercase a–z, animals, sports, 3D tools and icons drawn after [Phosphor](https://phosphoricons.com).
  - **Built on open icon sets**: all 2020 [Lucide](https://lucide.dev) icons (as of 1.68), plus the shapes of [Tabler Icons](https://tabler.io/icons) (3.50, including 264 brand logos) and [Iconoir](https://iconoir.com) (7.12).
  - **3042 brand logos** in all.
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
| `color` | `string` | `currentColor` | Stroke colour, and fill colour when `solid` |
| `strokeWidth` | `number \| string` | `2` | Stroke width on the 24-unit grid |
| `absoluteStrokeWidth` | `boolean` | `false` | Keep the stroke the same number of pixels at any size |
| `solid` | `boolean` | `false` | Filled icon instead of outline (see [Solid icons](#solid-icons)) |
| `animated` | `boolean` | `true` | `false` makes the icon fully static: nothing plays it, not even the ref or `play` |
| `autoAnimated` | `boolean` | `true` | Play the built-in hover / focus trigger. `false` turns that off; the ref and `play` still work |
| `play` | `boolean` | | `true` plays the motion, `false` returns to rest. Works with or without `autoAnimated` |

`autoAnimated` and `play` only exist while the icon can animate, so TypeScript rejects `<Bell animated={false} play />`. Wrapper components that drop a prop should use the exported `DistributiveOmit<IconProps, "size">` instead of `Omit`, which would lose that check.

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

Every icon forwards a ref with `startAnimation()` and `stopAnimation()`. Both return a promise that resolves when the motion has finished, so you can `await check.current?.startAnimation()` before moving on. Set `autoAnimated={false}` when only your code should decide when it plays:

```tsx
import { useRef } from "react";
import { Check, type IconHandle } from "pulsoicon";

function SaveButton() {
  const check = useRef<IconHandle>(null);
  return (
    <button onClick={() => check.current?.startAnimation()}>
      <Check autoAnimated={false} ref={check} /> Save
    </button>
  );
}
```

Or drive it from state with `play`. The motion starts when `play` turns `true` and returns to rest when it turns `false`:

```tsx
<Bell autoAnimated={false} play={hasNewMessage} />
```

`animated={false}` keeps an icon completely still; the ref and `play` do nothing.

## Solid icons

`solid` draws the filled version of an icon, in `color`:

```tsx
<Heart solid color="crimson" />
```

About 1,700 icons have a filled drawing taken from the [Tabler](https://tabler.io/icons) filled set or the [Phosphor](https://phosphoricons.com) fill weight. Their source file has a `solid` list and a "Solid from …" comment. The other icons fill their closed outline shapes and cut their inner lines out of the fill, so the details stay visible. Motions that draw a stroke on (`draw`, `redraw`, …) pop in instead on filled shapes.

## Finding icons

### Other names

Icons also answer to the names other icon sets use: `Gear` is `Settings`, `Magnifier` is `Search`, `Cart` is `ShoppingCart`, `World` is `Globe`, `DotsHorizontal` is `Ellipsis`, and so on. Every icon is also exported with an `Icon` suffix (`BellIcon`).

### Brand logos

Brand icons start with `Brand` (`BrandGithub`, `BrandSlack`, `BrandOpenai`, …). The brands added up to 3.1 are also exported without the prefix (`Github`, `Slack`); the ones added in 4.0 only with it, because many brand names are ordinary words. They are simplified line drawings made for this set, most of the newer ones drawn after the logos collected by [Simple Icons](https://simpleicons.org).

All product names, logos and brands are the property of their respective owners and are used here only to refer to those products or services. Their use does not imply endorsement. Follow each brand's own guidelines when you use its logo.

### All icons at once

For icon pickers and galleries, `pulsoicon/all` exports every icon by its kebab-case name. It pulls in all 9955 icons, so use it only where you need the full set:

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

## Report a wrong icon

If an icon is drawn wrong, a brand logo doesn't match the real one, or a motion looks off, please email
**citypulso@gmail.com** with the icon name (for example `brand-avianca`) and, if you can, a screenshot or a link
to the correct logo. Issues on GitHub are welcome too.

## Contributing

```bash
npm install
npm run preview   # gallery of every icon at http://localhost:10205
npm test
npm run build
```

Each icon is a small React file in `src/icons/<name>.tsx`: the shapes of the icon and, for each shape, an optional motion (`r` recipe from `src/runtime/recipes.ts`, `d` delay, `x`/`y` direction, `a` amplitude, `o` pivot point on the 24×24 grid). Edit that file to change how an icon moves.

## License

PulsoIcon is open source under the [ISC license](./LICENSE) © CityPulso.

### What is ours, and what comes from other icon sets

| Part | Origin |
|---|---|
| Every animation (how each icon moves) | Written for PulsoIcon |
| Runtime code (`createIcon`, triggers, motion recipes) | Written for PulsoIcon |
| About 3,700 icons, including about 2,770 line-art brand logos | Drawn for PulsoIcon |
| Shapes of the 2020 Lucide icons | Based on [Lucide](https://lucide.dev) (ISC; some derived from Feather, MIT) |
| Shapes of the icons marked "Adapted from Tabler Icons" | Based on [Tabler Icons](https://tabler.io/icons) (MIT) |
| Shapes of the icons marked "Adapted from Iconoir" | Based on [Iconoir](https://iconoir.com) (MIT) |
| Five icons marked "Adapted from Hugeicons" | Adapted from [Hugeicons](https://hugeicons.com) (MIT) |
| Icons marked "Drawn after Phosphor Icons" | Redrawn after [Phosphor](https://phosphoricons.com) shapes (MIT) |
| Solid shapes marked "Solid from Tabler Icons" / "Solid from Phosphor Icons" | Taken from the Tabler filled set and the Phosphor fill weight (MIT) |
| Brand icons marked "Drawn after Simple Icons" | Drawn after the logos collected by [Simple Icons](https://simpleicons.org) (CC0) |

Icons based on or drawn after Tabler Icons, Iconoir, Hugeicons, Phosphor or Simple Icons name their source in a comment at the top of their file; the Lucide icons keep their Lucide names. The full license texts are in [LICENSE](./LICENSE).

### Using PulsoIcon in your project

You may use PulsoIcon freely, including in commercial and closed-source products. The one condition, from ISC and the MIT licenses of the sets above, is the notice:

- **If you ship PulsoIcon** (in an app, a website bundle, a template or a library of your own), include PulsoIcon's [LICENSE](./LICENSE) file with it, for example on your "open-source licenses" or "third-party notices" page or in a `THIRD_PARTY_NOTICES` file. It already contains the notices of Lucide, Tabler Icons, Iconoir, Hugeicons and Phosphor.
- **If you copy or modify icons** from PulsoIcon into your own set, keep the source comment at the top of each file, and keep the LICENSE notices.
- You don't have to credit PulsoIcon inside your product's interface, although a link is always appreciated.

Brand logos are trademarks of their owners. Using a brand icon doesn't imply endorsement, and you should follow each brand's own guidelines.
