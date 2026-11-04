import { createIcon } from "../runtime/createIcon.js";

export const Keyboard = createIcon("Keyboard", "keyboard", {
  nodes: [
    ["path", { d: "M10 8h.01" }, { r: "press", d: 0.09, a: 0.5, o: [10.005, 8] }],
    ["path", { d: "M12 12h.01" }, { r: "press", d: 0.25, a: 0.5, o: [12.005, 12] }],
    ["path", { d: "M14 8h.01" }, { r: "press", d: 0.13, a: 0.5, o: [14.005, 8] }],
    ["path", { d: "M16 12h.01" }, { r: "press", d: 0.29, a: 0.5, o: [16.005, 12] }],
    ["path", { d: "M18 8h.01" }, { r: "press", d: 0.17, a: 0.5, o: [18.005, 8] }],
    ["path", { d: "M6 8h.01" }, { r: "press", d: 0.05, a: 0.5, o: [6.005, 8] }],
    ["path", { d: "M7 16h10" }, { r: "growX", d: 0.3, o: [12, 16] }],
    ["path", { d: "M8 12h.01" }, { r: "press", d: 0.21, a: 0.5, o: [8.005, 12] }],
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }, { r: "press", a: 0.03, o: [12, 12] }],
  ],
});
