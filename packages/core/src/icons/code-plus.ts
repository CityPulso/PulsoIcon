import { icon } from "../icon.js";

// Adapted from Tabler Icons "code-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CodePlus = icon("CodePlus", "code-plus", {
  nodes: [
    ["path", { d: "M9 12h6" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M12 9v6" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" }, { r: "slide", x: 1, a: 1.5 }],
  ],
});
