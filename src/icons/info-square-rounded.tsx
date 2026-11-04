import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "info-square-rounded" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const InfoSquareRounded = createIcon("InfoSquareRounded", "info-square-rounded", {
  nodes: [
    ["path", { d: "M12 9h.01" }, { r: "pop", d: 0.2, o: [12, 9] }],
    ["path", { d: "M11 12h1v4h1" }, { r: "draw" }],
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }],
  ],
});
