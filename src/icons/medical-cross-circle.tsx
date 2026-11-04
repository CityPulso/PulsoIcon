import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "medical-cross-circle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MedicalCrossCircle = createIcon("MedicalCrossCircle", "medical-cross-circle", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }],
    ["path", { d: "M12 8v8" }, { r: "spin", d: 0.1, a: 60, o: [12, 12] }],
    ["path", { d: "M15.5 10l-7 4" }, { r: "spin", d: 0.1, a: 60, o: [12, 12] }],
    ["path", { d: "M15.5 14l-7 -4" }, { r: "spin", d: 0.1, a: 60, o: [12, 12] }],
  ],
});
