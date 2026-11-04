import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "suitest" (CC0-1.0). Suitest is a trademark of its owner.
export const BrandSuitest = createIcon("BrandSuitest", "brand-suitest", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "4.5" }, { r: "wobble", a: 10, o: [12, 12] }],
    ["path", { d: "M13 11h.01" }, { r: "blink", d: 0.2, o: [13, 11] }],
    ["path", { d: "M8.8 15.2L3.5 17l3.5 3.5 1.8-5.3" }, { r: "wobble", a: 10, o: [12, 12] }],
    ["path", { d: "M15.2 8.8L20.5 7 17 3.5l-1.8 5.3" }, { r: "wobble", a: 10, o: [12, 12] }],
    ["path", { d: "M9 8L7 3.5" }, { r: "swing", d: 0.1, a: 12, o: [9, 8] }],
  ],
});
