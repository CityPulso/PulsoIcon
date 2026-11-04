import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "steinberg" (CC0-1.0). Steinberg is a trademark of its owner.
export const BrandSteinberg = createIcon("BrandSteinberg", "brand-steinberg", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M10.5 8.5v7l5-3.5z" }, { r: "press", d: 0.1, a: 0.12, o: [12.5, 12] }],
  ],
});
