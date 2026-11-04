import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "window-maximize" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WindowMaximize = createIcon("WindowMaximize", "window-maximize", {
  nodes: [
    ["path", { d: "M3 17a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1l0 -3" }, { r: "pulse", d: 0.15, a: 0.15, o: [5.5, 18.5] }],
    ["path", { d: "M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" }],
    ["path", { d: "M12 8h4v4" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [14, 10] }],
    ["path", { d: "M16 8l-5 5" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [14, 10] }],
  ],
});
