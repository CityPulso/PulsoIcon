import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "model-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ModelAi = createIcon("ModelAi", "model-ai", {
  text: true,
  nodes: [
    ["path", { d: "M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "pop", o: [6, 19] }],
    ["path", { d: "M4 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "pop", o: [6, 5] }],
    ["path", { d: "M9 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "pop", d: 0.2, o: [11, 12] }],
    ["path", { d: "M17 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "pop", d: 0.4, o: [19, 12] }],
    ["path", { d: "M13 12h4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M9.75 10.25l-2.5 -3.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9.75 13.75l-2.5 3.5" }, { r: "draw", d: 0.1 }],
  ],
});
