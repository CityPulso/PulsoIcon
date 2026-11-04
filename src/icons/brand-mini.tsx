import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "mini" (CC0-1.0). Mini is a trademark of its owner.
export const BrandMini = createIcon("BrandMini", "brand-mini", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "4.5" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M10.5 13.5v-3l1.5 1.5 1.5-1.5v3" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["path", { d: "M6 9.5H2M6 12H3M6 14.5H4" }, { r: "drawBack", d: 0.05 }],
    ["path", { d: "M18 9.5h4M18 12h3M18 14.5h2" }, { r: "draw", d: 0.05 }],
  ],
});
