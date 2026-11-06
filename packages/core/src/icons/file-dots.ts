import { icon } from "../icon.js";

// Adapted from Tabler Icons "file-dots" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileDots = icon("FileDots", "file-dots", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" }],
    ["path", { d: "M9 14v.01" }, { r: "pop", d: 0.05, o: [9, 14] }],
    ["path", { d: "M12 14v.01" }, { r: "pop", d: 0.15, o: [12, 14] }],
    ["path", { d: "M15 14v.01" }, { r: "pop", d: 0.25, o: [15, 14] }],
  ],
});
