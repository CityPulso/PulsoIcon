import { icon } from "../icon.js";

export const TableCellsSplit = icon("TableCellsSplit", "table-cells-split", {
  nodes: [
    ["path", { d: "M12 15V9" }, { r: "grow", d: 0.05, o: [12, 12] }],
    ["path", { d: "M3 15h18" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
