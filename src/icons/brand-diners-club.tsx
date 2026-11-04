import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "dinersclub" (CC0-1.0). Diners Club is a trademark of its owner.
export const BrandDinersClub = createIcon("BrandDinersClub", "brand-diners-club", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M10.5 6.5a5.5 5.5 0 0 0 0 11z" }, { r: "slide", x: -1, a: 1, o: [8, 12] }],
    ["path", { d: "M13.5 6.5a5.5 5.5 0 0 1 0 11z" }, { r: "slide", x: 1, a: 1, o: [16, 12] }],
  ],
});
