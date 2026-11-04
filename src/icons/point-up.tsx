import { createIcon } from "../runtime/createIcon.js";

export const PointUp = createIcon("PointUp", "point-up", {
  nodes: [
    ["path", { d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }, { r: "bounce", x: 0, y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" }, { r: "bounce", x: 0, y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" }, { r: "bounce", x: 0, y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" }, { r: "bounce", x: 0, y: -1, a: 1.5, o: [12, 12] }],
  ],
});
