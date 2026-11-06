import { icon } from "../icon.js";

// Adapted from Tabler Icons "git-merge-queue" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GitMergeQueue = icon("GitMergeQueue", "git-merge-queue", {
  nodes: [
    ["path", { d: "M4 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M16 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "pop", d: 0.3, o: [18, 12] }],
    ["path", { d: "M6 11v5" }],
    ["path", { d: "M5.5 4.5h.01" }, { r: "pop", o: [5.5, 4.5] }],
    ["path", { d: "M10.5 9.5h.01" }, { r: "pop", d: 0.15, o: [10.5, 9.5] }],
  ],
});
