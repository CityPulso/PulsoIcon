import { createIcon } from "../runtime/createIcon.js";

export const GalleryVerticalEnd = createIcon("GalleryVerticalEnd", "gallery-vertical-end", {
  nodes: [
    ["path", { d: "M7 2h10" }, { r: "fade", d: 0.12, o: [12, 2] }],
    ["path", { d: "M5 6h14" }, { r: "fade", d: 0.05, o: [12, 6] }],
    ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }, { r: "slide", y: -1, a: 2, o: [12, 16] }],
  ],
});
