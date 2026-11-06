import { icon } from "../icon.js";

// Drawn after Simple Icons "lightburn" (CC0-1.0). LightBurn is a trademark of its owner.

export const BrandLightburn = icon("BrandLightburn", "brand-lightburn", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 10a7 7 0 0 1 12-2" }, { r: "draw" }],
    ["path", { d: "M18 5v3h-3" }, { r: "pop", d: 0.4, o: [18, 8] }],
    ["path", { d: "M6 17.5l3-3.5h3l3-3c1.5 1.5 1.5 4.5 0 6.5H9.5z" }, { r: "tilt", d: 0.1, a: 8, o: [12, 17] }],
  ],
});
