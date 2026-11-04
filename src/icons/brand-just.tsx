import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "just" (CC0-1.0). Just is a trademark of its owner.
export const BrandJust = createIcon("BrandJust", "brand-just", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "8", r: "2" }, { r: "bounce", y: -1, a: 1 }],
    ["circle", { cx: "12", cy: "16", r: "2" }, { r: "bounce", y: -1, a: 1, d: 0.1 }],
  ],
});
