import { createIcon } from "../runtime/createIcon.js";

export const BatteryFull = createIcon("BatteryFull", "battery-full", {
  nodes: [
    ["path", { d: "M10 10v4" }, { r: "grow", d: 0.1, o: [10, 12] }],
    ["path", { d: "M14 10v4" }, { r: "grow", d: 0.2, o: [14, 12] }],
    ["path", { d: "M22 14v-4" }, { r: "pulse", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 10v4" }, { r: "grow", o: [6, 12] }],
    ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2" }, { r: "pulse", a: 0.04, o: [12, 12] }],
  ],
});
