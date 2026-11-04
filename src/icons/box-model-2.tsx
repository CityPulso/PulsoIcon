import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "box-model-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BoxModel2 = createIcon("BoxModel2", "box-model-2", {
  nodes: [
    ["path", { d: "M8 8h8v8h-8l0 -8" }, { r: "pulse", a: 0.12, o: [12, 12] }],
    ["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
