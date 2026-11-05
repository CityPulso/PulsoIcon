import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "git-pull-request-draft-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GitPullRequestDraftAi = createIcon("GitPullRequestDraftAi", "git-pull-request-draft-ai", {
  text: true,
  nodes: [
    ["path", { d: "M4 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M4 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M6 8v8" }],
    ["path", { d: "M18 11h.01" }, { r: "pop", d: 0.12, o: [18, 11] }],
    ["path", { d: "M18 6h.01" }, { r: "pop", o: [18, 6] }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.4 }],
  ],
});
