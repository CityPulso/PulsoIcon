import { icon } from "../icon.js";

// Adapted from Tabler Icons "bot-id" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BotId = icon("BotId", "bot-id", {
  nodes: [
    [
      "path",
      { d: "M7 10.5c0 -.828 .746 -1.5 1.667 -1.5h6.666c.92 0 1.667 .672 1.667 1.5v3c0 .828 -.746 1.5 -1.667 1.5h-6.666c-.92 0 -1.667 -.672 -1.667 -1.5v-3" },
      { r: "jelly", o: [12, 15] },
    ],
    ["path", { d: "M12 7v2" }, { r: "swing", a: 15, o: [12, 9] }],
    ["path", { d: "M10 12v.01" }, { r: "blink", d: 0.3, o: [10, 12] }],
    ["path", { d: "M14 12v.01" }, { r: "blink", d: 0.3, o: [14, 12] }],
    ["path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2" }, { r: "pulse", d: 0.1, o: [12, 12] }],
    ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2" }, { r: "pulse", d: 0.1, o: [12, 12] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }, { r: "pulse", d: 0.1, o: [12, 12] }],
    ["path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2" }, { r: "pulse", d: 0.1, o: [12, 12] }],
  ],
});
