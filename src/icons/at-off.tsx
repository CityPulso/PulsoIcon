import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "at-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AtOff = createIcon("AtOff", "at-off", {
  nodes: [
    ["path", { d: "M9.174 9.17a4 4 0 0 0 5.646 5.668m1.18 -2.838a4 4 0 0 0 -4 -4" }, { r: "spin", d: 0, o: [12, 12] }],
    ["path", { d: "M19.695 15.697a2.5 2.5 0 0 0 1.305 -2.197v-1.5a9 9 0 0 0 -13.055 -8.047m-2.322 1.683a9 9 0 0 0 9.877 14.644" }, { r: "spin", d: 0, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["circle", { cx: "12", cy: "12", r: "4" }, { r: "spin", d: 0, o: [12, 12] }],
    ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", fill: "none" }, { r: "spin", d: 0, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
