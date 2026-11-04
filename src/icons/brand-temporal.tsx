import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "temporal" (CC0-1.0). Temporal is a trademark of its owner.

export const BrandTemporal = createIcon("BrandTemporal", "brand-temporal", {
  nodes: [
    ["ellipse", { cx: "12", cy: "12", rx: "10", ry: "4" }],
    ["ellipse", { cx: "12", cy: "12", rx: "4", ry: "10" }, { r: "flip", o: [12, 12] }],
  ],
});
