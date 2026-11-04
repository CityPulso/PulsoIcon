import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "fridge-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FridgeOff = createIcon("FridgeOff", "fridge-off", {
  nodes: [
    ["path", { d: "M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" }, { r: "wobble", a: 3, o: [12, 21] }],
    ["path", { d: "M5 10h5m4 0h5" }, { r: "wobble", a: 3, o: [12, 21] }],
    ["path", { d: "M9 13v3" }, { r: "wobble", a: 3, o: [12, 21] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
