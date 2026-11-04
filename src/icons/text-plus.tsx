import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "text-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextPlus = createIcon("TextPlus", "text-plus", {
  nodes: [
    ["path", { d: "M19 10h-14" }, { r: "growX", d: 0.05, o: [5, 10] }],
    ["path", { d: "M5 6h14" }, { r: "growX", o: [5, 6] }],
    ["path", { d: "M14 14h-9" }, { r: "growX", d: 0.1, o: [5, 14] }],
    ["path", { d: "M5 18h6" }, { r: "growX", d: 0.15, o: [5, 18] }],
    ["path", { d: "M18 15v6" }, { r: "spin", d: 0.25, a: 90, o: [18, 18] }],
    ["path", { d: "M15 18h6" }, { r: "spin", d: 0.25, a: 90, o: [18, 18] }],
  ],
});
