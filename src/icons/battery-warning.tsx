import { createIcon } from "../runtime/createIcon.js";

export const BatteryWarning = createIcon("BatteryWarning", "battery-warning", {
  nodes: [
    ["path", { d: "M10 17h.01" }, { r: "pop", d: 0.25, o: [10.005, 17] }],
    ["path", { d: "M10 7v6" }, { r: "grow", d: 0.1, o: [10, 7] }],
    ["path", { d: "M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" }, { r: "shake", a: 0.8, o: [12, 12] }],
    ["path", { d: "M22 14v-4" }, { r: "shake", a: 0.8, o: [12, 12] }],
    ["path", { d: "M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" }, { r: "shake", a: 0.8, o: [12, 12] }],
  ],
});
