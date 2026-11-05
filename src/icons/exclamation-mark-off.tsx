import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "exclamation-mark-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ExclamationMarkOff = createIcon("ExclamationMarkOff", "exclamation-mark-off", {
  nodes: [
    ["path", { d: "M12 19v.01" }, { r: "pop", d: 0.15, o: [12, 19] }],
    ["path", { d: "M12 15v-3m0 -4v-3" }, { r: "draw" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M12 19v.01", fill: "none" }, { r: "pop", d: 0.15, o: [12, 19] }],
    ["path", { d: "M12 15v-10", fill: "none" }, { r: "draw" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
