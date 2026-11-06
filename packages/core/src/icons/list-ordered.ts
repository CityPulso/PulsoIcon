import { icon } from "../icon.js";

export const ListOrdered = icon("ListOrdered", "list-ordered", {
  nodes: [
    ["path", { d: "M11 5h10" }, { r: "growX", d: 0.1, o: [11, 12] }],
    ["path", { d: "M11 12h10" }, { r: "growX", d: 0.15, o: [11, 12] }],
    ["path", { d: "M11 19h10" }, { r: "growX", d: 0.2, o: [11, 12] }],
    ["path", { d: "M4 4h1v5" }, { r: "stamp", o: [4.5, 6.5] }],
    ["path", { d: "M4 9h2" }, { r: "stamp", d: 0.06, o: [5, 9] }],
    ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" }, { r: "stamp", d: 0.12, o: [4.95, 17.5] }],
  ],
});
