import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "xcode" (CC0-1.0). Xcode is a trademark of its owner.
export const BrandXcode = createIcon("BrandXcode", "brand-xcode", {
  nodes: [
    ["rect", { x: "3", y: "5", width: "15", height: "16", rx: "3" }, { r: "press", a: 0.04, o: [10.5, 13] }],
    ["path", { d: "M7 17l3.5-7.5 3.5 7.5M8.5 14h4" }, { r: "draw", d: 0.1, o: [10.5, 13] }],
    ["path", { d: "M10 20 18.5 6.5M15.5 4.5l2.5-1.5 3.5 2.5-1.25 1.75-2.25-1" }, { r: "tilt", d: 0.1, a: -12, o: [10, 20] }],
  ],
});
