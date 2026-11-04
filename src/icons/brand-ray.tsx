import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ray" (CC0-1.0). Ray is a trademark of its owner.
export const BrandRay = createIcon("BrandRay", "brand-ray", {
  nodes: [
    ["path", { d: "M6.75 12h3.5M13.75 12h3.5" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M13.24 6.24l4.52 4.52M17.76 13.24l-4.52 4.52" }, { r: "draw", d: 0.2 }],
    ["circle", { cx: "5", cy: "12", r: "1.75" }, { r: "pop", o: [5, 12] }],
    ["circle", { cx: "12", cy: "12", r: "1.75" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "19", cy: "12", r: "1.75" }, { r: "pop", d: 0.2, o: [19, 12] }],
    ["circle", { cx: "12", cy: "5", r: "1.75" }, { r: "pop", d: 0.3, o: [12, 5] }],
    ["circle", { cx: "12", cy: "19", r: "1.75" }, { r: "pop", d: 0.3, o: [12, 19] }],
  ],
});
