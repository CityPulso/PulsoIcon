import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "git-pull-request-unlisted" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GitPullRequestUnlisted = createIcon("GitPullRequestUnlisted", "git-pull-request-unlisted", {
  nodes: [
    ["path", { d: "M17.5 4.5h.01" }, { r: "pop", o: [17.5, 4.5] }],
    ["path", { d: "M17.5 10.5h.01" }, { r: "pop", d: 0.12, o: [17.5, 10.5] }],
    ["path", { d: "M4 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M4 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M6 8v8" }],
    ["path", { d: "M16 16l3 3" }, { r: "draw", d: 0.25 }],
  ],
});
