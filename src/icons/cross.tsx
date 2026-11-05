import { createIcon } from "../runtime/createIcon.js";

// Solid from Tabler Icons "cross" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Cross = createIcon("Cross", "cross", {
  nodes: [
    [
      "path",
      {
        d: "M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",
      },
      { r: "stamp", a: 0.3, o: [12, 12] },
    ],
  ],
  solid: [
    [
      "path",
      {
        d: "M10 2l-.117 .007a1 1 0 0 0 -.883 .993v4h-4a1 1 0 0 0 -1 1v4l.007 .117a1 1 0 0 0 .993 .883h4v8a1 1 0 0 0 1 1h4l.117 -.007a1 1 0 0 0 .883 -.993v-8h4a1 1 0 0 0 1 -1v-4l-.007 -.117a1 1 0 0 0 -.993 -.883h-4v-4a1 1 0 0 0 -1 -1h-4z",
        stroke: "none",
      },
      { r: "stamp", a: 0.3, o: [12, 12] },
    ],
  ],
});
