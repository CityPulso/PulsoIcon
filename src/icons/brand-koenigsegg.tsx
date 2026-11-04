import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "koenigsegg" (CC0-1.0). Koenigsegg is a trademark of its owner.
export const BrandKoenigsegg = createIcon("BrandKoenigsegg", "brand-koenigsegg", {
  nodes: [
    ["path", { d: "M12 4.5c3.5 0 6.5 2 7.5 5-1 6-4 10-7.5 12-3.5-2-6.5-6-7.5-12 1-3 4-5 7.5-5z" }, { r: "press", a: 0.04, o: [12, 13] }],
    ["path", { d: "M7.5 11.5l1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9 15.5l1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 1.5v3M10.5 2.5h3" }, { r: "twinkle", d: 0.3, o: [12, 2.5] }],
  ],
});
