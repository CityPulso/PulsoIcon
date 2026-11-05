import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "test-pipe-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "test-pipe-2" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TestPipe2 = createIcon("TestPipe2", "test-pipe-2", {
  nodes: [
    ["path", { d: "M15 3v15a3 3 0 0 1 -6 0v-15" }, { r: "swing", o: [12, 3] }],
    ["path", { d: "M9 12h6" }, { r: "swing", o: [12, 3] }],
    ["path", { d: "M8 3h8" }, { r: "swing", o: [12, 3] }],
  ],
  solid: [["path", { d: "M16 2a1 1 0 0 1 0 2v14a4 4 0 1 1 -8 0v-14a1 1 0 1 1 0 -2zm-2 2h-4v7h4z", stroke: "none" }, { r: "swing", o: [12, 3] }]],
});
