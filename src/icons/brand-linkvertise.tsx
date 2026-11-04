import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "linkvertise" (CC0-1.0). Linkvertise is a trademark of its owner.

export const BrandLinkvertise = createIcon("BrandLinkvertise", "brand-linkvertise", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 14 14 3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M10 21 21 10" }, { r: "draw", d: 0.1 }],
    ["circle", { cx: "12", cy: "12", r: "2.5" }, { r: "spin", d: 0.2, o: [12, 12] }],
  ],
});
