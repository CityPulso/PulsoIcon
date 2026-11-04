import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-sad-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceSad2 = createIcon("FaceSad2", "face-sad-2", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M14.5 16.05a3.5 3.5 0 0 0 -5 0" }, { r: "slide", d: 0.15, x: 0, y: 1, a: 1, o: [12, 15.5] }],
    ["path", { d: "M10 9.25c-.5 1 -2.5 1 -3 0" }, { r: "blink", o: [8.5, 9.6] }],
    ["path", { d: "M17 9.25c-.5 1 -2.5 1 -3 0" }, { r: "blink", o: [15.5, 9.6] }],
  ],
});
