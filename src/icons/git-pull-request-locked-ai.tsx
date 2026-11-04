import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "git-pull-request-locked-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GitPullRequestLockedAi = createIcon("GitPullRequestLockedAi", "git-pull-request-locked-ai", {
  nodes: [
    ["path", { d: "M4 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M4 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M6 8v8" }],
    ["path", { d: "M11 6h5a2 2 0 0 1 2 2v3.25" }, { r: "draw" }],
    ["path", { d: "M14 9l-3 -3l3 -3" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.4 }],
  ],
});
