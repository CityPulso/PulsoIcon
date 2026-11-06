import { icon } from "../icon.js";

export const Crop = icon("Crop", "crop", {
  nodes: [
    ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [14, 10] }],
    ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [10, 14] }],
  ],
});
