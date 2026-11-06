import { icon } from "../icon.js";

export const MonitorDot = icon("MonitorDot", "monitor-dot", {
  nodes: [
    ["path", { d: "M12 17v4" }, { r: "fade", d: 0.1, o: [12, 19] }],
    ["path", { d: "M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["path", { d: "M8 21h8" }, { r: "fade", d: 0.1, o: [12, 19] }],
    ["circle", { cx: "19", cy: "6", r: "3" }, { r: "pop", d: 0.05, o: [19, 6] }],
  ],
  solid: [
    ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["path", { d: "M12 17v4" }, { r: "fade", d: 0.1, o: [12, 19] }],
    ["path", { d: "M8 21h8" }, { r: "fade", d: 0.1, o: [12, 19] }],
    ["circle", { cx: "19", cy: "6", r: "5" }, { r: "pop", d: 0.05, o: [19, 6] }, "cut"],
    ["circle", { cx: "19", cy: "6", r: "3" }, { r: "pop", d: 0.05, o: [19, 6] }],
  ],
});
