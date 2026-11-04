import { createIcon } from "../runtime/createIcon.js";

export const Columns4 = createIcon("Columns4", "columns-4", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7.5 3v18" }, { r: "grow", d: 0.05, o: [12, 12] }],
    ["path", { d: "M12 3v18" }, { r: "grow", d: 0.13, o: [12, 12] }],
    ["path", { d: "M16.5 3v18" }, { r: "grow", d: 0.21, o: [12, 12] }],
  ],
});
