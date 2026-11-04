import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "refresh-alert" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RefreshAlert = createIcon("RefreshAlert", "refresh-alert", {
  nodes: [
    ["path", { d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" }, { r: "spin", a: -180, o: [12, 12] }],
    ["path", { d: "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" }, { r: "spin", a: -180, o: [12, 12] }],
    ["path", { d: "M12 9l0 3" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M12 15l.01 0" }, { r: "pop", d: 0.5, o: [12, 15] }],
  ],
});
