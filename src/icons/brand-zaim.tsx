import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "zaim" (CC0-1.0). Zaim is a trademark of its owner.

export const BrandZaim = createIcon("BrandZaim", "brand-zaim", {
  nodes: [
    ["ellipse", { cx: "12", cy: "5.5", rx: "8", ry: "2.5" }, { r: "drop", y: -1, a: 4, o: [12, 5.5] }],
    ["path", { d: "M4 5.5v13C4 19.9 7.6 21 12 21s8-1.1 8-2.5v-13" }, { r: "press", d: 0.15, a: 0.04, o: [12, 21] }],
    ["path", { d: "M4 9.8c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5M4 14.2c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" }, { r: "press", d: 0.15, a: 0.04, o: [12, 21] }],
  ],
});
