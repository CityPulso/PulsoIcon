import { createIcon } from "../runtime/createIcon.js";

export const ImageUp = createIcon("ImageUp", "image-up", {
  nodes: [
    ["path", { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m14 19.5 3-3 3 3" }, { r: "bounce", d: 0.15, y: -1, a: 2, o: [17, 19.25] }],
    ["path", { d: "M17 22v-5.5" }, { r: "bounce", d: 0.15, y: -1, a: 2, o: [17, 19.25] }],
    ["circle", { cx: "9", cy: "9", r: "2" }, { r: "rise", d: 0.1, o: [9, 9] }],
  ],
});
