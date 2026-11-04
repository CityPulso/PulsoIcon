import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "iconjar" (CC0-1.0). IconJar is a trademark of its owner.

export const BrandIconjar = createIcon("BrandIconjar", "brand-iconjar", {
  nodes: [
    ["path", { d: "M6 7.5h12M9 7.5a3 2.5 0 0 1 6 0M12 3.5v1.5" }, { r: "lift", y: -1, a: -8, o: [12, 7] }],
    ["path", { d: "M7 7.5c-3.5 2.5-3.5 11 0 13.5h10c3.5-2.5 3.5-11 0-13.5" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M13.5 7.5v3a1.5 1.5 0 0 0 3 0V9" }, { r: "draw", d: 0.25 }],
  ],
});
