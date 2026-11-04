import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "facepunch" (CC0-1.0). Facepunch is a trademark of its owner.
export const BrandFacepunch = createIcon("BrandFacepunch", "brand-facepunch", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.08, o: [12, 12] }],
    ["path", { d: "M6.5 10l3.5 3.5M10 10l-3.5 3.5" }, { r: "pop", d: 0.1, o: [8.25, 11.75] }],
    ["path", { d: "M14 10l3.5 3.5M17.5 10 14 13.5" }, { r: "pop", d: 0.18, o: [15.75, 11.75] }],
  ],
});
