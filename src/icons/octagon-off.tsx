import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "octagon-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const OctagonOff = createIcon("OctagonOff", "octagon-off", {
  nodes: [
    [
      "path",
      {
        d: "M20.414 16.314c.375 -.375 .586 -.884 .586 -1.415v-5.798c0 -.53 -.211 -1.039 -.586 -1.414l-4.101 -4.101c-.375 -.375 -.884 -.586 -1.414 -.586h-5.798c-.53 0 -1.039 .211 -1.414 .586",
      },
      { r: "turn", a: 45, o: [12, 12] },
    ],
    [
      "path",
      {
        d: "M18.363 18.363l-2.049 2.051c-.375 .375 -.884 .586 -1.415 .586h-5.798c-.53 0 -1.039 -.211 -1.414 -.586l-4.101 -4.1c-.375 -.375 -.586 -.884 -.586 -1.415v-5.798c0 -.53 .211 -1.039 .586 -1.414l2.05 -2.051",
      },
      { r: "turn", a: 45, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
