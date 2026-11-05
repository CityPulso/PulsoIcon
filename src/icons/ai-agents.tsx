import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ai-agents" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AiAgents = createIcon("AiAgents", "ai-agents", {
  text: true,
  nodes: [
    ["path", { d: "M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.2, o: [19, 19] }],
    ["path", { d: "M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.2, o: [5, 19] }],
    ["path", { d: "M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", o: [12, 5] }],
    ["path", { d: "M6 5a1 1 0 1 0 -2 0a1 1 0 0 0 2 0" }, { r: "twinkle", d: 0.3, o: [5, 5] }],
    ["path", { d: "M18 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, { r: "twinkle", d: 0.3, o: [19, 5] }],
    ["path", { d: "M4 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, { r: "pop", d: 0.1, o: [5, 12] }],
    ["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["path", { d: "M18 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, { r: "pop", d: 0.1, o: [19, 12] }],
    ["path", { d: "M11 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, { r: "pop", d: 0.2, o: [12, 19] }],
  ],
});
