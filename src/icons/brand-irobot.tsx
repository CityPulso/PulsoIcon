import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "irobot" (CC0-1.0). iRobot is a trademark of its owner.
export const BrandIrobot = createIcon("BrandIrobot", "brand-irobot", {
  nodes: [
    ["circle", { cx: "5.5", cy: "5", r: "2.5" }, { r: "bounce", y: -1, a: 1.5 }],
    ["path", { d: "M5 21l5-8.5V3h5a5 5 0 0 1 0 10h-5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M15 13l5 8" }, { r: "draw", d: 0.25 }],
  ],
});
