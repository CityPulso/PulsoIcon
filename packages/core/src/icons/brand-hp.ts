import { icon } from "../icon.js";

// Drawn after Simple Icons "hp" (CC0-1.0). HP is a trademark of its owner.

export const BrandHp = icon("BrandHp", "brand-hp", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M10 5.5L7 17" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M8.5 11.5h2.5l-1.4 5.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M13.5 11.5L11.5 19" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M13.5 11.5h3l-1.4 5.5h-3" }, { r: "draw", d: 0.35 }],
  ],
});
