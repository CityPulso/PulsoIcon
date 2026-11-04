import { createIcon } from "../runtime/createIcon.js";

export const SquareKeyboard = createIcon("SquareKeyboard", "square-keyboard", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M7 8h.01" }, { r: "press", d: 0.05, a: 0.5, o: [7, 8] }],
    ["path", { d: "M10.33 8h.01" }, { r: "press", d: 0.09, a: 0.5, o: [10.33, 8] }],
    ["path", { d: "M13.67 8h.01" }, { r: "press", d: 0.13, a: 0.5, o: [13.67, 8] }],
    ["path", { d: "M17 8h.01" }, { r: "press", d: 0.17, a: 0.5, o: [17, 8] }],
    ["path", { d: "M8.5 12h.01" }, { r: "press", d: 0.21, a: 0.5, o: [8.5, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "press", d: 0.25, a: 0.5, o: [12, 12] }],
    ["path", { d: "M15.5 12h.01" }, { r: "press", d: 0.29, a: 0.5, o: [15.5, 12] }],
    ["path", { d: "M8 16h8" }, { r: "growX", d: 0.33, o: [12, 16] }],
  ],
});
