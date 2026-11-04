import { createIcon } from "../runtime/createIcon.js";

export const MonitorPc = createIcon("MonitorPc", "monitor-pc", {
  nodes: [
    ["path", { d: "M10 15H4a2 2 0 01-2-2V7a2 2 0 012-2h6" }, { r: "press", a: 0.04, o: [6, 10] }],
    ["path", { d: "M10 19H5" }, { r: "fade", o: [7.5, 17] }],
    ["path", { d: "M14 11h8" }, { r: "growX", d: 0.11, o: [18, 11] }],
    ["path", { d: "M14 7h8" }, { r: "growX", d: 0.05, o: [18, 7] }],
    ["path", { d: "M18 17h.01" }, { r: "flicker", d: 0.15, o: [18.005, 17] }],
    ["path", { d: "M9 19v-4" }, { r: "fade", o: [7.5, 17] }],
    ["rect", { x: "14", y: "3", width: "8", height: "18", rx: "1" }, { r: "float", a: 1, o: [18, 12] }],
  ],
});
