import { icon } from "../icon.js";

export const BatteryCharging = icon("BatteryCharging", "battery-charging", {
  nodes: [
    ["path", { d: "m11 7-3 5h4l-3 5" }, { r: "flicker", o: [10, 12] }],
    ["path", { d: "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" }, { r: "pulse", a: 0.04, o: [10, 12] }],
    ["path", { d: "M22 14v-4" }, { r: "fade", d: 0.1, o: [22, 12] }],
    ["path", { d: "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" }, { r: "pulse", a: 0.04, o: [10, 12] }],
  ],
});
