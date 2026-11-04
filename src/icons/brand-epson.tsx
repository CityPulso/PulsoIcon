import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "epson" (CC0-1.0). Epson is a trademark of its owner.
export const BrandEpson = createIcon("BrandEpson", "brand-epson", {
  nodes: [
    ["path", { d: "M4.5 9H1.5v6h3M1.5 12h2.5" }, { r: "draw" }],
    ["path", { d: "M6 15V9h1.5a1.5 1.5 0 0 1 0 3H6" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M13 9h-2a1.25 1.25 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" }, { r: "draw", d: 0.16 }],
    ["rect", { x: "14.5", y: "9", width: "3", height: "6", rx: "1.5" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M19 15V9l3 6V9" }, { r: "draw", d: 0.32 }],
  ],
});
