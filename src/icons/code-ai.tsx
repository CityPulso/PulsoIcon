import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "code-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CodeAi = createIcon("CodeAi", "code-ai", {
  nodes: [
    ["path", { d: "M7 8l-4 4l4 4" }, { r: "slide", x: -1, y: 0, a: 1 }],
    ["path", { d: "M17 8l3.111 3.111" }, { r: "slide", x: 1, y: 0, a: 1 }],
    ["path", { d: "M14 4l-2.175 8.7" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.4 }],
  ],
});
