import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "daf" (CC0-1.0). DAF is a trademark of its owner.
export const BrandDaf = createIcon("BrandDaf", "brand-daf", {
  nodes: [
    ["path", { d: "M2.5 6.5v8H4a4 4 0 0 0 0-8z" }, { r: "draw" }],
    ["path", { d: "M9.5 14.5l3-8 3 8M10.6 12h3.8" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17.5 14.5v-8h4M17.5 10.5h3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M2.5 18h19" }, { r: "growX", d: 0.3, o: [2.5, 18] }],
  ],
});
