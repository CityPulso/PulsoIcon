import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "alert-square-rounded" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlertSquareRounded = createIcon("AlertSquareRounded", "alert-square-rounded", {
  nodes: [
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }, { r: "shake", a: 0.6 }],
    ["path", { d: "M12 8v4" }, { r: "draw" }],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.3, o: [12, 16] }],
  ],
});
