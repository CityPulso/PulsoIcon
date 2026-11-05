import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "scissors-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ScissorsOff = createIcon("ScissorsOff", "scissors-off", {
  nodes: [
    ["path", { d: "M4.432 4.442a3 3 0 1 0 4.114 4.146" }, { r: "turn", a: -10, o: [10, 12] }],
    ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "turn", a: 10, o: [10, 12] }],
    ["path", { d: "M8.6 15.4l3.4 -3.4m2 -2l5 -5" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["circle", { cx: "6", cy: "6", r: "3" }, { r: "turn", a: -10, o: [10, 12] }],
    ["path", { d: "M8.12 8.12 12 12", fill: "none" }, { r: "turn", a: -10, o: [10, 12] }],
    ["path", { d: "M20 4 8.12 15.88", fill: "none" }],
    ["circle", { cx: "6", cy: "18", r: "3" }, { r: "turn", a: 10, o: [10, 12] }],
    ["path", { d: "M14.8 14.8 20 20", fill: "none" }, { r: "turn", a: 10, o: [10, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
