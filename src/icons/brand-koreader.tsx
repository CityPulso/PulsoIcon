import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "koreader" (CC0-1.0). KOReader is a trademark of its owner.
export const BrandKoreader = createIcon("BrandKoreader", "brand-koreader", {
  nodes: [
    ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "2" }],
    ["path", { d: "M9 5v8M14.5 5 10 9l4.5 4" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M8.5 22a3.5 3.5 0 0 1 7 0" }, { r: "rise", d: 0.2, y: -1, a: 1 }],
  ],
});
