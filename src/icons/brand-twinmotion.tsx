import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "twinmotion" (CC0-1.0). Twinmotion is a trademark of its owner.
export const BrandTwinmotion = createIcon("BrandTwinmotion", "brand-twinmotion", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M2 10h7" }, { r: "draw" }],
    ["path", { d: "M22 10h-8.5L11 21.7" }, { r: "draw", d: 0.15 }],
  ],
});
