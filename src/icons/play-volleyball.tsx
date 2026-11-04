import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "play-volleyball" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlayVolleyball = createIcon("PlayVolleyball", "play-volleyball", {
  nodes: [
    ["path", { d: "M11.007 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "float", d: 0.1, a: 1 }],
    ["path", { d: "M19.007 9.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" }, { r: "bounce", y: -1, a: 3 }],
    ["path", { d: "M2 16l5 1l.5 -2.5" }],
    ["path", { d: "M11.5 21l2.5 -5.5l-5.5 -3.5l3.5 -4l3 4l4 2" }, { r: "float", d: 0.1, a: 1 }],
  ],
});
