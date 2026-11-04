import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "door-exit" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DoorExit = createIcon("DoorExit", "door-exit", {
  nodes: [
    ["path", { d: "M13 12v.01" }],
    ["path", { d: "M3 21h18" }],
    ["path", { d: "M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5" }],
    ["path", { d: "M14 7h7m-3 -3l3 3l-3 3" }, { r: "slide", x: 1, a: 2 }],
  ],
});
