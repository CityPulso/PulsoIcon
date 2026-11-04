import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "play-handball" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlayHandball = createIcon("PlayHandball", "play-handball", {
  nodes: [
    ["path", { d: "M13 21l3.5 -2l-4.5 -4l2 -4.5" }],
    ["path", { d: "M5 7l4 3l5 .5l4 2.5l2.5 3" }, { r: "swing", a: 6, o: [14, 10.5] }],
    ["path", { d: "M4 20l5 -1l1.5 -2" }],
    ["path", { d: "M13.007 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M6.007 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" }, { r: "bounce", y: -1, a: 2 }],
  ],
});
