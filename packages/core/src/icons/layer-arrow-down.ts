import { icon } from "../icon.js";

export const LayerArrowDown = icon("LayerArrowDown", "layer-arrow-down", {
  nodes: [
    ["path", { d: "M12 10v10" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [12, 15] }],
    ["path", { d: "M22 10a1 1 0 01-.59.92l-5.077 2.308" }, { r: "press", a: 0.05, o: [12, 10] }],
    ["path", { d: "M22.017 10.005a1 1 0 00-.597-.916l-8.59-3.91a2 2 0 00-1.66.001L2.6 9.08a1 1 0 00-.02 1.831l5.093 2.316" }, { r: "press", a: 0.05, o: [12, 10] }],
    ["path", { d: "m9 17 3 3 3-3" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [12, 15] }],
  ],
});
