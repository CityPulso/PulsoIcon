import { createIcon } from "../runtime/createIcon.js";

export const Columns2 = createIcon("Columns2", "columns-2", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 3v18" }, { r: "grow", d: 0.1, o: [12, 12] }],
  ],
});
