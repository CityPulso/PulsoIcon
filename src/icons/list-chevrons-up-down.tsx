import { createIcon } from "../runtime/createIcon.js";

export const ListChevronsUpDown = createIcon("ListChevronsUpDown", "list-chevrons-up-down", {
  nodes: [
    ["path", { d: "M3 5h8" }, { r: "growX", o: [3, 12] }],
    ["path", { d: "M3 12h8" }, { r: "growX", d: 0.05, o: [3, 12] }],
    ["path", { d: "M3 19h8" }, { r: "growX", d: 0.1, o: [3, 12] }],
    ["path", { d: "m15 8 3-3 3 3" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [18, 6.5] }],
    ["path", { d: "m15 16 3 3 3-3" }, { r: "slide", d: 0.1, y: 1, a: 1.5, o: [18, 17.5] }],
  ],
});
