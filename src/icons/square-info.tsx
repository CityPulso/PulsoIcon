import { createIcon } from "../runtime/createIcon.js";

export const SquareInfo = createIcon("SquareInfo", "square-info", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M12 16v-4" }, { r: "grow", d: 0.15, o: [12, 16] }],
    ["path", { d: "M12 8h.01" }, { r: "drop", d: 0.05, o: [12.005, 8] }],
  ],
});
