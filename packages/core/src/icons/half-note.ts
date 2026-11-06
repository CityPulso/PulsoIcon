import { icon } from "../icon.js";

export const HalfNote = icon("HalfNote", "half-note", {
  nodes: [
    ["circle", { cx: "12", cy: "18", r: "4" }, { r: "jelly", a: 0.15, o: [12, 18] }],
    ["path", { d: "M16 18V2" }, { r: "grow", d: 0.1, o: [16, 18] }],
  ],
});
