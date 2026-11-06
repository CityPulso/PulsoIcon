import { icon } from "../icon.js";

// Drawn after Simple Icons "cocos" (CC0-1.0). Cocos is a trademark of its owner.
export const BrandCocos = icon("BrandCocos", "brand-cocos", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
    ["path", { d: "M7 16c-.5-4 1.5-7.5 5-9.5 3.5 2 5.5 5.5 5 9.5" }, { r: "sway", o: [12, 16] }],
    ["path", { d: "M10 13h.01M14 13h.01" }, { r: "blink", o: [12, 13] }],
    ["path", { d: "M3 17h18" }],
  ],
});
