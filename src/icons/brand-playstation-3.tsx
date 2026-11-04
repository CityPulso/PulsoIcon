import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "playstation3" (CC0-1.0). PlayStation 3 is a trademark of its owner.

export const BrandPlaystation3 = createIcon("BrandPlaystation3", "brand-playstation-3", {
  nodes: [
    ["path", { d: "M2 15V9h5v3H2.5" }, { r: "draw" }],
    ["path", { d: "M14.5 9h-3.5l-1.5 6H8.5" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M16.5 9h5v6h-5" }, { r: "drop", d: 0.2, y: -1, a: 3, o: [19, 12] }],
    ["path", { d: "M17.5 12h4" }, { r: "drop", d: 0.2, y: -1, a: 3, o: [19, 12] }],
  ],
});
