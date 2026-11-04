import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-text-shield" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileTextShield = createIcon("FileTextShield", "file-text-shield", {
  nodes: [
    ["path", { d: "M13 3v4a.997 .997 0 0 0 1 1h4" }],
    ["path", { d: "M11 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5" }],
    ["path", { d: "M8 9h1" }, { r: "growX", d: 0.05, o: [8, 9] }],
    ["path", { d: "M8 12.994l3 0" }, { r: "growX", d: 0.13, o: [8, 13] }],
    ["path", { d: "M8 16.997l2 0" }, { r: "growX", d: 0.21, o: [8, 17] }],
    ["path", { d: "M21 15.994c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5" }, { r: "pulse", d: 0.3, a: 0.12, o: [17.5, 18] }],
  ],
});
