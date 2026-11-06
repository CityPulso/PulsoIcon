import { icon } from "../icon.js";

export const ListX = icon("ListX", "list-x", {
  nodes: [
    ["path", { d: "M16 5H3" }, { r: "shake", a: 1, o: [9.5, 12] }],
    ["path", { d: "M11 12H3" }, { r: "shake", d: 0.04, a: 1, o: [9.5, 12] }],
    ["path", { d: "M16 19H3" }, { r: "shake", d: 0.08, a: 1, o: [9.5, 12] }],
    ["path", { d: "m15.5 9.5 5 5" }, { r: "draw", d: 0.15, o: [18, 12] }],
    ["path", { d: "m20.5 9.5-5 5" }, { r: "draw", d: 0.25, o: [18, 12] }],
  ],
});
