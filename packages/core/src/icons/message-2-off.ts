import { icon } from "../icon.js";

// Adapted from Tabler Icons "message-2-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Message2Off = icon("Message2Off", "message-2-off", {
  nodes: [
    ["path", { d: "M8 9h1m4 0h3" }, { r: "growX", o: [8, 9] }],
    ["path", { d: "M8 13h5" }, { r: "growX", d: 0.1, o: [8, 13] }],
    ["path", { d: "M8 4h10a3 3 0 0 1 3 3v8c0 .57 -.16 1.104 -.436 1.558m-2.564 1.442h-3l-3 3l-3 -3h-3a3 3 0 0 1 -3 -3v-8c0 -1.084 .575 -2.034 1.437 -2.561" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M8 9h8" }, { r: "growX", o: [8, 9] }, "line"],
    ["path", { d: "M8 13h6" }, { r: "growX", d: 0.1, o: [8, 13] }, "line"],
    ["path", { d: "M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
