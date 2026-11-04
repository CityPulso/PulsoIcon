import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clothes-rack" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClothesRack = createIcon("ClothesRack", "clothes-rack", {
  nodes: [
    ["path", { d: "M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M12 7v14" }],
    ["path", { d: "M9 21h6" }],
    ["path", { d: "M7.757 9.243a6 6 0 0 0 8.486 0" }, { r: "swing", o: [12, 11] }],
  ],
});
