import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "transfer-in" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TransferIn = createIcon("TransferIn", "transfer-in", {
  nodes: [
    ["path", { d: "M4 18v3h16v-14l-8 -4l-8 4v3" }],
    ["path", { d: "M4 14h9" }, { r: "slide", x: 1, a: 2 }],
    ["path", { d: "M10 11l3 3l-3 3" }, { r: "slide", x: 1, a: 2 }],
  ],
});
