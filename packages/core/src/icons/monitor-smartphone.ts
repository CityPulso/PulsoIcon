import { icon } from "../icon.js";

export const MonitorSmartphone = icon("MonitorSmartphone", "monitor-smartphone", {
  nodes: [
    ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" }, { r: "press", a: 0.04, o: [10, 9.5] }],
    ["path", { d: "M10 19v-3.96 3.15" }, { r: "fade", o: [9.5, 17.02] }],
    ["path", { d: "M7 19h5" }, { r: "fade", o: [9.5, 17.02] }],
    ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2" }, { r: "float", d: 0.05, a: 1.5, o: [19, 17] }],
  ],
});
