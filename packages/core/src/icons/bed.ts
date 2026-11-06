import { icon } from "../icon.js";

export const Bed = icon("Bed", "bed", {
  nodes: [
    ["path", { d: "M2 4v16" }, { r: "fade", d: 0.2, o: [12, 12] }],
    ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10" }, { r: "press", d: 0.1, a: 0.05, o: [12, 20] }],
    ["path", { d: "M2 17h20" }, { r: "fade", d: 0.2, o: [12, 12] }],
    ["path", { d: "M6 8v9" }, { r: "float", a: 1, o: [6, 12.5] }],
  ],
});
