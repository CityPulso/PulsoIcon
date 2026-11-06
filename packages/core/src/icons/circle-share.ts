import { icon } from "../icon.js";

export const CircleShare = icon("CircleShare", "circle-share", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "15", cy: "8", r: "1.5" }, { r: "pop", d: 0.15, o: [15, 8] }],
    ["circle", { cx: "8.5", cy: "12", r: "1.5" }, { r: "pop", o: [8.5, 12] }],
    ["circle", { cx: "15", cy: "16", r: "1.5" }, { r: "pop", d: 0.28, o: [15, 16] }],
    ["path", { d: "m9.8 11.2 3.9-2.4" }, { r: "draw", d: 0.08, o: [11.75, 10] }],
    ["path", { d: "m9.8 12.8 3.9 2.4" }, { r: "draw", d: 0.2, o: [11.75, 14] }],
  ],
});
