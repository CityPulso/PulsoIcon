import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "transfer-out" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TransferOut = createIcon("TransferOut", "transfer-out", {
  nodes: [
    ["path", { d: "M4 19v2h16v-14l-8 -4l-8 4v2" }],
    ["path", { d: "M13 14h-9" }, { r: "slide", x: -1, a: 2 }],
    ["path", { d: "M7 11l-3 3l3 3" }, { r: "slide", x: -1, a: 2 }],
  ],
});
