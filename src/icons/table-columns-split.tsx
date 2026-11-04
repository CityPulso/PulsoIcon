import { createIcon } from "../runtime/createIcon.js";

export const TableColumnsSplit = createIcon("TableColumnsSplit", "table-columns-split", {
  nodes: [
    ["path", { d: "M14 14v2" }, { r: "fade", d: 0.13, o: [14, 12] }],
    ["path", { d: "M14 20v2" }, { r: "fade", d: 0.17, o: [14, 12] }],
    ["path", { d: "M14 2v2" }, { r: "fade", d: 0.05, o: [14, 12] }],
    ["path", { d: "M14 8v2" }, { r: "fade", d: 0.09, o: [14, 12] }],
    ["path", { d: "M2 15h8" }, { r: "slide", x: -1, a: 1, o: [6, 12] }],
    ["path", { d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" }, { r: "slide", x: -1, a: 1, o: [6, 12] }],
    ["path", { d: "M2 9h8" }, { r: "slide", x: -1, a: 1, o: [6, 12] }],
    ["path", { d: "M22 15h-4" }, { r: "slide", x: 1, a: 1, o: [20, 12] }],
    ["path", { d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }, { r: "slide", x: 1, a: 1, o: [20, 12] }],
    ["path", { d: "M22 9h-4" }, { r: "slide", x: 1, a: 1, o: [20, 12] }],
    ["path", { d: "M5 3v18" }, { r: "slide", x: -1, a: 1, o: [6, 12] }],
  ],
});
