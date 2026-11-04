import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "octagon-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const OctagonPlus = createIcon("OctagonPlus", "octagon-plus", {
  nodes: [
    [
      "path",
      {
        d: "M3 9.101v5.798c0 .53 .211 1.039 .586 1.415l4.1 4.1c.375 .375 .884 .586 1.415 .586h5.799c.53 0 1.039 -.211 1.414 -.586l4.1 -4.1c.375 -.375 .586 -.884 .586 -1.415v-5.798c0 -.53 -.211 -1.039 -.586 -1.415l-4.1 -4.1c-.375 -.375 -.884 -.586 -1.414 -.586l-5.799 0c-.53 0 -1.039 .211 -1.415 .586l-4.1 4.1c-.375 .375 -.586 .884 -.586 1.415",
      },
      { r: "press", d: 0, a: 0.05, o: [12, 12] },
    ],
    ["path", { d: "M9 12h6" }, { r: "spin", d: 0.1, a: 180, o: [12, 12] }],
    ["path", { d: "M12 9v6" }, { r: "spin", d: 0.1, a: 180, o: [12, 12] }],
  ],
});
