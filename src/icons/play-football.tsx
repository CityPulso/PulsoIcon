import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "play-football" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlayFootball = createIcon("PlayFootball", "play-football", {
  nodes: [
    ["path", { d: "M3 17l5 1l.75 -1.5" }, { r: "swing", a: -12, o: [8.75, 16.5] }],
    ["path", { d: "M14 21v-4l-4 -3l1 -6" }],
    ["path", { d: "M6 12v-3l5 -1l3 3l3 1" }],
    ["path", { d: "M18.007 19.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" }, { r: "roll", x: 1, a: 2 }],
    ["path", { d: "M10.007 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
  ],
});
