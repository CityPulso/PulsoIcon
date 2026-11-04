import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "certificate-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Certificate2 = createIcon("Certificate2", "certificate-2", {
  nodes: [
    ["path", { d: "M9 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "swing", d: 0.15, a: 10, o: [12, 15] }],
    ["path", { d: "M10 7h4" }, { r: "growX", d: 0.1, o: [10, 7] }],
    ["path", { d: "M10 18v4l2 -1l2 1v-4" }, { r: "swing", d: 0.15, a: 10, o: [12, 15] }],
    ["path", { d: "M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
