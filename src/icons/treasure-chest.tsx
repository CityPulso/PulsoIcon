import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "treasure-chest" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TreasureChest = createIcon("TreasureChest", "treasure-chest", {
  nodes: [
    ["path", { d: "M4 19h16a1 1 0 0 0 1 -1v-9a4 4 0 0 0 -4 -4h-10a4 4 0 0 0 -4 4v9a1 1 0 0 0 1 1" }, { r: "jelly", o: [12, 19] }],
    ["path", { d: "M3 11h18" }],
    ["path", { d: "M16 5v14" }],
    ["path", { d: "M8 5v14" }],
    ["path", { d: "M12 11v2" }, { r: "pop", d: 0.15, o: [12, 12] }],
  ],
});
