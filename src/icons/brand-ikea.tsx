import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ikea" (CC0-1.0). IKEA is a trademark of its owner.

export const BrandIkea = createIcon("BrandIkea", "brand-ikea", {
  nodes: [
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["ellipse", { cx: "12", cy: "12", rx: "7", ry: "3.5" }, { r: "pulse", a: 0.1, d: 0.1, o: [12, 12] }],
  ],
});
