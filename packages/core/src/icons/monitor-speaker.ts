import { icon } from "../icon.js";

export const MonitorSpeaker = icon("MonitorSpeaker", "monitor-speaker", {
  nodes: [
    ["path", { d: "M5.5 20H8" }, { r: "fade", o: [6.75, 20] }],
    ["path", { d: "M17 9h.01" }, { r: "pop", d: 0.1, o: [17.005, 9] }],
    ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2" }, { r: "press", a: 0.04, o: [17, 12] }],
    ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" }, { r: "float", d: 0.05, a: 1, o: [5, 11] }],
    ["circle", { cx: "17", cy: "15", r: "1" }, { r: "beat", d: 0.05, o: [17, 15] }],
  ],
});
