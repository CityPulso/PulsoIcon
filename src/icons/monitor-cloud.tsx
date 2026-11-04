import { createIcon } from "../runtime/createIcon.js";

export const MonitorCloud = createIcon("MonitorCloud", "monitor-cloud", {
  nodes: [
    ["path", { d: "M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" }, { r: "float", d: 0.05, a: 1.5, o: [12.001, 10] }],
    ["path", { d: "M12 17v4" }, { r: "fade", d: 0.1, o: [12, 19] }],
    ["path", { d: "M8 21h8" }, { r: "fade", d: 0.1, o: [12, 19] }],
    ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.04, o: [12, 10] }],
  ],
});
