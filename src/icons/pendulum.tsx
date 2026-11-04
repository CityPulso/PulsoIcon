import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pendulum" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Pendulum = createIcon("Pendulum", "pendulum", {
  nodes: [
    ["path", { d: "M5 19a2 2 0 1 1 4 0a2 2 0 0 1 -4 0" }, { r: "swing", a: 15, o: [12, 3] }],
    ["path", { d: "M12 3l-4.4 14.09" }, { r: "swing", a: 15, o: [12, 3] }],
    ["path", { d: "M19 3h-14" }],
  ],
});
