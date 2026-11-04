import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circuit-ground" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircuitGround = createIcon("CircuitGround", "circuit-ground", {
  nodes: [
    ["path", { d: "M12 13v-8" }],
    ["path", { d: "M4 13h16" }, { r: "growX", o: [12, 13] }],
    ["path", { d: "M7 16h10" }, { r: "growX", d: 0.1, o: [12, 16] }],
    ["path", { d: "M10 19h4" }, { r: "growX", d: 0.2, o: [12, 19] }],
  ],
});
