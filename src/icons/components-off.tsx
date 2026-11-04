import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "components-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ComponentsOff = createIcon("ComponentsOff", "components-off", {
  nodes: [
    ["path", { d: "M3 12l3 3l3 -3l-3 -3l-3 3" }, { r: "pop", o: [6, 12] }],
    ["path", { d: "M18.5 14.5l2.5 -2.5l-3 -3l-2.5 2.5" }, { r: "pop", d: 0.16, o: [18, 12] }],
    ["path", { d: "M12.499 8.501l2.501 -2.501l-3 -3l-2.5 2.5" }, { r: "pop", d: 0.08, o: [12, 6] }],
    ["path", { d: "M9 18l3 3l3 -3l-3 -3l-3 3" }, { r: "pop", d: 0.24, o: [12, 18] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
