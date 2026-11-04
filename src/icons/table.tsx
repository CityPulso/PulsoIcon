import { createIcon } from "../runtime/createIcon.js";

export const Table = createIcon("Table", "table", {
  nodes: [
    ["path", { d: "M12 3v18" }, { r: "grow", d: 0.15, o: [12, 3] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "growX", d: 0.05, o: [3, 12] }],
    ["path", { d: "M3 15h18" }, { r: "growX", d: 0.11, o: [3, 12] }],
  ],
});
