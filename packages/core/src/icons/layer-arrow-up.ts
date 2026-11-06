import { icon } from "../icon.js";

export const LayerArrowUp = icon("LayerArrowUp", "layer-arrow-up", {
  nodes: [
    ["path", { d: "M12 14V4" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [12, 9] }],
    [
      "path",
      { d: "M7.674 10.774 2.58 13.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308" },
      { r: "press", a: 0.05, o: [12, 15] },
    ],
    ["path", { d: "m9 7 3-3 3 3" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [12, 9] }],
  ],
});
