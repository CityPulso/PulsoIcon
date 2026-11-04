import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "dovetail" (CC0-1.0). Dovetail is a trademark of its owner.
export const BrandDovetail = createIcon("BrandDovetail", "brand-dovetail", {
  nodes: [
    ["path", { d: "M5 3l6 3.5V11L5 7.5z" }],
    ["path", { d: "M5 21l6-3.5V13l-6 3.5z" }],
    ["path", { d: "M14 7.5l6 4.5-6 4.5z" }, { r: "slide", x: 1, a: 1.5 }],
  ],
});
