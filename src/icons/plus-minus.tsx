import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "plus-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlusMinus = createIcon("PlusMinus", "plus-minus", {
  nodes: [
    ["path", { d: "M4 7h6" }, { r: "spin", a: 90, o: [7, 7] }],
    ["path", { d: "M7 4v6" }, { r: "spin", a: 90, o: [7, 7] }],
    ["path", { d: "M20 18h-6" }, { r: "growX", d: 0.25, o: [14, 18] }],
    ["path", { d: "M5 19l14 -14" }, { r: "draw", d: 0.1 }],
  ],
});
