# PulsoIcon

2086 animated icons for React. Every icon has its own hand-written motion: a bell rings, a calendar lifts its rings, a trash can opens its lid, a clock's hand goes round. At rest each icon is a clean 24×24 line icon; it plays when you hover or focus it.

- **What's inside**: all 2015 Lucide icons, 18 extra icons drawn for this set (dashed arrows, dial pad, passport, vinyl, filled bell and mail, …) and 53 brand logos (GitHub, Slack, Spotify, OpenAI, …).
- **Drop-in for lucide-react**: same names (`Calendar`, `CalendarIcon`, and Lucide's aliases such as `AlertCircle`) and the same props (`size`, `color`, `strokeWidth`, `absoluteStrokeWidth`, `className`).
- **Tree-shakable**: import only what you use; every icon is its own module.
- **Plays where people point**: hovering or focusing the closest button, link, label, tab or menu item plays its icon, so the whole control feels alive.
- **Respects reduced motion**: nothing moves when the system asks for less motion.
- **Small runtime**: the only dependencies are React and [Motion](https://motion.dev).

## Install

```bash
npm install pulsoicon motion react
```

`react` (18 or newer) and `motion` (12 or newer) are peer dependencies.

## Use

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
      <button className="danger">
        <Trash2 color="crimson" strokeWidth={1.5} /> Delete
      </button>
    </>
  );
}
```

Hover any of the buttons and its icon plays.

### Props

| Prop | Type | Default | |
|---|---|---|---|
| `size` | `number \| string` | `24` | Width and height |
| `color` | `string` | `currentColor` | Stroke colour |
| `strokeWidth` | `number \| string` | `2` | Stroke width on the 24-unit grid |
| `absoluteStrokeWidth` | `boolean` | `false` | Keep the stroke the same number of pixels at any size |
| `animated` | `boolean` | `true` | `false` keeps the icon still on hover (the ref still works) |

Any other SVG attribute (`className`, `style`, `aria-label`, …) is passed to the `<svg>`.

### Choosing what triggers the animation

By default an icon plays when the pointer enters, or focus moves into, its closest `button`, `a`, `label`, `summary`, `[role="button"]`, `[role="link"]`, `[role="tab"]` or `[role="menuitem"]`. Any other element can opt in with `data-icon-trigger`:

```tsx
<div className="card" data-icon-trigger>
  <MapPin /> 3 venues near you
</div>
```

### Playing from code

Every icon forwards a ref with `startAnimation()` and `stopAnimation()`:

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

### All icons at once

For icon pickers or galleries, `pulsoicon/all` exports every icon by its kebab-case name. It includes all 2086 icons, so use it only where you really need the full set:

```tsx
import { ICON_NAMES, ICONS } from "pulsoicon/all";

const Icon = ICONS["party-popper"];
```

A single icon can also be imported by path: `import { Calendar } from "pulsoicon/icons/calendar"`.

### Other names

Many icons also answer to the names other icon sets use, so they are easy to find: `Gear` is `Settings`, `Magnifier` is `Search`, `Cart` is `ShoppingCart`, `World` is `Globe`, `DotsHorizontal` is `Ellipsis`, and so on.

### Brand logos

Brand icons are prefixed with `Brand` (`BrandGithub`, `BrandSlack`, `BrandOpenai`, …); most are also exported without the prefix (`Github`, `Slack`). They are simplified line drawings made for this set.

All product names, logos and brands are the property of their respective owners and are used here only to refer to those products or services. Their use does not imply endorsement. Follow each brand's own guidelines when you use its logo.

### Styling

Each icon renders `<svg class="pulsoicon pulsoicon-<name>">`, so you can target all icons or a single one from CSS.

## Development

```bash
npm install
npm run preview     # gallery with every icon at http://localhost:10205
npm test
npm run build
```

Each icon is a small React file in `src/icons/<name>.tsx`: the shapes of the icon, and for each shape an optional motion (`r` = recipe from `src/runtime/recipes.ts`, `d` = delay, `x`/`y` = direction, `a` = amplitude, `o` = pivot point on the 24×24 grid). Edit that file to change how an icon moves.

## License

ISC © CityPulso. The animations, the runtime, the extra icons and the brand drawings are original work of this project; brand logos remain trademarks of their owners. The shapes of the Lucide icons are based on [Lucide](https://lucide.dev) (ISC, with some icons derived from Feather, MIT); their notices are included in [LICENSE](./LICENSE).
