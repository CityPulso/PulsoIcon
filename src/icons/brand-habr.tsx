import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "habr" (CC0-1.0). Habr is a trademark of its owner.

export const BrandHabr = createIcon("BrandHabr", "brand-habr", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "7" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M5.5 9.5c4 .5 8.5 3 10 8.5" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M9 5.5c3 2.5 5 7 4.5 13" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M5.5 14.5c3-3 8-5 13-4.5" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M18 8c.5-2 2-3.5 3.5-3.5" }, { r: "sway", a: 10, o: [18, 8] }],
    ["path", { d: "M8.5 18c-1 1.8-2.8 2.8-5 2.5" }, { r: "sway", a: 10, o: [8.5, 18] }],
  ],
});
