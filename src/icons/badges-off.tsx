import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "badges-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BadgesOff = createIcon("BadgesOff", "badges-off", {
  nodes: [
    ["path", { d: "M14.505 14.497l-2.505 1.503l-5 -3v4l5 3l5 -3" }, { r: "float", o: [12, 16] }],
    ["path", { d: "M13.873 9.876l3.127 -1.876v-4l-5 3l-2.492 -1.495m-2.508 1.495v1l2.492 1.495" }, { r: "float", d: 0.1, o: [12, 7] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
