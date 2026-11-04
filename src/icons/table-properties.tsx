import { createIcon } from "../runtime/createIcon.js";

export const TableProperties = createIcon("TableProperties", "table-properties", {
  nodes: [
    ["path", { d: "M15 3v18" }, { r: "grow", d: 0.15, o: [15, 3] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M21 9H3" }, { r: "growX", d: 0.05, o: [3, 12] }],
    ["path", { d: "M21 15H3" }, { r: "growX", d: 0.11, o: [3, 12] }],
  ],
});
