import { createIcon } from "../runtime/createIcon.js";

export const Proportions = createIcon("Proportions", "proportions", {
  nodes: [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 9v11" }, { r: "grow", d: 0.05, o: [12, 20] }],
    ["path", { d: "M2 9h13a2 2 0 0 1 2 2v9" }, { r: "draw", d: 0.1, o: [9.5, 14.5] }],
  ],
});
