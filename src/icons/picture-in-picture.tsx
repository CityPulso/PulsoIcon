import { createIcon } from "../runtime/createIcon.js";

export const PictureInPicture = createIcon("PictureInPicture", "picture-in-picture", {
  nodes: [
    ["path", { d: "M2 10h6V4" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [5, 7] }],
    ["path", { d: "m2 4 6 6" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [5, 7] }],
    ["path", { d: "M21 10V7a2 2 0 0 0-2-2h-7" }, { r: "fade", o: [12, 11.5] }],
    ["path", { d: "M3 14v2a2 2 0 0 0 2 2h3" }, { r: "fade", o: [12, 11.5] }],
    ["rect", { x: "12", y: "14", width: "10", height: "7", rx: "1" }, { r: "pop", d: 0.1, o: [17, 17.5] }],
  ],
});
