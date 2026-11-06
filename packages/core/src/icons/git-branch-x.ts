import { icon } from "../icon.js";

// Adapted from Tabler Icons "git-branch-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GitBranchX = icon("GitBranchX", "git-branch-x", {
  nodes: [
    ["path", { d: "M5 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M5 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M15 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M7 8v8" }],
    ["path", { d: "M7 12h8a2 2 0 0 0 2 -2v-2" }, { r: "draw" }],
    ["path", { d: "M22 22l-5 -5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M17 22l5 -5" }, { r: "draw", d: 0.3 }],
  ],
});
