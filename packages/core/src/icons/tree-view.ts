import { icon } from "../icon.js";

// Drawn after Phosphor Icons "tree-view" (MIT, Copyright (c) 2023 Phosphor Icons).

export const TreeView = icon("TreeView", "tree-view", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "5", height: "5", rx: "1" }, { r: "pop", o: [5.5, 5.5] }],
    ["path", { d: "M5.5 8v10.5H16" }, { r: "draw", d: 0.1, o: [5.5, 13] }],
    ["path", { d: "M5.5 11.5H16" }, { r: "draw", d: 0.1, o: [5.5, 11.5] }],
    ["rect", { x: "16", y: "9", width: "5", height: "5", rx: "1" }, { r: "pop", d: 0.25, o: [18.5, 11.5] }],
    ["rect", { x: "16", y: "16", width: "5", height: "5", rx: "1" }, { r: "pop", d: 0.32, o: [18.5, 18.5] }],
  ],
});
