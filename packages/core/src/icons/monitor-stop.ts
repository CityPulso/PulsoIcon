import { icon } from "../icon.js";

export const MonitorStop = icon("MonitorStop", "monitor-stop", {
  nodes: [
    ["path", { d: "M12 17v4" }, { r: "fade", o: [12, 19] }],
    ["path", { d: "M8 21h8" }, { r: "fade", o: [12, 19] }],
    ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["rect", { x: "9", y: "7", width: "6", height: "6", rx: "1" }, { r: "stamp", d: 0.05, a: 0.4, o: [12, 10] }],
  ],
});
