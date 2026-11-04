import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "jump-rope" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const JumpRope = createIcon("JumpRope", "jump-rope", {
  nodes: [
    ["path", { d: "M6 14v-6a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6" }, { r: "redraw" }],
    ["path", { d: "M16 5a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -3" }, { r: "swing", a: 10, o: [18, 10] }],
    ["path", { d: "M4 16a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -3" }, { r: "swing", a: -10, o: [6, 14] }],
  ],
});
