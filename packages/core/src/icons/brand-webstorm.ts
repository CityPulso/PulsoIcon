import { icon } from "../icon.js";

// Drawn after Simple Icons "webstorm" (CC0-1.0). WebStorm is a trademark of its owner.
export const BrandWebstorm = icon("BrandWebstorm", "brand-webstorm", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "1" }],
    ["path", { d: "M5 6l1.5 7 1.5-4.5 1.5 4.5L11 6" }, { r: "draw" }],
    ["path", { d: "M18 6.5h-2.75a1.75 1.75 0 0 0 0 3.5h1a1.75 1.75 0 0 1 0 3.5H13.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M5 18h6" }, { r: "blink", d: 0.3, o: [8, 18] }],
  ],
});
