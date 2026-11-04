import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "charles" (CC0-1.0). Charles is a trademark of its owner.

export const BrandCharles = createIcon("BrandCharles", "brand-charles", {
  svg: { r: "tilt", a: -12, o: [11, 21] },
  nodes: [
    ["path", { d: "M5 3h11" }],
    ["path", { d: "M7.5 3l1 4C5 9 4 13 5.5 17c1 2.5 3 4 5.5 4s4.5-1.5 5.5-4c1.5-4 .5-8-3-10l1-4" }],
    ["path", { d: "M16.5 8.5c2.5-1.5 5-.5 5 2s-2 4-4.5 5" }],
    ["circle", { cx: "11", cy: "14", r: "2" }, { r: "pop", d: 0.15, o: [11, 14] }],
  ],
});
