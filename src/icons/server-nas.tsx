import { createIcon } from "../runtime/createIcon.js";

export const ServerNas = createIcon("ServerNas", "server-nas", {
  nodes: [
    ["path", { d: "M10 16V8" }, { r: "grow", d: 0.05, o: [10, 12] }],
    ["path", { d: "M14 16V8" }, { r: "grow", d: 0.1, o: [14, 12] }],
    ["path", { d: "M18 16V8" }, { r: "grow", d: 0.15, o: [18, 12] }],
    ["path", { d: "M6 12h.01" }, { r: "flicker", d: 0.15, o: [6.005, 14] }],
    ["path", { d: "M6 16h.01" }, { r: "flicker", d: 0.23, o: [6.005, 14] }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
