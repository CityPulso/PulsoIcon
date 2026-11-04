import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "celestron" (CC0-1.0). Celestron is a trademark of its owner.
export const BrandCelestron = createIcon("BrandCelestron", "brand-celestron", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M8 3C4.5 7 5.5 15 12 17.5c3.5 1.3 7 .5 9.5-2" }, { r: "draw" }],
  ],
});
