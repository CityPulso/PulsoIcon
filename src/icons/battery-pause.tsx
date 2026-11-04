import { createIcon } from "../runtime/createIcon.js";

export const BatteryPause = createIcon("BatteryPause", "battery-pause", {
  nodes: [
    ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2" }, { r: "pulse", a: 0.04, o: [10, 12] }],
    ["path", { d: "M22 11v2" }, { r: "fade", d: 0.1, o: [22, 12] }],
    ["path", { d: "M8 10v4" }, { r: "grow", d: 0.05, o: [8, 12] }],
    ["path", { d: "M12 10v4" }, { r: "grow", d: 0.13, o: [12, 12] }],
  ],
});
