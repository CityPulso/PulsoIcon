import { createIcon } from "../runtime/createIcon.js";

export const Box3dPoint = createIcon("Box3dPoint", "box-3d-point", {
  nodes: [
    ["path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }, { r: "jelly", a: 0.06, o: [12, 22] }],
    ["path", { d: "M3.3 7 9.832 10.754" }, { r: "jelly", a: 0.06, o: [12, 22] }],
    ["path", { d: "M20.7 7 14.168 10.754" }, { r: "jelly", a: 0.06, o: [12, 22] }],
    ["path", { d: "M12 22 12 14.5" }, { r: "jelly", a: 0.06, o: [12, 22] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "pop", d: 0.15, o: [12, 12] }],
  ],
});
