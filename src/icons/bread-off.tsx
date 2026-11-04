import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bread-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BreadOff = createIcon("BreadOff", "bread-off", {
  nodes: [
    [
      "path",
      { d: "M8 4l10 .005v-.005a3 3 0 0 1 2 5.235v6.765m-.59 3.418c-.36 .36 -.86 .582 -1.41 .582h-12a2 2 0 0 1 -2 -2v-8.764a3 3 0 0 1 .418 -4.785" },
      { r: "jelly", o: [12, 20] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
