import { icon } from "../icon.js";

export const PcCase = icon("PcCase", "pc-case", {
  text: true,
  nodes: [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M15 14h.01" }, { r: "flicker", d: 0.2, o: [15.005, 14] }],
    ["path", { d: "M9 6h6" }, { r: "growX", d: 0.05, o: [12, 6] }],
    ["path", { d: "M9 10h6" }, { r: "growX", d: 0.11, o: [12, 10] }],
  ],
});
