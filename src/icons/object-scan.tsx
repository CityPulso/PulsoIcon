import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "object-scan" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ObjectScan = createIcon("ObjectScan", "object-scan", {
  nodes: [
    ["path", { d: "M8 10a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4" }, { r: "press", d: 0.1, a: 0.12, o: [12, 12] }],
    ["path", { d: "M3 7v-2a2 2 0 0 1 2 -2h2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M3 17v2a2 2 0 0 0 2 2h2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M17 21h2a2 2 0 0 0 2 -2v-2" }, { r: "pulse", o: [12, 12] }],
  ],
});
