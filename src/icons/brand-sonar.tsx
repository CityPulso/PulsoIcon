import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "sonar" (CC0-1.0). Sonar is a trademark of its owner.
export const BrandSonar = createIcon("BrandSonar", "brand-sonar", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M10 11a2.5 2.5 0 1 1 2.5 2.5c-3 0-5-2-5-5" }, { r: "wobble", a: 8, o: [10, 11] }],
    ["path", { d: "M15.5 4.5c1.5 3 1.5 10-1.5 15" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 7c1 3 .5 7-1.5 10" }, { r: "draw", d: 0.2 }],
  ],
});
