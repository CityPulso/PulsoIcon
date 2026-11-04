import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "git-pull-request-locked" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GitPullRequestLocked = createIcon("GitPullRequestLocked", "git-pull-request-locked", {
  nodes: [
    ["path", { d: "M4 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M4 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M6 8v8" }],
    ["path", { d: "M11 6h5a2 2 0 0 1 2 2v1" }, { r: "drawBack" }],
    ["path", { d: "M14 9l-3 -3l3 -3" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M14 17a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-3" }, { r: "press", d: 0.2, a: 0.1, o: [17.5, 18.5] }],
    ["path", { d: "M16 16v-1.5a1.5 1.5 0 1 1 3 0v1.5" }, { r: "lift", y: -1, a: 0, o: [17.5, 14.5] }],
  ],
});
