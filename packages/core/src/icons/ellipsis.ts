import { icon } from "../icon.js";

export const Ellipsis = icon("Ellipsis", "ellipsis", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "1" }, { r: "bounce", d: 0.08, y: -1, a: 1.5, o: [12, 12] }],
    ["circle", { cx: "19", cy: "12", r: "1" }, { r: "bounce", d: 0.16, y: -1, a: 1.5, o: [19, 12] }],
    ["circle", { cx: "5", cy: "12", r: "1" }, { r: "bounce", y: -1, a: 1.5, o: [5, 12] }],
  ],
});
