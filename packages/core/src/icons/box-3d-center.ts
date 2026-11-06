import { icon } from "../icon.js";

export const Box3dCenter = icon("Box3dCenter", "box-3d-center", {
  nodes: [
    ["path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }, { r: "jelly", a: 0.06, o: [12, 22] }],
    ["path", { d: "M7.215 9.25h.01" }, { r: "fade", d: 0, o: [12, 12] }],
    ["path", { d: "M16.785 9.25h.01" }, { r: "fade", d: 0.05, o: [12, 12] }],
    ["path", { d: "M12 17.5h.01" }, { r: "fade", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "1.5" }, { r: "pop", d: 0.2, o: [12, 12] }],
  ],
});
