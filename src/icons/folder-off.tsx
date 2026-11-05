import { createIcon } from "../runtime/createIcon.js";

// Solid from Tabler Icons "folder" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FolderOff = createIcon("FolderOff", "folder-off", {
  nodes: [
    ["path", { d: "M2 6.5V18a2 2 0 0 0 2 2h13" }, { r: "fade", o: [12, 11.5] }],
    ["path", { d: "M22 15.5V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H6.5" }, { r: "fade", o: [12, 11.5] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z",
        stroke: "none",
      },
      { r: "fade", o: [12, 11.5] },
    ],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
