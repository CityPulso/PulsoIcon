import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "id-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const IdOff = createIcon("IdOff", "id-off", {
  nodes: [
    ["path", { d: "M8 4h10a3 3 0 0 1 3 3v10m-1.437 2.561c-.455 .279 -.99 .439 -1.563 .439h-12a3 3 0 0 1 -3 -3v-10c0 -1.083 .573 -2.031 1.433 -2.559" }],
    ["path", { d: "M8.175 8.178a2 2 0 1 0 2.646 2.65" }, { r: "pop", o: [9.5, 10] }],
    ["path", { d: "M15 8h2" }, { r: "growX", d: 0.08, o: [15, 8] }],
    ["path", { d: "M16 12h1" }, { r: "growX", d: 0.12, o: [16, 12] }],
    ["path", { d: "M7 16h9" }, { r: "growX", d: 0.16, o: [7, 16] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
