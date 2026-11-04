import { createIcon } from "../runtime/createIcon.js";

export const TableCellsMerge = createIcon("TableCellsMerge", "table-cells-merge", {
  nodes: [
    ["path", { d: "M12 21v-6" }, { r: "slide", d: 0.05, y: -1, a: 2, o: [12, 18] }],
    ["path", { d: "M12 9V3" }, { r: "slide", d: 0.05, y: 1, a: 2, o: [12, 6] }],
    ["path", { d: "M3 15h18" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
