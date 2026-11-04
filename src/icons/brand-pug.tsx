import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "pug" (CC0-1.0). Pug is a trademark of its owner.
export const BrandPug = createIcon("BrandPug", "brand-pug", {
  nodes: [
    ["path", { d: "M7 6h10a4 4 0 0 1 4 4v4a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7v-4a4 4 0 0 1 4-4z" }, { r: "tilt", a: 6, o: [12, 21] }],
    ["path", { d: "M7.5 6L3.5 8l1 4" }, { r: "swing", d: 0.1, a: -12, o: [7.5, 6] }],
    ["path", { d: "M16.5 6l4 2-1 4" }, { r: "swing", d: 0.1, a: 12, o: [16.5, 6] }],
    ["path", { d: "M9.5 11h.01M14.5 11h.01" }, { r: "blink", d: 0.25, o: [12, 11] }],
    ["path", { d: "M11 14.5h2M10 17a2 2 0 0 0 2-1 2 2 0 0 0 2 1" }, { r: "tilt", a: 6, o: [12, 21] }],
  ],
});
