import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "text-regex-question" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextRegexQuestion = createIcon("TextRegexQuestion", "text-regex-question", {
  text: true,
  nodes: [
    ["path", { d: "M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1" }],
    ["path", { d: "M7 16v-3a2 2 0 1 0 -4 0v1a2 2 0 0 0 3.726 1.01" }],
    ["path", { d: "M19 16v.01" }, { r: "pop", d: 0.3, o: [19, 16] }],
    ["path", { d: "M19 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" }, { r: "draw" }],
  ],
});
