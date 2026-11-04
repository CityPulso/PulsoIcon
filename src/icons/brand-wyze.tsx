import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "wyze" (CC0-1.0). Wyze is a trademark of its owner.
export const BrandWyze = createIcon("BrandWyze", "brand-wyze", {
  nodes: [
    ["path", { d: "M1.5 9l1.25 6L4.4 11l1.6 4 1.25-6" }, { r: "draw", o: [4.4, 12] }],
    ["path", { d: "M8.5 9l2 3 2-3M10.5 12v3" }, { r: "draw", d: 0.1, o: [10.5, 12] }],
    ["path", { d: "M14 9h3.75L14 15h3.75" }, { r: "draw", d: 0.2, o: [16, 12] }],
    ["path", { d: "M19 9h3.5M19 12h3.5M19 15h3.5" }, { r: "draw", d: 0.3, o: [20.75, 12] }],
  ],
});
