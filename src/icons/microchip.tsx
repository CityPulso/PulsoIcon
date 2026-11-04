import { createIcon } from "../runtime/createIcon.js";

export const Microchip = createIcon("Microchip", "microchip", {
  nodes: [
    ["path", { d: "M10 12h4" }, { r: "growX", d: 0.11, o: [12, 12] }],
    ["path", { d: "M10 17h4" }, { r: "growX", d: 0.17, o: [12, 17] }],
    ["path", { d: "M10 7h4" }, { r: "growX", d: 0.05, o: [12, 7] }],
    ["path", { d: "M18 12h2" }, { r: "flicker", d: 0.15, o: [12, 12] }],
    ["path", { d: "M18 18h2" }, { r: "flicker", d: 0.18, o: [12, 12] }],
    ["path", { d: "M18 6h2" }, { r: "flicker", d: 0.21, o: [12, 12] }],
    ["path", { d: "M4 12h2" }, { r: "flicker", d: 0.24, o: [12, 12] }],
    ["path", { d: "M4 18h2" }, { r: "flicker", d: 0.27, o: [12, 12] }],
    ["path", { d: "M4 6h2" }, { r: "flicker", d: 0.3, o: [12, 12] }],
    ["rect", { x: "6", y: "2", width: "12", height: "20", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
