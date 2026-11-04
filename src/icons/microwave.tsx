import { createIcon } from "../runtime/createIcon.js";

export const Microwave = createIcon("Microwave", "microwave", {
  nodes: [
    ["rect", { width: "20", height: "15", x: "2", y: "4", rx: "2" }, { r: "press", a: 0.04, o: [12, 11.5] }],
    ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1" }, { r: "flicker", d: 0.05, o: [10, 11.5] }],
    ["path", { d: "M18 8v7" }, { r: "grow", d: 0.1, o: [18, 11.5] }],
    ["path", { d: "M6 19v2" }, { r: "fade", o: [12, 20] }],
    ["path", { d: "M18 19v2" }, { r: "fade", o: [12, 20] }],
  ],
});
