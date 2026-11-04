import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "gleam" (Apache-2.0). Gleam is a trademark of its owner.
export const BrandGleam = createIcon("BrandGleam", "brand-gleam", {
  nodes: [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      },
      { r: "twinkle", o: [12, 12] },
    ],
    ["path", { d: "M10 11.5h.01M14 11.5h.01" }, { r: "blink", d: 0.2, o: [12, 11.5] }],
    ["path", { d: "M11 13.8a1.3 1.3 0 0 0 2 0" }, { r: "draw", d: 0.3, o: [12, 14] }],
  ],
});
