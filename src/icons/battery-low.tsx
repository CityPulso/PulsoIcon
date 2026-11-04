import { createIcon } from "../runtime/createIcon.js";

export const BatteryLow = createIcon("BatteryLow", "battery-low", {
  nodes: [
    ["path", { d: "M22 14v-4" }, { r: "pulse", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 14v-4" }, { r: "flicker", d: 0.05, o: [6, 12] }],
    ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2" }, { r: "pulse", a: 0.04, o: [12, 12] }],
  ],
});
