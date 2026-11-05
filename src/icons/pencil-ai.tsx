import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pencil-ai" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PencilAi = createIcon("PencilAi", "pencil-ai", {
  text: true,
  nodes: [
    ["path", { d: "M17.013 10.987l1.487 -1.487a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4h4l2 -2" }],
    ["path", { d: "M13.5 6.5l4 4" }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw" }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.3 }],
  ],
});
