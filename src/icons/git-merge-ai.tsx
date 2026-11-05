import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "git-merge-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GitMergeAi = createIcon("GitMergeAi", "git-merge-ai", {
  text: true,
  nodes: [
    ["path", { d: "M5 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M5 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M7 8v8" }],
    ["path", { d: "M7 8a4 4 0 0 0 4 4h2" }, { r: "draw" }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.35 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.4 }],
  ],
});
