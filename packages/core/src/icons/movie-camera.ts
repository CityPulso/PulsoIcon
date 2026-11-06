import { icon } from "../icon.js";

export const MovieCamera = icon("MovieCamera", "movie-camera", {
  nodes: [
    ["rect", { x: "2", y: "11", width: "13", height: "9", rx: "2" }, { r: "press", a: 0.04, o: [8.5, 15.5] }],
    ["path", { d: "m15 14 5.2-2.6a.5.5 0 0 1 .8.4v6.4a.5.5 0 0 1-.8.4L15 16" }, { r: "slide", d: 0.05, x: 1, a: 1, o: [18, 15] }],
    ["circle", { cx: "5", cy: "6", r: "2.5" }, { r: "pulse", a: 0.15, o: [5, 6] }],
    ["circle", { cx: "12", cy: "6", r: "2.5" }, { r: "pulse", d: 0.15, a: 0.15, o: [12, 6] }],
  ],
});
