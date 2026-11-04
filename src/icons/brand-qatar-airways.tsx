import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "qatarairways" (CC0-1.0). Qatar Airways is a trademark of its owner.
export const BrandQatarAirways = createIcon("BrandQatarAirways", "brand-qatar-airways", {
  nodes: [
    ["path", { d: "M2.5 11h5M2.5 14h4.5M2.5 17h5" }, { r: "slide", x: -1.5 }],
    ["path", { d: "M10 12.5L21 3M12.5 14L21 5.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M10 12.5l2.5 1.5-1.5 5c-1.5-1.5-2-3.5-1-6.5z" }, { r: "tilt", a: 8, o: [11, 19] }],
  ],
});
