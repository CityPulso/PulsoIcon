import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "binary-tree-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BinaryTree2 = createIcon("BinaryTree2", "binary-tree-2", {
  nodes: [
    ["path", { d: "M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", o: [12.0, 6.0] }],
    ["path", { d: "M7 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.25, o: [5.0, 14.0] }],
    ["path", { d: "M21 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.25, o: [19.0, 14.0] }],
    ["path", { d: "M14 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" }, { r: "pop", d: 0.3, o: [12.0, 18.0] }],
    ["path", { d: "M12 8v8" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M6.316 12.496l4.368 -4.992" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17.684 12.496l-4.366 -4.99" }, { r: "draw", d: 0.1 }],
  ],
});
