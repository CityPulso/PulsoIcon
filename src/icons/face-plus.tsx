import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FacePlus = createIcon("FacePlus", "face-plus", {
  nodes: [
    ["path", { d: "M20.985 12.528a9 9 0 1 0 -8.45 8.456" }],
    ["path", { d: "M16 19h6" }, { r: "pop", o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "pop", o: [19, 19] }],
    ["path", { d: "M9 10h.01" }],
    ["path", { d: "M15 10h.01" }],
    ["path", { d: "M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" }],
  ],
});
