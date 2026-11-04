import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "octagon-plus-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const OctagonPlus2 = createIcon("OctagonPlus2", "octagon-plus-2", {
  nodes: [
    [
      "path",
      {
        d: "M21 12v-2.899c0 -.53 -.211 -1.039 -.586 -1.414l-4.1 -4.101c-.375 -.375 -.884 -.586 -1.415 -.586h-5.798c-.53 0 -1.039 .211 -1.414 .586l-4.101 4.101c-.375 .375 -.586 .884 -.586 1.414v5.798c0 .53 .211 1.039 .586 1.415l4.101 4.1c.375 .375 .884 .586 1.414 .586h2.899",
      },
    ],
    ["path", { d: "M16 19h6" }, { r: "spin", a: 90, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", a: 90, o: [19, 19] }],
  ],
});
