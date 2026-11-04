import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "silverairways" (CC0-1.0). Silver Airways is a trademark of its owner.
export const BrandSilverAirways = createIcon("BrandSilverAirways", "brand-silver-airways", {
  nodes: [
    ["circle", { cx: "9", cy: "4", r: "1.5" }, { r: "float", a: 1.5 }],
    ["path", { d: "M7.5 4.5 6.5 7" }, { r: "float", a: 1.5 }],
    ["path", { d: "M10.5 4.5c1 2-1.5 3.5-1.5 6 0 1 .5 1.5 1 2" }, { r: "float", a: 1.5 }],
    ["path", { d: "M10 12.5c2.5-2 7.5-2 8.5 1.5-2.5 1.5-6.5 1.5-8.5-1.5z" }, { r: "float", a: 1.5 }],
    ["path", { d: "M13.5 15v7" }],
    ["path", { d: "M13.5 18.5l3.5 1-2.5 1.5" }, { r: "swing", a: 15, o: [13.5, 18.5] }],
  ],
});
