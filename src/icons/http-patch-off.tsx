import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "http-patch-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HttpPatchOff = createIcon("HttpPatchOff", "http-patch-off", {
  nodes: [
    ["path", { d: "M3 12h2a2 2 0 1 0 0 -4h-2v8" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M10 16v-6m2 -2a2 2 0 0 1 2 2m0 4v2" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M10 13h3" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M17 8h4" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M19 8v7" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
