import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rounded-arrow-left" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedArrowLeft = createIcon("SquareRoundedArrowLeft", "square-rounded-arrow-left", {
  nodes: [
    ["path", { d: "M12 8l-4 4l4 4" }, { r: "slide", x: -1, y: 0, a: 2, o: [12, 12] }],
    ["path", { d: "M16 12h-8" }, { r: "slide", x: -1, y: 0, a: 2, o: [12, 12] }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }],
  ],
});
