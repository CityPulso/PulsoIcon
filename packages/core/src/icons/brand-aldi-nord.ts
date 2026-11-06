import { icon } from "../icon.js";

// Drawn after Simple Icons "aldinord" (CC0-1.0). Aldi Nord is a trademark of its owner.
export const BrandAldiNord = icon("BrandAldiNord", "brand-aldi-nord", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "1" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 17h18" }, { r: "growX", d: 0.3, o: [3, 17] }],
    ["path", { d: "M6.5 14 12 6l5.5 8" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M9.5 14 12 10.5l2.5 3.5" }, { r: "draw", d: 0.15 }],
  ],
});
