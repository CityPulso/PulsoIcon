import { icon } from "../icon.js";

// Drawn after Simple Icons "arstechnica" (CC0-1.0). Ars Technica is a trademark of its owner.
export const BrandArsTechnica = icon("BrandArsTechnica", "brand-ars-technica", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9.5 10.5v5M9.5 13a2 2 0 1 0-4 0 2 2 0 1 0 4 0" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M11.5 15.5v-5M11.5 12.5a2 2 0 0 1 2-2" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M18 10.5h-2a1.25 1.25 0 0 0 0 2.5h.5a1.25 1.25 0 0 1 0 2.5H15" }, { r: "draw", d: 0.25 }],
  ],
});
