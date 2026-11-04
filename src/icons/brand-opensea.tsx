import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "opensea" (CC0-1.0). OpenSea is a trademark of its owner.
export const BrandOpensea = createIcon("BrandOpensea", "brand-opensea", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M11 6v8.5H7z" }, { r: "sway", a: 6, o: [12, 16] }],
    ["path", { d: "M13 7c2 2 2.5 5.5 1 7.5h-1z" }, { r: "sway", a: 6, o: [12, 16] }],
    ["path", { d: "M6 16.5h12c-.8 1.5-2 2.5-3.5 2.5h-5C8 19 6.8 18 6 16.5z" }, { r: "sway", a: 6, o: [12, 16] }],
  ],
});
