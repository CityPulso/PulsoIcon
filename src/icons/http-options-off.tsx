import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "http-options-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HttpOptionsOff = createIcon("HttpOptionsOff", "http-options-off", {
  nodes: [
    ["path", { d: "M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" }, { r: "draw", o: [5, 12] }],
    ["path", { d: "M10 12h2m2 -2a2 2 0 0 0 -2 -2m-2 2v6" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M17 8h4" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M19 8v7" }, { r: "draw", d: 0.16, o: [19, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
