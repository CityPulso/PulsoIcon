import { icon } from "../icon.js";

export const Table2 = icon("Table2", "table-2", {
  nodes: [
    ["path", { d: "M3 9h18" }, { r: "growX", d: 0.05, o: [3, 9] }],
    ["path", { d: "M9 3v18" }, { r: "grow", d: 0.12, o: [9, 3] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
