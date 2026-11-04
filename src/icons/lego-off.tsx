import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "lego-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LegoOff = createIcon("LegoOff", "lego-off", {
  nodes: [
    ["path", { d: "M9.5 11h.01" }, { r: "blink", o: [9.5, 11] }],
    ["path", { d: "M9.5 15a3.5 3.5 0 0 0 5 0" }, { r: "draw" }],
    ["path", { d: "M8 4v-1h8v2h1a3 3 0 0 1 3 3v8m-.884 3.127a2.99 2.99 0 0 1 -2.116 .873v1h-10v-1a3 3 0 0 1 -3 -3v-9c0 -1.083 .574 -2.032 1.435 -2.56" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
