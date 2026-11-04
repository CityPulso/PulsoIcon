import { createIcon } from "../runtime/createIcon.js";

export const ImagesHeart = createIcon("ImagesHeart", "images-heart", {
  nodes: [
    ["path", { d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" }, { r: "slide", x: -1, y: 1, a: 1, o: [9, 15] }],
    ["rect", { x: "8", y: "2", width: "14", height: "14", rx: "2" }, { r: "press", a: 0.04, o: [15, 9] }],
    ["path", { d: "M15 12.5 12.3 9.8a1.6 1.6 0 0 1 2.7-2.3 1.6 1.6 0 0 1 2.7 2.3z" }, { r: "beat", d: 0.15, a: 0.2, o: [15, 10] }],
  ],
});
