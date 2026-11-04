import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "albertheijn" (CC0-1.0). Albert Heijn is a trademark of its owner.
export const BrandAlbertHeijn = createIcon("BrandAlbertHeijn", "brand-albert-heijn", {
  nodes: [
    ["path", { d: "M3.5 9 13 3l7.5 5-1 11.5L6 21z" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["circle", { cx: "9.5", cy: "14", r: "2" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M11.5 12v4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M14.5 9v7M14.5 14a2 2 0 0 1 2.5-2v4" }, { r: "draw", d: 0.28 }],
  ],
});
