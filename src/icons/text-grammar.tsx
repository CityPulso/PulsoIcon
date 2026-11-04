import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "text-grammar" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextGrammar = createIcon("TextGrammar", "text-grammar", {
  nodes: [
    ["path", { d: "M14 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M4 12v-5a3 3 0 1 1 6 0v5" }, { r: "draw" }],
    ["path", { d: "M4 9h6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M20 6v6" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M4 16h12" }, { r: "growX", d: 0.25, o: [4, 16] }],
    ["path", { d: "M4 20h6" }, { r: "growX", d: 0.3, o: [4, 20] }],
    ["path", { d: "M14 20l2 2l5 -5" }, { r: "draw", d: 0.4 }],
  ],
});
