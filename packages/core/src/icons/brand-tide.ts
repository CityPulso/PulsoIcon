import { icon } from "../icon.js";

// Drawn after Simple Icons "tide" (CC0-1.0). Tide is a trademark of its owner.

export const BrandTide = icon("BrandTide", "brand-tide", {
  nodes: [
    ["path", { d: "M3.5 7v7a1.5 1.5 0 0 0 1.5 1.5" }, { r: "draw" }],
    ["path", { d: "M2 10h3.5" }, { r: "draw", d: 0.06 }],
    ["path", { d: "M8 10.5v5" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M8 7.5h.01" }, { r: "pop", d: 0.16, o: [8, 7.5] }],
    ["circle", { cx: "12.5", cy: "13", r: "2.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M15 7v8.5" }, { r: "draw", d: 0.26 }],
    ["path", { d: "M17 13h5a2.5 2.5 0 1 0-.73 1.77" }, { r: "draw", d: 0.32 }],
  ],
});
