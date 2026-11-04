import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "playstation4" (CC0-1.0). PlayStation 4 is a trademark of its owner.

export const BrandPlaystation4 = createIcon("BrandPlaystation4", "brand-playstation-4", {
  nodes: [
    ["path", { d: "M2 15V9h5v3H2.5" }, { r: "draw" }],
    ["path", { d: "M14.5 9h-3.5l-1.5 6H8.5" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M20.5 15V9L16 13h5.5" }, { r: "pop", d: 0.24, o: [19, 12] }],
  ],
});
