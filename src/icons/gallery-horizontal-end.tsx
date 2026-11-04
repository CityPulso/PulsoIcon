import { createIcon } from "../runtime/createIcon.js";

export const GalleryHorizontalEnd = createIcon("GalleryHorizontalEnd", "gallery-horizontal-end", {
  nodes: [
    ["path", { d: "M2 7v10" }, { r: "fade", d: 0.12, o: [2, 12] }],
    ["path", { d: "M6 5v14" }, { r: "fade", d: 0.05, o: [6, 12] }],
    ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2" }, { r: "slide", x: -1, a: 2, o: [16, 12] }],
  ],
});
