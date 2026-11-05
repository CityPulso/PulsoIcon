import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "text-regex-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextRegexPlus = createIcon("TextRegexPlus", "text-regex-plus", {
  text: true,
  nodes: [
    ["path", { d: "M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1" }],
    ["path", { d: "M7 16v-3a2 2 0 1 0 -4 0v1a2 2 0 0 0 3.726 1.01" }],
    ["path", { d: "M17 13h4" }, { r: "spin", a: 90, o: [19, 13] }],
    ["path", { d: "M19 11v4" }, { r: "spin", a: 90, o: [19, 13] }],
  ],
});
