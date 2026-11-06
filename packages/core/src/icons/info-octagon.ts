import { icon } from "../icon.js";

// Adapted from Tabler Icons "info-octagon" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const InfoOctagon = icon("InfoOctagon", "info-octagon", {
  nodes: [
    [
      "path",
      {
        d: "M3 9.101v5.798c0 .53 .211 1.039 .586 1.415l4.1 4.1c.375 .375 .884 .586 1.415 .586h5.799c.53 0 1.039 -.211 1.414 -.586l4.1 -4.1c.375 -.375 .586 -.884 .586 -1.415v-5.798c0 -.53 -.211 -1.039 -.586 -1.415l-4.1 -4.1c-.375 -.375 -.884 -.586 -1.414 -.586l-5.799 0c-.53 0 -1.039 .211 -1.415 .586l-4.1 4.1c-.375 .375 -.586 .884 -.586 1.415",
      },
    ],
    ["path", { d: "M12 9h.01" }, { r: "pop", d: 0.2, o: [12, 9] }],
    ["path", { d: "M11 12h1v4h1" }, { r: "draw" }],
  ],
});
