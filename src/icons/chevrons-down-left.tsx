import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "chevrons-down-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ChevronsDownLeft = createIcon("ChevronsDownLeft", "chevrons-down-left", {
  nodes: [
    ["path", { d: "M11 5v8h8" }, { r: "slide", x: -0.7, y: 0.7, a: 1.5, o: [12, 12] }],
    ["path", { d: "M7 9v8h8" }, { r: "slide", d: 0.1, x: -0.7, y: 0.7, a: 1.5, o: [12, 12] }],
  ],
});
