import { createIcon } from "../runtime/createIcon.js";

export const ListPlus = createIcon("ListPlus", "list-plus", {
  nodes: [
    ["path", { d: "M16 5H3" }, { r: "growX", o: [3, 12] }],
    ["path", { d: "M11 12H3" }, { r: "growX", d: 0.05, o: [3, 12] }],
    ["path", { d: "M16 19H3" }, { r: "growX", d: 0.1, o: [3, 12] }],
    ["path", { d: "M18 9v6" }, { r: "spin", d: 0.2, a: 90, o: [18, 12] }],
    ["path", { d: "M21 12h-6" }, { r: "spin", d: 0.2, a: 90, o: [18, 12] }],
  ],
});
