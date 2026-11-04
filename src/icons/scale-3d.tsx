import { createIcon } from "../runtime/createIcon.js";

export const Scale3D = createIcon("Scale3D", "scale-3d", {
  nodes: [
    ["path", { d: "M5 7v11a1 1 0 0 0 1 1h11" }, { r: "draw", d: 0.1, o: [11, 13] }],
    ["path", { d: "M5.293 18.707 11 13" }, { r: "draw", d: 0.1, o: [11, 13] }],
    ["circle", { cx: "19", cy: "19", r: "2" }, { r: "pop", d: 0.25, o: [19, 19] }],
    ["circle", { cx: "5", cy: "5", r: "2" }, { r: "pop", o: [5, 5] }],
  ],
});
