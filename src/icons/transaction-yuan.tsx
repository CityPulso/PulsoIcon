import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "transaction-yuan" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TransactionYuan = createIcon("TransactionYuan", "transaction-yuan", {
  nodes: [
    ["path", { d: "M15 17h6" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M15 12l3 4.5" }, { r: "draw" }],
    ["path", { d: "M21 12l-3 4.5v4.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M15 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M7 5h8" }],
    ["path", { d: "M7 5v8a3 3 0 0 0 3 3h1" }],
  ],
});
