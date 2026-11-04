import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "flood" (CC0-1.0). Flood is a trademark of its owner.
export const BrandFlood = createIcon("BrandFlood", "brand-flood", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M6 13.5c1.5 0 1.5-3.5 3-3.5s1.5 4.5 3 4.5 1.5-6 3-6 1.5 5 3 5" }, { r: "draw", d: 0.1 }],
  ],
});
