import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "api-app-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ApiAppOff = createIcon("ApiAppOff", "api-app-off", {
  nodes: [
    ["path", { d: "M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M15 15v3.5a2.5 2.5 0 1 1 -5 0v-.5" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M13 9h5.5a2.5 2.5 0 1 1 0 5h-.5" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M9 12v-3m.042 -3.957a2.5 2.5 0 0 1 4.958 .457v.5" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
