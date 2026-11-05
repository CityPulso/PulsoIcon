import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "target-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TargetOff = createIcon("TargetOff", "target-off", {
  nodes: [
    ["path", { d: "M11.286 11.3a1 1 0 0 0 1.41 1.419" }, { r: "pop", d: 0.25, o: [12, 12] }],
    ["path", { d: "M8.44 8.49a5 5 0 0 0 7.098 7.044m1.377 -2.611a5 5 0 0 0 -5.846 -5.836" }, { r: "pulse", d: 0.1, a: 0.06, o: [12, 12] }],
    ["path", { d: "M5.649 5.623a9 9 0 1 0 12.698 12.758m1.683 -2.313a9 9 0 0 0 -12.076 -12.11" }, { r: "pulse", d: 0.0, a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "pulse", d: 0, a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "6" }, { r: "pulse", d: 0.1, a: 0.06, o: [12, 12] }, "cut"],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "pop", d: 0.25, o: [12, 12] }, "cut"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
