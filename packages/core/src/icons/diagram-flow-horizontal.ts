import { icon } from "../icon.js";

export const DiagramFlowHorizontal = icon("DiagramFlowHorizontal", "diagram-flow-horizontal", {
  nodes: [
    ["rect", { x: "2", y: "9", width: "6", height: "6", rx: "1" }, { r: "pop", o: [5, 12] }],
    ["path", { d: "M8.5 12A3.5 3.5 0 0 0 12 8.5 3.5 3.5 0 0 1 15.5 5h.5" }, { r: "draw", d: 0.1, o: [12, 8.5] }],
    ["path", { d: "M8 12h.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 0 3.5 3.5h.5" }, { r: "draw", d: 0.1, o: [12, 15.5] }],
    ["rect", { x: "16", y: "2", width: "6", height: "6", rx: "1" }, { r: "pop", d: 0.3, o: [19, 5] }],
    ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1" }, { r: "pop", d: 0.35, o: [19, 19] }],
  ],
});
