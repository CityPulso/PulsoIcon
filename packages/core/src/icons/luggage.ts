import { icon } from "../icon.js";

export const Luggage = icon("Luggage", "luggage", {
  nodes: [
    ["path", { d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" }, { r: "slide", x: 1, a: 1.5, o: [12, 11] }],
    ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" }, { r: "slide", x: 1, a: 1.5, o: [12, 11] }],
    ["path", { d: "M10 20h4" }, { r: "slide", x: 1, a: 1.5, o: [12, 11] }],
    ["circle", { cx: "16", cy: "20", r: "2" }, { r: "roll", x: 1, a: 1.5, o: [16, 20] }],
    ["circle", { cx: "8", cy: "20", r: "2" }, { r: "roll", x: 1, a: 1.5, o: [8, 20] }],
  ],
});
