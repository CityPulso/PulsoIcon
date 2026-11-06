import { icon } from "../icon.js";

export const PetriDish = icon("PetriDish", "petri-dish", {
  nodes: [
    ["ellipse", { cx: "12", cy: "10", rx: "9", ry: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 10v4c0 2.2 4 4 9 4s9-1.8 9-4v-4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 10h.01" }, { r: "pop", d: 0.1, o: [9, 10] }],
    ["path", { d: "M14 9h.01" }, { r: "pop", d: 0.2, o: [14, 9] }],
    ["path", { d: "M13 11.5h.01" }, { r: "pop", d: 0.3, o: [13, 11.5] }],
  ],
});
