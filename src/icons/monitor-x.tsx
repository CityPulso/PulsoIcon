import { createIcon } from "../runtime/createIcon.js";

export const MonitorX = createIcon("MonitorX", "monitor-x", {
  nodes: [
    ["path", { d: "m14.5 12.5-5-5" }, { r: "draw", d: 0.1, o: [12, 10] }],
    ["path", { d: "m9.5 12.5 5-5" }, { r: "draw", d: 0.2, o: [12, 10] }],
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }, { r: "shake", a: 1, o: [12, 10] }],
    ["path", { d: "M12 17v4" }, { r: "fade", o: [12, 19] }],
    ["path", { d: "M8 21h8" }, { r: "fade", o: [12, 19] }],
  ],
});
