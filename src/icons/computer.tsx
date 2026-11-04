import { createIcon } from "../runtime/createIcon.js";

export const Computer = createIcon("Computer", "computer", {
  nodes: [
    ["path", { d: "M12 18h6" }, { r: "growX", d: 0.2, o: [15, 18] }],
    ["path", { d: "M6 18h.01" }, { r: "flicker", d: 0.25, o: [6.005, 18] }],
    ["path", { d: "M8 6h1" }, { r: "pop", d: 0.15, o: [8.5, 6] }],
    ["rect", { x: "2", y: "14", width: "20", height: "8", rx: "2" }, { r: "press", d: 0.1, a: 0.04, o: [12, 18] }],
    ["rect", { x: "4", y: "2", width: "16", height: "12", rx: "2" }, { r: "press", a: 0.04, o: [12, 8] }],
  ],
});
