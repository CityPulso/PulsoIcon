import { createIcon } from "../runtime/createIcon.js";

export const ImageMinus = createIcon("ImageMinus", "image-minus", {
  nodes: [
    ["path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["line", { x1: "16", x2: "22", y1: "5", y2: "5" }, { r: "growX", d: 0.15, o: [19, 5] }],
    ["circle", { cx: "9", cy: "9", r: "2" }, { r: "rise", d: 0.1, o: [9, 9] }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
