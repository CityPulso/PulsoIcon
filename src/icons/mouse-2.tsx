import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mouse-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Mouse2 = createIcon("Mouse2", "mouse-2", {
  nodes: [
    ["path", { d: "M6 7a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4l0 -10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 3v7" }, { r: "bounce", d: 0.05, y: 1, a: 1, o: [12, 6.5] }],
    ["path", { d: "M6 10h12" }],
  ],
});
