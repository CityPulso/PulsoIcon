import { icon } from "../icon.js";

export const PictureInPictureExit = icon("PictureInPictureExit", "picture-in-picture-exit", {
  nodes: [
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["rect", { x: "13", y: "13", width: "6", height: "4", rx: "1" }, { r: "pop", d: 0.1, o: [16, 15] }],
    ["path", { d: "M6 11V7h4" }, { r: "slide", d: 0.2, x: -1, y: -1, a: 1, o: [8, 9] }],
    ["path", { d: "m6 7 5 5" }, { r: "drawBack", d: 0.2, o: [8.5, 9.5] }],
  ],
});
