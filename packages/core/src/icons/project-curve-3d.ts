import { icon } from "../icon.js";

export const ProjectCurve3d = icon("ProjectCurve3d", "project-curve-3d", {
  nodes: [
    ["path", { d: "M12 14 3 18l9 4 9-4Z" }, { r: "press", a: 0.06, o: [12, 18] }],
    ["path", { d: "M4 5.5c2.5-3 5.5-3 8 0s5.5 3 8 0" }, { r: "redraw", o: [12, 5.5] }],
    ["path", { d: "M12 9.5v3" }, { r: "slide", d: 0.1, y: 1, a: 1, o: [12, 11] }],
    ["path", { d: "m10 10.5 2 2 2-2" }, { r: "slide", d: 0.1, y: 1, a: 1, o: [12, 11.5] }],
  ],
});
