import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-mobile-rotated" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SmartphoneRotated = createIcon("SmartphoneRotated", "smartphone-rotated", {
  nodes: [
    ["path", { d: "M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -8" }, { r: "turn", a: -90, o: [12, 12] }],
    ["path", { d: "M20 11v2" }, { r: "turn", a: -90, o: [12, 12] }],
    ["path", { d: "M7 12h-.01" }, { r: "turn", a: -90, o: [12, 12] }],
  ],
});
