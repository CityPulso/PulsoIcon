import { createIcon } from "../runtime/createIcon.js";

export const CarBattery = createIcon("CarBattery", "car-battery", {
  nodes: [
    ["path", { d: "M14 13h4" }, { r: "spin", d: 0.1, a: 90, o: [16, 13] }],
    ["path", { d: "M16 15v-4" }, { r: "spin", d: 0.1, a: 90, o: [16, 13] }],
    ["path", { d: "M18 5v2" }, { r: "pop", d: 0.25, o: [18, 6] }],
    ["path", { d: "M6 13h4" }, { r: "growX", d: 0.15, o: [8, 13] }],
    ["path", { d: "M6 5v2" }, { r: "pop", d: 0.3, o: [6, 6] }],
    ["rect", { x: "2", y: "7", width: "20", height: "12", rx: "2" }, { r: "press", a: 0.05, o: [12, 13] }],
  ],
});
