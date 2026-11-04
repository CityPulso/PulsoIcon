import { createIcon } from "../runtime/createIcon.js";

export const ListTree = createIcon("ListTree", "list-tree", {
  nodes: [
    ["path", { d: "M8 5h13" }, { r: "growX", o: [8, 5] }],
    ["path", { d: "M13 12h8" }, { r: "growX", d: 0.15, o: [13, 15] }],
    ["path", { d: "M13 19h8" }, { r: "growX", d: 0.21, o: [13, 15] }],
    ["path", { d: "M3 10a2 2 0 0 0 2 2h3" }, { r: "draw", d: 0.05, o: [5.5, 12] }],
    ["path", { d: "M3 5v12a2 2 0 0 0 2 2h3" }, { r: "draw", d: 0.05, o: [5.5, 12] }],
  ],
});
