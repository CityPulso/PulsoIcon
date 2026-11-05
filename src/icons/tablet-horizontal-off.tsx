import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-ipad-horizontal-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TabletHorizontalOff = createIcon("TabletHorizontalOff", "tablet-horizontal-off", {
  nodes: [
    ["path", { d: "M8 4h12a2 2 0 0 1 2 2v12m-2 2h-16a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" }, { r: "tilt", a: 5, o: [12, 20] }],
    ["path", { d: "M9 17h6" }, { r: "tilt", a: 5, o: [12, 20] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-12" }, { r: "tilt", a: 5, o: [12, 20] }],
    ["path", { d: "M9 17h6" }, { r: "tilt", a: 5, o: [12, 20] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
