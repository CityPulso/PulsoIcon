import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "binary-tree" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BinaryTree = createIcon("BinaryTree", "binary-tree", {
  nodes: [
    ["path", { d: "M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.3, o: [4, 20] }],
    ["path", { d: "M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", o: [14, 4] }],
    ["path", { d: "M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.3, o: [14, 20] }],
    ["path", { d: "M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.15, o: [9, 12] }],
    ["path", { d: "M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.15, o: [19, 12] }],
    ["path", { d: "M5.058 18.306l2.88 -4.606" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M10.061 10.303l2.877 -4.604" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M10.065 13.705l2.876 4.6" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M15.063 5.7l2.881 4.61" }, { r: "draw", d: 0.1 }],
  ],
});
