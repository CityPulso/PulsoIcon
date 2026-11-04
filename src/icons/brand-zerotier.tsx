import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "zerotier" (CC0-1.0). ZeroTier is a trademark of its owner.

export const BrandZerotier = createIcon("BrandZerotier", "brand-zerotier", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 7.5h10" }, { r: "growX", d: 0.05, o: [12, 7.5] }],
    ["path", { d: "M12 7.5v10" }, { r: "grow", d: 0.15, o: [12, 7.5] }],
    ["circle", { cx: "12", cy: "13.5", r: "3.5" }, { r: "spin", d: 0.15, a: 180, o: [12, 13.5] }],
  ],
});
