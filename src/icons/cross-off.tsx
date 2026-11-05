import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cross-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "cross" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CrossOff = createIcon("CrossOff", "cross-off", {
  nodes: [
    ["path", { d: "M16 12h3v-4h-5v-5h-4v3m-2 2h-3v4h5v9h4v-7" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    [
      "path",
      {
        d: "M10 2l-.117 .007a1 1 0 0 0 -.883 .993v4h-4a1 1 0 0 0 -1 1v4l.007 .117a1 1 0 0 0 .993 .883h4v8a1 1 0 0 0 1 1h4l.117 -.007a1 1 0 0 0 .883 -.993v-8h4a1 1 0 0 0 1 -1v-4l-.007 -.117a1 1 0 0 0 -.993 -.883h-4v-4a1 1 0 0 0 -1 -1h-4z",
        stroke: "none",
      },
      { r: "pulse", a: 0.1, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
