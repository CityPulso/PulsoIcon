import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ios" (CC0-1.0). iOS is a trademark of its owner.
export const BrandIos = createIcon("BrandIos", "brand-ios", {
  nodes: [
    ["path", { d: "M3.5 10.5v7" }, { r: "draw" }],
    ["path", { d: "M3.5 7h.01" }, { r: "pop", d: 0.05, o: [3.5, 7] }],
    ["ellipse", { cx: "10", cy: "12", rx: "3.5", ry: "5.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M20.5 8a2.7 2.7 0 0 0-2.4-1.5c-1.5 0-2.6 1.1-2.6 2.5 0 3.5 5.5 2.3 5.5 6 0 1.5-1.2 2.5-2.7 2.5-1.2 0-2.2-.6-2.8-1.6" }, { r: "draw", d: 0.2 }],
  ],
});
