import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "nationalrail" (CC0-1.0). National Rail is a trademark of its owner.
export const BrandNationalRail = createIcon("BrandNationalRail", "brand-national-rail", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M5 9.5h14M8 6.5l3 3" }, { r: "slide", x: -1, a: 1 }],
    ["path", { d: "M5 14.5h14M16 17.5l-3-3" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M15 9.5l-6 5" }, { r: "draw", d: 0.1 }],
  ],
});
