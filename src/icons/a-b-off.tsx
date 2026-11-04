import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "a-b-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ABOff = createIcon("ABOff", "a-b-off", {
  nodes: [
    ["path", { d: "M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" }, { r: "draw" }],
    ["path", { d: "M12 12v6" }, { r: "pop", d: 0.05, o: [12, 12] }],
    ["path", { d: "M12 6v2" }, { r: "pop", d: 0.05, o: [12, 12] }],
    ["path", { d: "M16 8h3a2 2 0 1 1 0 4h-3m3 0a2 2 0 0 1 .83 3.82m-3.83 -3.82v-4" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
