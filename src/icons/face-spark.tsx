import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-spark" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceSpark = createIcon("FaceSpark", "face-spark", {
  nodes: [
    ["path", { d: "M21 12a9 9 0 1 0 -8.994 9" }],
    ["path", { d: "M9 10h.01" }],
    ["path", { d: "M15 10h.01" }],
    ["path", { d: "M9.5 15a3.5 3.5 0 0 0 5 0" }],
    ["path", { d: "M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" }, { r: "twinkle", o: [19, 19] }],
  ],
});
