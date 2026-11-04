import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ameba" (CC0-1.0). Ameba is a trademark of its owner.
export const BrandAmeba = createIcon("BrandAmeba", "brand-ameba", {
  nodes: [
    ["path", { d: "M6 3.5l2.5 2.5h7L18 3.5V10a6 5.5 0 0 1-12 0z" }, { r: "tilt", a: 8, o: [12, 16] }],
    ["path", { d: "M9.5 10h.01M14.5 10h.01" }, { r: "tilt", a: 8, o: [12, 16] }],
    ["ellipse", { cx: "12", cy: "12.5", rx: "1.5", ry: "1" }, { r: "tilt", a: 8, o: [12, 16] }],
    ["path", { d: "M8.5 15.5c-1 1.5-1.5 4-.5 5.5h8c1-1.5.5-4-.5-5.5" }, { r: "press", a: 0.05, o: [12, 21] }],
  ],
});
