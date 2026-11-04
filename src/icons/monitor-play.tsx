import { createIcon } from "../runtime/createIcon.js";

export const MonitorPlay = createIcon("MonitorPlay", "monitor-play", {
  nodes: [
    ["path", { d: "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" }, { r: "pop", d: 0.05, a: 0.3, o: [12.678, 10] }],
    ["path", { d: "M12 17v4" }, { r: "fade", o: [12, 19] }],
    ["path", { d: "M8 21h8" }, { r: "fade", o: [12, 19] }],
    ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.04, o: [12, 10] }],
  ],
});
