import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-sing" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceSing = createIcon("FaceSing", "face-sing", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M9 9h.01" }, { r: "blink", d: 0.2, o: [9, 9] }],
    ["path", { d: "M15 9h.01" }, { r: "blink", d: 0.2, o: [15, 9] }],
    ["path", { d: "M13 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pulse", a: 0.25, o: [15, 15] }],
  ],
});
