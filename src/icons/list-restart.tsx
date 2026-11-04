import { createIcon } from "../runtime/createIcon.js";

export const ListRestart = createIcon("ListRestart", "list-restart", {
  nodes: [
    ["path", { d: "M21 5H3" }, { r: "growX", o: [3, 12] }],
    ["path", { d: "M7 12H3" }, { r: "growX", d: 0.05, o: [3, 12] }],
    ["path", { d: "M7 19H3" }, { r: "growX", d: 0.1, o: [3, 12] }],
    ["path", { d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" }, { r: "spin", d: 0.1, a: -360, o: [16, 15] }],
    ["path", { d: "M11 10v4h4" }, { r: "spin", d: 0.1, a: -360, o: [16, 15] }],
  ],
});
