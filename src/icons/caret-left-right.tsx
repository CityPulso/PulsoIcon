import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "caret-left-right" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CaretLeftRight = createIcon("CaretLeftRight", "caret-left-right", {
  nodes: [
    ["path", { d: "M14 18l6 -6l-6 -6v12" }, { r: "slide", x: 1, a: 1.5, o: [17, 12] }],
    ["path", { d: "M10 18l-6 -6l6 -6v12" }, { r: "slide", x: -1, a: 1.5, o: [7, 12] }],
  ],
});
