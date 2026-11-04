import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "modx" (CC0-1.0). MODX is a trademark of its owner.
export const BrandModx = createIcon("BrandModx", "brand-modx", {
  svg: { r: "spin", a: 90, o: [12, 12] },
  nodes: [
    ["path", { d: "M3 3h12l-6 7z" }],
    ["path", { d: "M21 3v12l-7-6z" }],
    ["path", { d: "M21 21H9l6-7z" }],
    ["path", { d: "M3 21V9l7 6z" }],
  ],
});
