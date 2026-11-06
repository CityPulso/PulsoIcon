import { icon } from "../icon.js";

export const EaseInControlPoint = icon("EaseInControlPoint", "ease-in-control-point", {
  nodes: [
    ["path", { d: "M4 20C18 20 20 8 20 4" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M4 20h12" }, { r: "growX", d: 0.3, o: [4, 20] }],
    ["circle", { cx: "18", cy: "20", r: "2" }, { r: "pop", d: 0.4, o: [18, 20] }],
  ],
});
