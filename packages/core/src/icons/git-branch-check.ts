import { icon } from "../icon.js";

// Adapted from Tabler Icons "git-branch-check" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GitBranchCheck = icon("GitBranchCheck", "git-branch-check", {
  nodes: [
    ["path", { d: "M5 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M5 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M15 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M7 8v8" }],
    ["path", { d: "M7 12h8a2 2 0 0 0 2 -2v-2" }, { r: "draw" }],
    ["path", { d: "M15 19l2 2l4 -4" }, { r: "draw", d: 0.1 }],
  ],
});
