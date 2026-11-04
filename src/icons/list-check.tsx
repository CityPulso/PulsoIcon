import { createIcon } from "../runtime/createIcon.js";

export const ListCheck = createIcon("ListCheck", "list-check", {
  nodes: [
    ["path", { d: "M16 5H3" }, { r: "growX", o: [3, 12] }],
    ["path", { d: "M16 12H3" }, { r: "growX", d: 0.06, o: [3, 12] }],
    ["path", { d: "M11 19H3" }, { r: "growX", d: 0.12, o: [3, 12] }],
    ["path", { d: "m15 18 2 2 4-4" }, { r: "draw", d: 0.2, o: [18, 18] }],
  ],
});
