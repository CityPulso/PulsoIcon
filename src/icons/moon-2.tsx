import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "moon-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Moon2 = createIcon("Moon2", "moon-2", {
  nodes: [
    ["path", { d: "M16.418 4.157a8 8 0 0 0 0 15.686" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "wobble", a: 6, o: [12, 12] }],
  ],
});
