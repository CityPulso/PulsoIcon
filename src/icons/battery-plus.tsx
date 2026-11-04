import { createIcon } from "../runtime/createIcon.js";

export const BatteryPlus = createIcon("BatteryPlus", "battery-plus", {
  nodes: [
    ["path", { d: "M10 9v6" }, { r: "spin", d: 0.05, a: 90, o: [10, 12] }],
    ["path", { d: "M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605" }, { r: "pulse", a: 0.04, o: [12, 12] }],
    ["path", { d: "M22 14v-4" }, { r: "pulse", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 12h6" }, { r: "spin", d: 0.05, a: 90, o: [10, 12] }],
    ["path", { d: "M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606" }, { r: "pulse", a: 0.04, o: [12, 12] }],
  ],
});
