import { createIcon } from "../runtime/createIcon.js";

export const Cellphone = createIcon("Cellphone", "cellphone", {
  nodes: [
    ["rect", { x: "6", y: "6", width: "12", height: "16", rx: "2" }, { r: "ring", a: 6, o: [12, 14] }],
    ["path", { d: "M15 6V2" }, { r: "swing", d: 0.1, a: 12, o: [15, 6] }],
    ["rect", { x: "9", y: "9", width: "6", height: "4", rx: "1" }, { r: "flicker", d: 0.15, o: [12, 11] }],
    ["path", { d: "M9 16h.01M12 16h.01M15 16h.01" }, { r: "press", d: 0.2, a: 0.3, o: [12, 16] }],
    ["path", { d: "M9 19h.01M12 19h.01M15 19h.01" }, { r: "press", d: 0.28, a: 0.3, o: [12, 19] }],
  ],
});
