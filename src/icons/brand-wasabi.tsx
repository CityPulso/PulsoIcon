import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "wasabi" (CC0-1.0). Wasabi is a trademark of its owner.
export const BrandWasabi = createIcon("BrandWasabi", "brand-wasabi", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 22V5" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M7 11.5 12 6.5l5 5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M5 18.5l7-7 7 7" }, { r: "draw", d: 0.25 }],
  ],
});
