import { createIcon } from "../runtime/createIcon.js";

export const MonitorDown = createIcon("MonitorDown", "monitor-down", {
  nodes: [
    ["path", { d: "M12 13V7" }, { r: "bounce", d: 0.05, y: 1, a: 2, o: [12, 10] }],
    ["path", { d: "m15 10-3 3-3-3" }, { r: "bounce", d: 0.05, y: 1, a: 2, o: [12, 10] }],
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["path", { d: "M12 17v4" }, { r: "fade", d: 0.1, o: [12, 19] }],
    ["path", { d: "M8 21h8" }, { r: "fade", d: 0.1, o: [12, 19] }],
  ],
});
