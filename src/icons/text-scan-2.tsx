import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "text-scan-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextScan2 = createIcon("TextScan2", "text-scan-2", {
  nodes: [
    ["path", { d: "M8 12h8" }, { r: "growX", d: 0.18, o: [8, 12] }],
    ["path", { d: "M8 9h6" }, { r: "growX", d: 0.1, o: [8, 9] }],
    ["path", { d: "M8 15h4" }, { r: "growX", d: 0.26, o: [8, 15] }],
    ["path", { d: "M3 7v-2a2 2 0 0 1 2 -2h2" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M3 17v2a2 2 0 0 0 2 2h2" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M17 21h2a2 2 0 0 0 2 -2v-2" }, { r: "press", a: 0.06, o: [12, 12] }],
  ],
});
