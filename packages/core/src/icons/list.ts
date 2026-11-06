import { icon } from "../icon.js";

export const List = icon("List", "list", {
  nodes: [
    ["path", { d: "M3 5h.01" }, { r: "pop", o: [3.005, 5] }],
    ["path", { d: "M3 12h.01" }, { r: "pop", d: 0.06, o: [3.005, 12] }],
    ["path", { d: "M3 19h.01" }, { r: "pop", d: 0.12, o: [3.005, 19] }],
    ["path", { d: "M8 5h13" }, { r: "growX", d: 0.05, o: [8, 12] }],
    ["path", { d: "M8 12h13" }, { r: "growX", d: 0.11, o: [8, 12] }],
    ["path", { d: "M8 19h13" }, { r: "growX", d: 0.17, o: [8, 12] }],
  ],
});
