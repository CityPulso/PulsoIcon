import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "svgtrace" (CC0-1.0). SvgTrace is a trademark of its owner.
export const BrandSvgtrace = createIcon("BrandSvgtrace", "brand-svgtrace", {
  nodes: [
    ["path", { d: "M5 5.5h14" }, { r: "draw", d: 0.05 }],
    ["rect", { x: "2", y: "4", width: "3", height: "3" }, { r: "pop", d: 0.1, o: [3.5, 5.5] }],
    ["rect", { x: "19", y: "4", width: "3", height: "3" }, { r: "pop", d: 0.1, o: [20.5, 5.5] }],
    ["path", { d: "M5.5 14c0-5 2.5-8.5 6.5-8.5s6.5 3.5 6.5 8.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "m12 13 3 8-3-1.5L9 21z" }, { r: "rise", d: 0.2, a: 2, o: [12, 17] }],
  ],
});
