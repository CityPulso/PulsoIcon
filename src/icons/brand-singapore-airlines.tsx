import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "singaporeairlines" (CC0-1.0). Singapore Airlines is a trademark of its owner.
export const BrandSingaporeAirlines = createIcon("BrandSingaporeAirlines", "brand-singapore-airlines", {
  nodes: [
    ["path", { d: "M7 3c-2 4 0 8 3.5 10.5S17 18 20 19" }, { r: "draw" }],
    ["path", { d: "M10.5 3c-1.5 3.5 0 6.5 3 8.5s4.5 3.5 6 5" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M14 3c-1 3 0 5.5 2.5 7" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M4 20c3.5.5 6.5-.5 9-2.5" }, { r: "swing", a: 12, o: [13, 17.5] }],
  ],
});
