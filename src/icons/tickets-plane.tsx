import { createIcon } from "../runtime/createIcon.js";

export const TicketsPlane = createIcon("TicketsPlane", "tickets-plane", {
  nodes: [
    ["path", { d: "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" }, { r: "shoot", d: 0.1, x: 1, y: -1, a: 3, o: [14.25, 14.5] }],
    ["path", { d: "m12 13.5 3.794.506" }, { r: "shoot", d: 0.1, x: 1, y: -1, a: 3, o: [14.25, 14.5] }],
    ["path", { d: "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" }, { r: "float", d: 0.05, a: 1, o: [10.866, 5.59] }],
    ["path", { d: "M6 10V8" }, { r: "press", a: 0.04, o: [12, 14.5] }],
    ["path", { d: "M6 14v1" }, { r: "press", a: 0.04, o: [12, 14.5] }],
    ["path", { d: "M6 19v2" }, { r: "press", a: 0.04, o: [12, 14.5] }],
    ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2" }, { r: "press", a: 0.04, o: [12, 14.5] }],
  ],
});
