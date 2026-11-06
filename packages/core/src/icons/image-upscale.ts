import { icon } from "../icon.js";

export const ImageUpscale = icon("ImageUpscale", "image-upscale", {
  nodes: [
    ["path", { d: "M16 3h5v5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [18.5, 5.5] }],
    ["path", { d: "M17 21h2a2 2 0 0 0 2-2" }, { r: "fade", d: 0.05, o: [12, 12] }],
    ["path", { d: "M21 12v3" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "m21 3-5 5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [18.5, 5.5] }],
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2" }, { r: "fade", d: 0.11, o: [12, 12] }],
    ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" }, { r: "fade", d: 0.14, o: [12, 12] }],
    ["path", { d: "M9 3h3" }, { r: "fade", d: 0.17, o: [12, 12] }],
    ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1" }, { r: "press", a: 0.05, o: [8, 16] }],
  ],
});
