import { icon } from "../icon.js";

export const GalleryHorizontal = icon("GalleryHorizontal", "gallery-horizontal", {
  nodes: [
    ["path", { d: "M2 3v18" }, { r: "fade", d: 0.05, o: [2, 12] }],
    ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2" }, { r: "slide", x: -1, a: 2, o: [12, 12] }],
    ["path", { d: "M22 3v18" }, { r: "fade", d: 0.15, o: [22, 12] }],
  ],
});
