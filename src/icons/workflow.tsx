import { createIcon } from "../runtime/createIcon.js";

export const Workflow = createIcon("Workflow", "workflow", {
  nodes: [
    ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2" }, { r: "pop", o: [7, 7] }],
    ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4" }, { r: "draw", d: 0.1, o: [10, 14] }],
    ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2" }, { r: "pop", d: 0.25, o: [17, 17] }],
  ],
});
