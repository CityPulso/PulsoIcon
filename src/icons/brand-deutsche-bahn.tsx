import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "deutschebahn" (CC0-1.0). Deutsche Bahn is a trademark of its owner.
export const BrandDeutscheBahn = createIcon("BrandDeutscheBahn", "brand-deutsche-bahn", {
  nodes: [
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "3" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 8h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6z" }, { r: "slide", d: 0.05, x: 1, a: 1, o: [8.5, 12] }],
    ["path", { d: "M13.5 8h2.5a2 2 0 0 1 0 4h-2.5h3a2 2 0 0 1 0 4h-3z" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [15.5, 12] }],
  ],
});
