import { createIcon } from "../runtime/createIcon.js";

export const ListSortDescending = createIcon("ListSortDescending", "list-sort-descending", {
  nodes: [
    ["path", { d: "M15 12H3" }, { r: "growX", d: 0.08, o: [3, 12] }],
    ["path", { d: "M3 5h18" }, { r: "growX", o: [3, 5] }],
    ["path", { d: "M9 19H3" }, { r: "growX", d: 0.16, o: [3, 19] }],
  ],
});
