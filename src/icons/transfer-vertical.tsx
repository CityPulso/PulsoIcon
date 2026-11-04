import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "transfer-vertical" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TransferVertical = createIcon("TransferVertical", "transfer-vertical", {
  nodes: [
    ["path", { d: "M10 4v16l-6 -5.5" }, { r: "slide", x: 0, y: 1, a: 2, o: [7, 12] }],
    ["path", { d: "M14 20v-16l6 5.5" }, { r: "slide", d: 0.1, x: 0, y: -1, a: 2, o: [17, 12] }],
  ],
});
