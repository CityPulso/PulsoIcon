import { icon } from "../icon.js";

export const VectorSquare = icon("VectorSquare", "vector-square", {
  nodes: [
    ["path", { d: "M17.055 4.533a24 24 0 00-10.11 0" }, { r: "draw", d: 0.2, o: [12, 12] }],
    ["path", { d: "M19.467 17.055a24 24 0 000-10.11" }, { r: "draw", d: 0.24, o: [12, 12] }],
    ["path", { d: "M4.533 6.945a24 24 0 000 10.11" }, { r: "draw", d: 0.28, o: [12, 12] }],
    ["path", { d: "M6.945 19.467a24 24 0 0010.11 0" }, { r: "draw", d: 0.32, o: [12, 12] }],
    ["circle", { cx: "19", cy: "19", r: "2" }, { r: "pop", d: 0.12, o: [19, 19] }],
    ["circle", { cx: "19", cy: "5", r: "2" }, { r: "pop", d: 0.06, o: [19, 5] }],
    ["circle", { cx: "5", cy: "19", r: "2" }, { r: "pop", d: 0.18, o: [5, 19] }],
    ["circle", { cx: "5", cy: "5", r: "2" }, { r: "pop", o: [5, 5] }],
  ],
});
