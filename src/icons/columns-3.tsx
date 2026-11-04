import { createIcon } from "../runtime/createIcon.js";

export const Columns3 = createIcon("Columns3", "columns-3", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 3v18" }, { r: "grow", d: 0.05, o: [12, 12] }],
    ["path", { d: "M15 3v18" }, { r: "grow", d: 0.15, o: [12, 12] }],
  ],
});
