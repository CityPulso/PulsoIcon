import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "wellsfargo" (CC0-1.0). Wells Fargo is a trademark of its owner.
export const BrandWellsFargo = createIcon("BrandWellsFargo", "brand-wells-fargo", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "1" }],
    ["path", { d: "M5 7.5l1.5 9 2-6 2 6 1.5-9" }, { r: "draw" }],
    ["path", { d: "M14.5 16.5v-9H19M14.5 12H18" }, { r: "draw", d: 0.2 }],
  ],
});
