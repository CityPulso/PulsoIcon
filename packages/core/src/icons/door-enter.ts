import { icon } from "../icon.js";

// Adapted from Tabler Icons "door-enter" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DoorEnter = icon("DoorEnter", "door-enter", {
  nodes: [
    ["path", { d: "M13 12v.01" }],
    ["path", { d: "M3 21h18" }],
    ["path", { d: "M5 21v-16a2 2 0 0 1 2 -2h6m4 10.5v7.5" }],
    ["path", { d: "M21 7h-7m3 -3l-3 3l3 3" }, { r: "slide", x: -1, a: 2 }],
  ],
});
