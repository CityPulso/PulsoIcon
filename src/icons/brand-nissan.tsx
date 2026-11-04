import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "nissan" (CC0-1.0). Nissan is a trademark of its owner.
export const BrandNissan = createIcon("BrandNissan", "brand-nissan", {
  nodes: [
    ["path", { d: "M4.5 9.5a8 8 0 0 1 15 0" }, { r: "draw" }],
    ["path", { d: "M4.5 14.5a8 8 0 0 0 15 0" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 12h18" }, { r: "growX", d: 0.2, o: [12, 12] }],
  ],
});
