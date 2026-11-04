import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "text-regex-start" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextRegexStart = createIcon("TextRegexStart", "text-regex-start", {
  nodes: [
    ["path", { d: "M17 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1" }],
    ["path", { d: "M14 16v-3a2 2 0 1 0 -4 0v1a2 2 0 0 0 3.726 1.01" }],
    ["path", { d: "M3 10l2 -2l2 2" }, { r: "bounce", y: -1, a: 1.5 }],
  ],
});
