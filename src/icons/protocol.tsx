import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "protocol" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Protocol = createIcon("Protocol", "protocol", {
  nodes: [
    ["path", { d: "M15 6l-7 12" }, { r: "draw" }],
    ["path", { d: "M20 6l-7 12" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M5 14v.015" }, { r: "pop", d: 0.28, o: [5, 14] }],
    ["path", { d: "M5 10.015v.015" }, { r: "pop", d: 0.2, o: [5, 10] }],
  ],
});
