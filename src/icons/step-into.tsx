import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "step-into" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StepInto = createIcon("StepInto", "step-into", {
  nodes: [
    ["path", { d: "M12 3l0 12" }, { r: "slide", x: 0, y: 1, a: 2 }],
    ["path", { d: "M16 11l-4 4" }, { r: "slide", x: 0, y: 1, a: 2 }],
    ["path", { d: "M8 11l4 4" }, { r: "slide", x: 0, y: 1, a: 2 }],
    ["path", { d: "M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "press", d: 0.25, a: 0.3, o: [12, 20] }],
  ],
});
