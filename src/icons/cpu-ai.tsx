import { createIcon } from "../runtime/createIcon.js";

export const CpuAi = createIcon("CpuAi", "cpu-ai", {
  text: true,
  nodes: [
    ["path", { d: "M12 20v2" }, { r: "grow", d: 0.14, o: [12, 21] }],
    ["path", { d: "M12 2v2" }, { r: "grow", d: 0.05, o: [12, 3] }],
    ["path", { d: "M16 9v6" }],
    ["path", { d: "M17 20v2" }, { r: "grow", d: 0.17, o: [17, 21] }],
    ["path", { d: "M17 2v2" }, { r: "grow", d: 0.08, o: [17, 3] }],
    ["path", { d: "M2 12h2" }, { r: "growX", d: 0.1, o: [3, 12] }],
    ["path", { d: "M2 17h2" }, { r: "growX", d: 0.13, o: [3, 17] }],
    ["path", { d: "M2 7h2" }, { r: "growX", d: 0.16, o: [3, 7] }],
    ["path", { d: "M20 12h2" }, { r: "growX", d: 0.19, o: [21, 12] }],
    ["path", { d: "M20 17h2" }, { r: "growX", d: 0.22, o: [21, 17] }],
    ["path", { d: "M20 7h2" }, { r: "growX", d: 0.25, o: [21, 7] }],
    ["path", { d: "M7 20v2" }, { r: "grow", d: 0.2, o: [7, 21] }],
    ["path", { d: "M7 2v2" }, { r: "grow", d: 0.11, o: [7, 3] }],
    ["path", { d: "M8 13h4" }, { r: "stamp", d: 0.3, a: 0.3, o: [10, 12] }],
    ["path", { d: "M8 15v-4a2 2 0 014 0v4" }, { r: "stamp", d: 0.3, a: 0.3, o: [10, 12] }],
    ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
