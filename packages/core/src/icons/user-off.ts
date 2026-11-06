import { icon } from "../icon.js";

// Adapted from Tabler Icons "user-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const UserOff = icon("UserOff", "user-off", {
  nodes: [
    ["path", { d: "M8.18 8.189a4.01 4.01 0 0 0 2.616 2.627m3.507 -.545a4 4 0 1 0 -5.59 -5.552" }, { r: "bounce", y: -1, a: 1 }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4c.412 0 .81 .062 1.183 .178m2.633 2.618c.12 .38 .184 .785 .184 1.204v2" }, { r: "press", o: [12, 19] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }, { r: "press", o: [12, 19] }],
    ["circle", { cx: "12", cy: "7", r: "4" }, { r: "bounce", y: -1, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
