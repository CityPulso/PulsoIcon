import { icon } from "../icon.js";

export const Vinyl = icon("Vinyl", "vinyl", {
  nodes: [
    ["path", { d: "M14 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }, { r: "fade", o: [18, 12] }],
    ["circle", { cx: "10", cy: "12", r: "8" }, { r: "roll", x: -1, a: 1.5, o: [10, 12] }],
    ["path", { d: "M10 6.5a5.5 5.5 0 0 0-5.5 5.5" }, { r: "roll", x: -1, a: 1.5, o: [10, 12] }],
    ["circle", { cx: "10", cy: "12", r: "2" }, { r: "roll", x: -1, a: 1.5, o: [10, 12] }],
  ],
});
