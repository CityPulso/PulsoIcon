import { createIcon } from "../runtime/createIcon.js";

export const ServerOff = createIcon("ServerOff", "server-off", {
  nodes: [
    ["path", { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M6 18h.01" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
  solid: [
    ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2" }, { r: "fade", o: [12, 12] }],
    ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2" }, { r: "fade", o: [12, 12] }],
    ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6" }, { r: "fade", o: [12, 12] }, "line"],
    ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18" }, { r: "fade", o: [12, 12] }, "line"],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
