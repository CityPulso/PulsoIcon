import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bluetooth-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BluetoothX = createIcon("BluetoothX", "bluetooth-x", {
  nodes: [
    ["path", { d: "M7 8l10 8l-5 4v-16l1 .802m0 6.396l-6 4.802" }, { r: "pulse", d: 0, a: 0.06, o: [12, 12] }],
    ["path", { d: "M16 6l4 4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M20 6l-4 4" }, { r: "draw", d: 0.25 }],
  ],
});
