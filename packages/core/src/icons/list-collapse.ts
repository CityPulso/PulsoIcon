import { icon } from "../icon.js";

export const ListCollapse = icon("ListCollapse", "list-collapse", {
  nodes: [
    ["path", { d: "M10 5h11" }, { r: "growX", d: 0.1, o: [10, 12] }],
    ["path", { d: "M10 12h11" }, { r: "growX", d: 0.15, o: [10, 12] }],
    ["path", { d: "M10 19h11" }, { r: "growX", d: 0.2, o: [10, 12] }],
    ["path", { d: "m3 10 3-3-3-3" }, { r: "slide", y: 1, a: 1.5, o: [4.5, 7] }],
    ["path", { d: "m3 20 3-3-3-3" }, { r: "slide", y: -1, a: 1.5, o: [4.5, 17] }],
  ],
});
