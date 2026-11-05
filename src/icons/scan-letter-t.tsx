import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "scan-letter-t" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ScanLetterT = createIcon("ScanLetterT", "scan-letter-t", {
  text: true,
  nodes: [
    ["path", { d: "M9 8h6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 8v8" }, { r: "draw", d: 0.22 }],
    ["path", { d: "M3 7v-2a2 2 0 0 1 2 -2h2" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M3 17v2a2 2 0 0 0 2 2h2" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M17 21h2a2 2 0 0 0 2 -2v-2" }, { r: "pulse", a: 0.06, o: [12, 12] }],
  ],
});
