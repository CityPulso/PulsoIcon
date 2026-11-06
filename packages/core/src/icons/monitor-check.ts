import { icon } from "../icon.js";

export const MonitorCheck = icon("MonitorCheck", "monitor-check", {
  nodes: [
    ["path", { d: "m9 10 2 2 4-4" }, { r: "draw", d: 0.05, o: [12, 10] }],
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["path", { d: "M12 17v4" }, { r: "fade", d: 0.1, o: [12, 19] }],
    ["path", { d: "M8 21h8" }, { r: "fade", d: 0.1, o: [12, 19] }],
  ],
});
