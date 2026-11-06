import { icon } from "../icon.js";

export const Sink = icon("Sink", "sink", {
  nodes: [
    ["path", { d: "M2 12h20" }],
    ["path", { d: "M4 12v2a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6v-2" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M8 12V6a3 3 0 0 1 6 0v.5" }, { r: "turn", a: -6, o: [8, 12] }],
    ["path", { d: "M14 10v.01" }, { r: "drop", d: 0.1, a: 2, o: [14, 10] }],
    ["path", { d: "M5 9h3" }, { r: "turn", a: -6, o: [8, 12] }],
  ],
});
