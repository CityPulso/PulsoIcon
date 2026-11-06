import { icon } from "../icon.js";

export const Cpu = icon("Cpu", "cpu", {
  nodes: [
    ["path", { d: "M12 20v2" }, { r: "grow", d: 0.19, o: [12, 21] }],
    ["path", { d: "M12 2v2" }, { r: "grow", d: 0.1, o: [12, 3] }],
    ["path", { d: "M17 20v2" }, { r: "grow", d: 0.22, o: [17, 21] }],
    ["path", { d: "M17 2v2" }, { r: "grow", d: 0.13, o: [17, 3] }],
    ["path", { d: "M2 12h2" }, { r: "growX", d: 0.15, o: [3, 12] }],
    ["path", { d: "M2 17h2" }, { r: "growX", d: 0.18, o: [3, 17] }],
    ["path", { d: "M2 7h2" }, { r: "growX", d: 0.12, o: [3, 7] }],
    ["path", { d: "M20 12h2" }, { r: "growX", d: 0.24, o: [21, 12] }],
    ["path", { d: "M20 17h2" }, { r: "growX", d: 0.27, o: [21, 17] }],
    ["path", { d: "M20 7h2" }, { r: "growX", d: 0.21, o: [21, 7] }],
    ["path", { d: "M7 20v2" }, { r: "grow", d: 0.25, o: [7, 21] }],
    ["path", { d: "M7 2v2" }, { r: "grow", d: 0.16, o: [7, 3] }],
    ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1" }, { r: "pulse", d: 0.05, a: 0.1, o: [12, 12] }],
  ],
});
