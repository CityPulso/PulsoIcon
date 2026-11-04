import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "tapas" (CC0-1.0). Tapas is a trademark of its owner.
export const BrandTapas = createIcon("BrandTapas", "brand-tapas", {
  nodes: [
    ["path", { d: "M5 15c0-4.5 3-8 7-8s7 3.5 7 8" }, { r: "rise", a: 1.5 }],
    ["path", { d: "M4.5 8.5c.5-2 2.5-3.5 4.5-3l.5 2.5M3.5 9.5 10 7" }, { r: "rise", a: 1.5 }],
    ["path", { d: "M9.5 11.5h.01M14.5 11.5h.01M11 13.5c.6.5 1.4.5 2 0" }, { r: "rise", a: 1.5 }],
    ["path", { d: "M3 15h18v5.5H3zM3 17.5h18" }, { r: "press", a: 0.03, o: [12, 20] }],
  ],
});
