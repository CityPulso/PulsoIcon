import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "line-dashed" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LineDashed = createIcon("LineDashed", "line-dashed", {
  nodes: [
    ["path", { d: "M5 12h2" }, { r: "pop", o: [6, 12] }],
    ["path", { d: "M17 12h2" }, { r: "pop", d: 0.2, o: [18, 12] }],
    ["path", { d: "M11 12h2" }, { r: "pop", d: 0.1, o: [12, 12] }],
  ],
});
