import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flag-bolt" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FlagBolt = createIcon("FlagBolt", "flag-bolt", {
  nodes: [
    ["path", { d: "M14.673 15.36a4.978 4.978 0 0 1 -2.673 -1.36a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v7" }, { r: "swing", a: 4, o: [5, 9.5] }],
    ["path", { d: "M5 21v-7" }],
    ["path", { d: "M19 16l-2 3h4l-2 3" }, { r: "flicker", d: 0.1 }],
  ],
});
