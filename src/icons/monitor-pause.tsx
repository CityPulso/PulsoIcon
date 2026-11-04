import { createIcon } from "../runtime/createIcon.js";

export const MonitorPause = createIcon("MonitorPause", "monitor-pause", {
  nodes: [
    ["path", { d: "M10 13V7" }, { r: "grow", d: 0.05, o: [10, 10] }],
    ["path", { d: "M14 13V7" }, { r: "grow", d: 0.15, o: [14, 10] }],
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["path", { d: "M12 17v4" }, { r: "fade", o: [12, 19] }],
    ["path", { d: "M8 21h8" }, { r: "fade", o: [12, 19] }],
  ],
});
