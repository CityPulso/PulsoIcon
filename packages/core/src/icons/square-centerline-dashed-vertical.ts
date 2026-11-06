import { icon } from "../icon.js";

export const SquareCenterlineDashedVertical = icon("SquareCenterlineDashedVertical", "square-centerline-dashed-vertical", {
  nodes: [
    ["path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" }, { r: "slide", y: -1, a: 1.5, o: [12, 5.5] }],
    ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }, { r: "slide", y: 1, a: 1.5, o: [12, 18.5] }],
    ["path", { d: "M4 12H2" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M10 12H8" }, { r: "fade", d: 0.04, o: [12, 12] }],
    ["path", { d: "M16 12h-2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M22 12h-2" }, { r: "fade", d: 0.12, o: [12, 12] }],
  ],
});
