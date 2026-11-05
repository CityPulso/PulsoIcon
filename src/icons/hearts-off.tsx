import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hearts-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HeartsOff = createIcon("HeartsOff", "hearts-off", {
  nodes: [
    ["path", { d: "M14.017 18l-2.017 2l-7.5 -7.428a5 5 0 0 1 .49 -7.586m3.01 -1a5 5 0 0 1 4 2.018a5 5 0 0 1 8.153 5.784" }, { r: "beat", o: [12, 13] }],
    [
      "path",
      { d: "M11.814 11.814a2.81 2.81 0 0 0 -.007 3.948l4.182 4.238l2.01 -2.021m1.977 -1.99l.211 -.212a2.81 2.81 0 0 0 0 -3.948a2.747 2.747 0 0 0 -3.91 -.007l-.283 .178" },
      { r: "beat", o: [12, 13] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M14.017 18l-2.017 2l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.153 5.784", fill: "none" }, { r: "beat", o: [12, 13] }],
    [
      "path",
      {
        d: "M15.99 20l4.197 -4.223a2.81 2.81 0 0 0 0 -3.948a2.747 2.747 0 0 0 -3.91 -.007l-.28 .282l-.279 -.283a2.747 2.747 0 0 0 -3.91 -.007a2.81 2.81 0 0 0 -.007 3.948l4.182 4.238l.007 0",
      },
      { r: "beat", o: [12, 13] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
