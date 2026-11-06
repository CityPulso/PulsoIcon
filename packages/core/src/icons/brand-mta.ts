import { icon } from "../icon.js";

// Drawn after Simple Icons "mta" (CC0-1.0). MTA is a trademark of its owner.
export const BrandMta = icon("BrandMta", "brand-mta", {
  svg: { r: "press", a: 0.04 },
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M5 14.5v-5l1.75 3 1.75-3v5" }, { r: "draw" }],
    ["path", { d: "M10.25 9.5h3.5M12 9.5v5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M15.25 14.5l2-5 2 5M15.9 13h2.7" }, { r: "draw", d: 0.2 }],
  ],
});
