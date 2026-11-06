import { icon } from "../icon.js";

export const ImagePlay = icon("ImagePlay", "image-play", {
  nodes: [
    ["path", { d: "M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" }, { r: "pop", d: 0.15, a: 0.3, o: [18.501, 18] }],
    ["path", { d: "M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m6 21 5-5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "9", cy: "9", r: "2" }, { r: "rise", d: 0.1, o: [9, 9] }],
  ],
});
