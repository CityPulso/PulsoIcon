import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "octagon-minus-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const OctagonMinus2 = createIcon("OctagonMinus2", "octagon-minus-2", {
  nodes: [
    [
      "path",
      {
        d: "M21 14v-4.899c0 -.53 -.211 -1.039 -.586 -1.414l-4.1 -4.101c-.375 -.375 -.884 -.586 -1.415 -.586h-5.798c-.53 0 -1.039 .211 -1.414 .586l-4.101 4.101c-.375 .375 -.586 .884 -.586 1.414v5.798c0 .53 .211 1.039 .586 1.415l4.101 4.1c.375 .375 .884 .586 1.414 .586h2.899",
      },
    ],
    ["path", { d: "M16 19h6" }, { r: "pop", o: [19, 19] }],
  ],
});
