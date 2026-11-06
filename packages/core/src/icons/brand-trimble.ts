import { icon } from "../icon.js";

// Drawn after Simple Icons "trimble" (CC0-1.0). Trimble is a trademark of its owner.
export const BrandTrimble = icon("BrandTrimble", "brand-trimble", {
  nodes: [
    ["circle", { cx: "11", cy: "12", r: "6.5" }, { r: "spin", a: 360, o: [11, 12] }],
    ["path", { d: "M6 9c4 .5 8 3.5 9.5 8" }, { r: "spin", a: 360, o: [11, 12] }],
    ["path", { d: "M4 8V3l4.5 2.5" }, { r: "pop", d: 0.1, o: [5, 4] }],
    ["path", { d: "M18.5 9.5 22 12l-3.5 2.5" }, { r: "pop", d: 0.15, o: [21, 12] }],
    ["path", { d: "M4 16v5l4.5-2.5" }, { r: "pop", d: 0.2, o: [5, 20] }],
  ],
});
