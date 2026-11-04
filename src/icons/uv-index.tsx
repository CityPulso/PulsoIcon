import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "uv-index" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const UvIndex = createIcon("UvIndex", "uv-index", {
  nodes: [
    ["path", { d: "M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 1 1 8 0" }, { r: "pulse", o: [12, 10] }],
    ["path", { d: "M12 4v-1" }, { r: "pulse", o: [12, 10] }],
    ["path", { d: "M13 16l2 5h1l2 -5" }, { r: "draw", d: 0.15, o: [15.5, 18.5] }],
    ["path", { d: "M6 16v3a2 2 0 1 0 4 0v-3" }, { r: "draw", d: 0.1, o: [8, 18] }],
  ],
});
