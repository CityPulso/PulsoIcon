import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "dynatrace" (CC0-1.0). Dynatrace is a trademark of its owner.
export const BrandDynatrace = createIcon("BrandDynatrace", "brand-dynatrace", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }],
    ["rect", { x: "8.5", y: "8.5", width: "7", height: "7" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M4 4l4.5 4.5M20 20l-4.5-4.5" }, { r: "draw", d: 0.15 }],
  ],
});
