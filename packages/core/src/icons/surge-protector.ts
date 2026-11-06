import { icon } from "../icon.js";

export const SurgeProtector = icon("SurgeProtector", "surge-protector", {
  nodes: [
    ["rect", { x: "2", y: "13", width: "20", height: "8", rx: "2" }, { r: "press", a: 0.05, o: [12, 17] }],
    ["path", { d: "M7 16v2M10 16v2" }, { r: "pop", d: 0.05, o: [8.5, 17] }],
    ["path", { d: "M14 16v2M17 16v2" }, { r: "pop", d: 0.12, o: [15.5, 17] }],
    ["path", { d: "m13 2-3 5h4l-3 5" }, { r: "flicker", d: 0.2, o: [12, 7] }],
  ],
});
