import { createIcon } from "../runtime/createIcon.js";

export const ImageCircleAi = createIcon("ImageCircleAi", "image-circle-ai", {
  text: true,
  nodes: [
    ["path", { d: "M10.5 20.9A9 9 0 1 1 20.9 10.5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14.5 8h.01" }, { r: "rise", d: 0.05, a: 2, o: [14.5, 8] }],
    ["path", { d: "m4 15 4.3-4.3a1 1 0 0 1 1.4 0L12 13" }, { r: "draw", d: 0.1, o: [8, 12] }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.2, o: [16, 19] }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.35, o: [16, 19] }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.45, o: [21, 18] }],
  ],
});
