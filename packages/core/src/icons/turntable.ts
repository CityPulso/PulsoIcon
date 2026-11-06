import { icon } from "../icon.js";

export const Turntable = icon("Turntable", "turntable", {
  nodes: [
    ["path", { d: "M10 12.01h.01" }, { r: "spin", a: 360, o: [10, 12] }],
    ["path", { d: "M18 8v4a8 8 0 0 1-1.07 4" }, { r: "turn", d: 0.05, a: 12, o: [17, 8] }],
    ["circle", { cx: "10", cy: "12", r: "4" }, { r: "spin", a: 360, o: [10, 12] }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }, { r: "press", a: 0.03, o: [12, 12] }],
  ],
});
