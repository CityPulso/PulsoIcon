import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "fish-hook-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FishHookOff = createIcon("FishHookOff", "fish-hook-off", {
  nodes: [
    ["path", { d: "M16 9v3m-.085 3.924a5 5 0 0 1 -9.915 -.924v-4l3 3" }, { r: "swing", a: 6, o: [16, 3] }],
    ["path", { d: "M14 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "swing", a: 6, o: [16, 3] }],
    ["path", { d: "M16 5v-2" }, { r: "swing", a: 6, o: [16, 3] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.1 }],
  ],
  solid: [
    ["path", { d: "m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10", fill: "none" }, { r: "swing", a: 6, o: [16, 3] }],
    ["path", { d: "M20.414 8.586 22 7", fill: "none" }, { r: "swing", a: 6, o: [16, 3] }],
    ["circle", { cx: "19", cy: "10", r: "2" }, { r: "swing", a: 6, o: [16, 3] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.1 }, "line"],
  ],
});
