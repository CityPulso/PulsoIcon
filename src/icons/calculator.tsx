import { createIcon } from "../runtime/createIcon.js";

export const Calculator = createIcon("Calculator", "calculator", {
  nodes: [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["line", { x1: "8", x2: "16", y1: "6", y2: "6" }, { r: "growX", d: 0.05, o: [12, 6] }],
    ["line", { x1: "16", x2: "16", y1: "14", y2: "18" }, { r: "grow", d: 0.35, o: [16, 16] }],
    ["path", { d: "M16 10h.01" }, { r: "pop", d: 0.1, o: [16.005, 10] }],
    ["path", { d: "M12 10h.01" }, { r: "pop", d: 0.14, o: [12.005, 10] }],
    ["path", { d: "M8 10h.01" }, { r: "pop", d: 0.18, o: [8.005, 10] }],
    ["path", { d: "M12 14h.01" }, { r: "pop", d: 0.22, o: [12.005, 14] }],
    ["path", { d: "M8 14h.01" }, { r: "pop", d: 0.26, o: [8.005, 14] }],
    ["path", { d: "M12 18h.01" }, { r: "pop", d: 0.3, o: [12.005, 18] }],
    ["path", { d: "M8 18h.01" }, { r: "pop", d: 0.34, o: [8.005, 18] }],
  ],
});
