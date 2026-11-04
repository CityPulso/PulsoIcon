import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "milanote" (CC0-1.0). Milanote is a trademark of its owner.
export const BrandMilanote = createIcon("BrandMilanote", "brand-milanote", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 7.5v9h8v-9l-8 9M8 7.5l8 9" }, { r: "draw", d: 0.1 }],
  ],
});
