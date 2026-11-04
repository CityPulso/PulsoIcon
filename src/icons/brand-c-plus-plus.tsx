import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "cplusplus" (CC0-1.0). C++ is a trademark of its owner.
export const BrandCPlusPlus = createIcon("BrandCPlusPlus", "brand-c-plus-plus", {
  nodes: [
    ["polygon", { points: "12 2 3.34 7 3.34 17 12 22 20.66 17 20.66 7" }],
    ["path", { d: "M11.47 9.53A3.5 3.5 0 1 0 11.47 14.47" }, { r: "draw" }],
    ["path", { d: "M13.5 12h2M14.5 11v2" }, { r: "pop", d: 0.25, o: [14.5, 12] }],
    ["path", { d: "M16.5 12h2M17.5 11v2" }, { r: "pop", d: 0.35, o: [17.5, 12] }],
  ],
});
