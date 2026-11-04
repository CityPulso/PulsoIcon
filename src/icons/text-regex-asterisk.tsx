import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "text-regex-asterisk" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextRegexAsterisk = createIcon("TextRegexAsterisk", "text-regex-asterisk", {
  nodes: [
    ["path", { d: "M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1" }],
    ["path", { d: "M7 16v-3a2 2 0 1 0 -4 0v1a2 2 0 0 0 3.726 1.01" }],
    ["path", { d: "M19 9.5v5" }, { r: "spin", a: 120, o: [19, 12] }],
    ["path", { d: "M17 10.75l4 2.5" }, { r: "spin", a: 120, o: [19, 12] }],
    ["path", { d: "M17 13.25l4 -2.5" }, { r: "spin", a: 120, o: [19, 12] }],
  ],
});
