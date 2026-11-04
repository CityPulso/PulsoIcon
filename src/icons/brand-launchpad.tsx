import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "launchpad" (CC0-1.0). Launchpad is a trademark of its owner.

export const BrandLaunchpad = createIcon("BrandLaunchpad", "brand-launchpad", {
  nodes: [
    ["path", { d: "M3 11a8 8 0 0 0 6-8" }, { r: "draw" }],
    ["path", { d: "M18.5 3.5a12 12 0 0 0 0 17" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M4 21a8 8 0 0 1 6.5-6" }, { r: "draw", d: 0.2 }],
    ["circle", { cx: "11", cy: "11.5", r: "1.5" }, { r: "pulse", d: 0.3, o: [11, 11.5] }],
  ],
});
