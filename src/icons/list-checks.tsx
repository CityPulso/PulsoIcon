import { createIcon } from "../runtime/createIcon.js";

export const ListChecks = createIcon("ListChecks", "list-checks", {
  nodes: [
    ["path", { d: "M13 5h8" }, { r: "growX", d: 0.1, o: [13, 12] }],
    ["path", { d: "M13 12h8" }, { r: "growX", d: 0.15, o: [13, 12] }],
    ["path", { d: "M13 19h8" }, { r: "growX", d: 0.2, o: [13, 12] }],
    ["path", { d: "m3 17 2 2 4-4" }, { r: "draw", d: 0.15, o: [6, 17] }],
    ["path", { d: "m3 7 2 2 4-4" }, { r: "draw", o: [6, 7] }],
  ],
});
