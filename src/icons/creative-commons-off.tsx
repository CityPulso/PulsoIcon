import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "creative-commons-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CreativeCommonsOff = createIcon("CreativeCommonsOff", "creative-commons-off", {
  nodes: [
    ["path", { d: "M5.638 5.634a9 9 0 1 0 12.723 12.733m1.686 -2.332a9 9 0 0 0 -12.093 -12.077" }],
    ["path", { d: "M10.5 10.5a2.187 2.187 0 0 0 -2.914 .116a1.928 1.928 0 0 0 0 2.768a2.188 2.188 0 0 0 2.914 .116" }, { r: "pop", o: [9, 12] }],
    ["path", { d: "M16.5 10.5a2.194 2.194 0 0 0 -2.309 -.302" }, { r: "pop", d: 0.08, o: [15, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }, { r: "pop", o: [9, 12] }, "line"],
    ["path", { d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }, { r: "pop", d: 0.08, o: [15, 12] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
