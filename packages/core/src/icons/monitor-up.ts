import { icon } from "../icon.js";

export const MonitorUp = icon("MonitorUp", "monitor-up", {
  nodes: [
    ["path", { d: "m9 10 3-3 3 3" }, { r: "bounce", d: 0.05, y: -1, a: 2, o: [12, 10] }],
    ["path", { d: "M12 13V7" }, { r: "bounce", d: 0.05, y: -1, a: 2, o: [12, 10] }],
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["path", { d: "M12 17v4" }, { r: "fade", o: [12, 19] }],
    ["path", { d: "M8 21h8" }, { r: "fade", o: [12, 19] }],
  ],
});
