import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "konami" (CC0-1.0). Konami is a trademark of its owner.
export const BrandKonami = createIcon("BrandKonami", "brand-konami", {
  nodes: [
    ["path", { d: "M5 3.5v6.5M9 3.5 5.5 6.75 9 10" }, { r: "draw" }],
    ["circle", { cx: "13", cy: "6.75", r: "2.5" }, { r: "draw", d: 0.06 }],
    ["path", { d: "M17 10V3.5l3.5 6.5V3.5" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M3.5 20.5l2.5-6.5 2.5 6.5M4.5 18.5h3" }, { r: "draw", d: 0.18 }],
    ["path", { d: "M10.5 20.5V14l2.5 3.5 2.5-3.5v6.5" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M19 14v6.5" }, { r: "draw", d: 0.3 }],
  ],
});
