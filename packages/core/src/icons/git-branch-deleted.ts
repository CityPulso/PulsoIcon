import { icon } from "../icon.js";

// Adapted from Tabler Icons "git-branch-deleted" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GitBranchDeleted = icon("GitBranchDeleted", "git-branch-deleted", {
  nodes: [
    ["path", { d: "M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M7 8v8" }],
    ["path", { d: "M9 18h6a2 2 0 0 0 2 -2v-5" }, { r: "draw" }],
    ["path", { d: "M14 14l3 -3l3 3" }, { r: "slide", y: -1, a: 1.5 }],
    ["path", { d: "M15 4l4 4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M15 8l4 -4" }, { r: "draw", d: 0.3 }],
  ],
});
