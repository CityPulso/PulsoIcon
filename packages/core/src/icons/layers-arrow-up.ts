import { icon } from "../icon.js";

export const LayersArrowUp = icon("LayersArrowUp", "layers-arrow-up", {
  nodes: [
    ["path", { d: "M12 12V2" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [12, 7] }],
    ["path", { d: "M2 17.002a1 1 0 00.58.91l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92" }, { r: "press", a: 0.05, o: [12, 19.501] }],
    [
      "path",
      { d: "M7.674 8.774 2.58 11.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308" },
      { r: "float", d: 0.05, a: 1, o: [11.996, 12.886] },
    ],
    ["path", { d: "m9 5 3-3 3 3" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [12, 7] }],
  ],
});
