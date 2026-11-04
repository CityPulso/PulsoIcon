import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "yeti" (CC0-1.0). Yeti is a trademark of its owner.
export const BrandYeti = createIcon("BrandYeti", "brand-yeti", {
  nodes: [
    ["path", { d: "M1.5 7 4 11l2.5-4M4 11v6" }, { r: "draw", o: [4, 12] }],
    ["path", { d: "M12.5 7h-4v10h4M8.5 12H12" }, { r: "draw", d: 0.1, o: [10.5, 12] }],
    ["path", { d: "M14 7h5.5M16.75 7v10" }, { r: "draw", d: 0.2, o: [16.75, 12] }],
    ["path", { d: "M22 7v10" }, { r: "draw", d: 0.3, o: [22, 12] }],
  ],
});
