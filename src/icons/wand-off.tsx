import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "wand-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WandOff = createIcon("WandOff", "wand-off", {
  nodes: [
    ["path", { d: "M10.5 10.5l-7.5 7.5l3 3l7.5 -7.5m2 -2l5.5 -5.5l-3 -3l-5.5 5.5" }, { r: "tilt", o: [5, 19] }],
    ["path", { d: "M15 6l3 3" }, { r: "tilt", o: [5, 19] }],
    ["path", { d: "M8.433 4.395c.35 -.36 .567 -.852 .567 -1.395a2 2 0 0 0 2 2c-.554 0 -1.055 .225 -1.417 .589" }, { r: "twinkle", o: [7, 3] }],
    ["path", { d: "M18.418 14.41c.36 -.36 .582 -.86 .582 -1.41a2 2 0 0 0 2 2c-.555 0 -1.056 .226 -1.419 .59" }, { r: "twinkle", d: 0.1, o: [19, 13] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
