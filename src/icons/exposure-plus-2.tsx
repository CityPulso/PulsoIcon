import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "exposure-plus-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ExposurePlus2 = createIcon("ExposurePlus2", "exposure-plus-2", {
  nodes: [
    ["path", { d: "M12 9a4 4 0 1 1 8 0c0 1.098 -.564 2.025 -1.159 2.815l-6.841 7.185h8" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M3 12h6" }, { r: "spin", a: 90, o: [6, 12] }],
    ["path", { d: "M6 9v6" }, { r: "spin", a: 90, o: [6, 12] }],
  ],
});
