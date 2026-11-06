import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-sd-card" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceSdCard = icon("DeviceSdCard", "device-sd-card", {
  text: true,
  nodes: [
    [
      "path",
      { d: "M7 21h10a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2h-6.172a2 2 0 0 0 -1.414 .586l-3.828 3.828a2 2 0 0 0 -.586 1.414v10.172a2 2 0 0 0 2 2" },
      { r: "slide", d: 0, x: 0, y: -1, a: 1.5, o: [12, 12] },
    ],
    ["path", { d: "M13 6v2" }, { r: "grow", d: 0.15, o: [13, 8] }],
    ["path", { d: "M16 6v2" }, { r: "grow", d: 0.2, o: [16, 8] }],
    ["path", { d: "M10 7v1" }, { r: "grow", d: 0.1, o: [10, 8] }],
  ],
});
