import { createIcon } from "../runtime/createIcon.js";

export const DiagramFlowVertical = createIcon("DiagramFlowVertical", "diagram-flow-vertical", {
  nodes: [
    ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1" }, { r: "pop", o: [12, 5] }],
    ["path", { d: "M12 8v.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 0 5 15.5v.5" }, { r: "draw", d: 0.1, o: [8.5, 12] }],
    ["path", { d: "M12 8.5a3.5 3.5 0 0 0 3.5 3.5 3.5 3.5 0 0 1 3.5 3.5v.5" }, { r: "draw", d: 0.1, o: [15.5, 12] }],
    ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1" }, { r: "pop", d: 0.3, o: [5, 19] }],
    ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1" }, { r: "pop", d: 0.35, o: [19, 19] }],
  ],
});
