import { createIcon } from "../runtime/createIcon.js";

export const Display4k = createIcon("Display4k", "display-4k", {
  text: true,
  nodes: [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["path", { d: "M12 17v4" }, { r: "grow", d: 0.05, o: [12, 17] }],
    ["path", { d: "M8 21h8" }, { r: "growX", d: 0.1, o: [12, 21] }],
    ["path", { d: "M10 13V7L6.5 11h4.5" }, { r: "draw", d: 0.15, o: [8.75, 10] }],
    ["path", { d: "M14 7v6" }, { r: "draw", d: 0.23, o: [15.75, 10] }],
    ["path", { d: "M17.5 7L14 10l3.5 3" }, { r: "draw", d: 0.23, o: [15.75, 10] }],
  ],
});
