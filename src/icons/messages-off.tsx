import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "messages-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MessagesOff = createIcon("MessagesOff", "messages-off", {
  nodes: [
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M11 11a1 1 0 0 1 -1 -1m0 -3.968v-2.032a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10l-3 -3h-3" }, { r: "float", o: [15, 8] }],
    ["path", { d: "M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" }, { r: "float", d: 0.12, o: [9, 15] }],
  ],
});
