import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "script-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ScriptMinus = createIcon("ScriptMinus", "script-minus", {
  nodes: [
    ["path", { d: "M17 19h4" }, { r: "pop", o: [19, 19] }],
    ["path", { d: "M14 20h-8a3 3 0 0 1 0 -6h11a3 3 0 0 0 -3 3m7 -2v-9a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v8" }],
  ],
});
