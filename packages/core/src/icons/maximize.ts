import { icon } from "../icon.js";

export const Maximize = icon("Maximize", "maximize", {
  nodes: [
    ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [5.5, 5.5] }],
    ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [18.5, 5.5] }],
    ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [5.5, 18.5] }],
    ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" }, { r: "slide", x: 1, y: 1, a: 1.5, o: [18.5, 18.5] }],
  ],
});
