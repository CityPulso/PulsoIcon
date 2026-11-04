import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "copaairlines" (CC0-1.0). Copa Airlines is a trademark of its owner.
export const BrandCopaAirlines = createIcon("BrandCopaAirlines", "brand-copa-airlines", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
    ["path", { d: "M3 16c5-4 11-8 18-9" }, { r: "draw" }],
    ["path", { d: "M7 21c3-5 8-9 14-10" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M13 21c2-3 5-5 8-6" }, { r: "draw", d: 0.2 }],
  ],
});
