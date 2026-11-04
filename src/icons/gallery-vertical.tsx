import { createIcon } from "../runtime/createIcon.js";

export const GalleryVertical = createIcon("GalleryVertical", "gallery-vertical", {
  nodes: [
    ["path", { d: "M3 2h18" }, { r: "fade", d: 0.05, o: [12, 2] }],
    ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2" }, { r: "slide", y: -1, a: 2, o: [12, 12] }],
    ["path", { d: "M3 22h18" }, { r: "fade", d: 0.15, o: [12, 22] }],
  ],
});
