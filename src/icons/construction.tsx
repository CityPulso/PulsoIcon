import { createIcon } from "../runtime/createIcon.js";

export const Construction = createIcon("Construction", "construction", {
  nodes: [
    ["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1" }, { r: "shake", a: 1, o: [12, 10] }],
    ["path", { d: "M17 14v7" }, { r: "press", d: 0.1, a: 0.05, o: [12, 21] }],
    ["path", { d: "M7 14v7" }, { r: "press", d: 0.1, a: 0.05, o: [12, 21] }],
    ["path", { d: "M17 3v3" }, { r: "press", d: 0.1, a: 0.05, o: [12, 21] }],
    ["path", { d: "M7 3v3" }, { r: "press", d: 0.1, a: 0.05, o: [12, 21] }],
    ["path", { d: "M10 14 2.3 6.3" }, { r: "fade", d: 0.05, o: [12, 10] }],
    ["path", { d: "m14 6 7.7 7.7" }, { r: "fade", d: 0.1, o: [12, 10] }],
    ["path", { d: "m8 6 8 8" }, { r: "fade", d: 0.15, o: [12, 10] }],
  ],
});
