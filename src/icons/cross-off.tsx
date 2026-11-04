import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cross-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CrossOff = createIcon("CrossOff", "cross-off", {
  nodes: [
    ["path", { d: "M16 12h3v-4h-5v-5h-4v3m-2 2h-3v4h5v9h4v-7" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
