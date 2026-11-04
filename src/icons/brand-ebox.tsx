import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ebox" (CC0-1.0). EBOX is a trademark of its owner.
export const BrandEbox = createIcon("BrandEbox", "brand-ebox", {
  nodes: [
    ["path", { d: "M12 3l8 4.5-8 4.5-8-4.5z" }, { r: "drop", y: -1, a: 1.5, d: 0.2 }],
    ["path", { d: "M12 6l2.75 1.5L12 9 9.25 7.5z" }, { r: "pop", d: 0.35, o: [12, 7.5] }],
    ["path", { d: "M4 11.5l8 4.5 8-4.5" }, { r: "drop", y: -1, a: 1.5, d: 0.1 }],
    ["path", { d: "M4 15.5l8 4.5 8-4.5" }, { r: "drop", y: -1, a: 1.5 }],
  ],
});
