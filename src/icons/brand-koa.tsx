import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "koa" (CC0-1.0). Koa is a trademark of its owner.
export const BrandKoa = createIcon("BrandKoa", "brand-koa", {
  nodes: [
    ["path", { d: "M3 6v12M7.5 11 3.5 14.5 7.5 18" }, { r: "draw" }],
    ["circle", { cx: "11.75", cy: "14.5", r: "3.25" }, { r: "draw", d: 0.1 }],
    ["circle", { cx: "18.25", cy: "14.5", r: "3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M21.25 11.5v6.5" }, { r: "draw", d: 0.25 }],
  ],
});
