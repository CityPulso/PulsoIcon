import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "eye-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const EyePlus = createIcon("EyePlus", "eye-plus", {
  nodes: [
    ["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" }],
    ["path", { d: "M16 19h6" }, { r: "pop", o: [19, 18] }],
    ["path", { d: "M19 16v6" }, { r: "pop", o: [19, 18] }],
  ],
});
