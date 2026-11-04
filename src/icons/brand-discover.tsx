import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "discover" (CC0-1.0). Discover is a trademark of its owner.
export const BrandDiscover = createIcon("BrandDiscover", "brand-discover", {
  nodes: [
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M5 12h3.5M15.5 12H19" }, { r: "flip", o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2.5" }, { r: "pop", d: 0.15, o: [12, 12] }],
  ],
});
