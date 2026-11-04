import { createIcon } from "../runtime/createIcon.js";

export const ListEnd = createIcon("ListEnd", "list-end", {
  nodes: [
    ["path", { d: "M16 5H3" }, { r: "growX", o: [3, 12] }],
    ["path", { d: "M16 12H3" }, { r: "growX", d: 0.05, o: [3, 12] }],
    ["path", { d: "M9 19H3" }, { r: "growX", d: 0.1, o: [3, 12] }],
    ["path", { d: "m16 16-3 3 3 3" }, { r: "redraw", d: 0.15, o: [17, 13.5] }],
    ["path", { d: "M21 5v12a2 2 0 0 1-2 2h-6" }, { r: "redraw", d: 0.15, o: [17, 13.5] }],
  ],
});
