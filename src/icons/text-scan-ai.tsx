import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "text-scan-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextScanAi = createIcon("TextScanAi", "text-scan-ai", {
  text: true,
  nodes: [
    ["path", { d: "M8 12h4.5" }, { r: "growX", d: 0.1, o: [8, 12] }],
    ["path", { d: "M8 8h6" }, { r: "growX", o: [8, 8] }],
    ["path", { d: "M8 16h2" }, { r: "growX", d: 0.2, o: [8, 16] }],
    ["path", { d: "M3 7v-2a2 2 0 0 1 2 -2h2" }],
    ["path", { d: "M3 17v2a2 2 0 0 0 2 2h2" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "pop", d: 0.3, o: [16, 18] }],
    ["path", { d: "M14 19h4" }, { r: "pop", d: 0.3, o: [16, 18] }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.4 }],
  ],
});
