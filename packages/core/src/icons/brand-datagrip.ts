import { icon } from "../icon.js";

// Drawn after Simple Icons "datagrip" (CC0-1.0). DataGrip is a trademark of its owner.
export const BrandDatagrip = icon("BrandDatagrip", "brand-datagrip", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "1" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6.5 7v5.5h1.25a2.75 2.75 0 0 0 0-5.5z" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17.5 7.6a2.75 2.75 0 1 0 .25 4.15V10h-1.75" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M6.5 17h5" }, { r: "blink", d: 0.35, o: [9, 17] }],
  ],
});
