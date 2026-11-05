import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "text-size" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextSize = createIcon("TextSize", "text-size", {
  text: true,
  nodes: [
    ["path", { d: "M3 7v-2h13v2" }, { r: "draw" }],
    ["path", { d: "M10 5v14" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 19h-4" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M15 13v-1h6v1" }, { r: "pop", d: 0.3, o: [18, 15.5] }],
    ["path", { d: "M18 12v7" }, { r: "pop", d: 0.3, o: [18, 15.5] }],
    ["path", { d: "M17 19h2" }, { r: "pop", d: 0.3, o: [18, 15.5] }],
  ],
});
