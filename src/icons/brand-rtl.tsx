import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "rtl" (CC0-1.0). RTL is a trademark of its owner.
export const BrandRtl = createIcon("BrandRtl", "brand-rtl", {
  nodes: [
    ["path", { d: "M2.5 17V7h2.5a2.5 2.5 0 0 1 0 5H2.5M5 12l2.5 5" }, { r: "flip", o: [5, 12] }],
    ["path", { d: "M9.5 7h6M12.5 7v10" }, { r: "flip", d: 0.1, o: [12.5, 12] }],
    ["path", { d: "M17.5 7v10h4" }, { r: "flip", d: 0.2, o: [19.5, 12] }],
  ],
});
