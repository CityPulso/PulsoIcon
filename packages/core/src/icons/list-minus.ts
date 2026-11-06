import { icon } from "../icon.js";

export const ListMinus = icon("ListMinus", "list-minus", {
  nodes: [
    ["path", { d: "M16 5H3" }, { r: "growX", o: [3, 12] }],
    ["path", { d: "M11 12H3" }, { r: "growX", d: 0.05, o: [3, 12] }],
    ["path", { d: "M16 19H3" }, { r: "growX", d: 0.1, o: [3, 12] }],
    ["path", { d: "M21 12h-6" }, { r: "growX", d: 0.2, o: [18, 12] }],
  ],
});
