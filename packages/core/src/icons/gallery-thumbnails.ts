import { icon } from "../icon.js";

export const GalleryThumbnails = icon("GalleryThumbnails", "gallery-thumbnails", {
  nodes: [
    ["rect", { width: "18", height: "14", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["path", { d: "M4 21h1" }, { r: "pop", d: 0.05, o: [4.5, 21] }],
    ["path", { d: "M9 21h1" }, { r: "pop", d: 0.1, o: [9.5, 21] }],
    ["path", { d: "M14 21h1" }, { r: "pop", d: 0.15, o: [14.5, 21] }],
    ["path", { d: "M19 21h1" }, { r: "pop", d: 0.2, o: [19.5, 21] }],
  ],
});
