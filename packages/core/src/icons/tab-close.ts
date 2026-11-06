import { icon } from "../icon.js";

// Adapted from Tabler Icons "tab-close" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TabClose = icon("TabClose", "tab-close", {
  nodes: [
    ["path", { d: "M3 21v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1" }],
    ["path", { d: "M6 15a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2" }, { r: "press", d: 0.25, a: 0.1, o: [12, 15] }],
    ["path", { d: "M15 6l-3 3l-3 -3" }, { r: "slide", x: 0, y: 1, a: 2, o: [12, 7] }],
    ["path", { d: "M12 9v-6" }, { r: "slide", x: 0, y: 1, a: 2, o: [12, 7] }],
  ],
});
