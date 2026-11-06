import { icon } from "../icon.js";

export const Shredder = icon("Shredder", "shredder", {
  nodes: [
    ["path", { d: "M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" }, { r: "press", a: 0.04, o: [12, 7.5] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 7.5] }],
    ["path", { d: "M10 22v-5" }, { r: "grow", d: 0.1, o: [10, 19.5] }],
    ["path", { d: "M14 19v-2" }, { r: "grow", d: 0.15, o: [14, 18] }],
    ["path", { d: "M18 20v-3" }, { r: "grow", d: 0.2, o: [18, 18.5] }],
    ["path", { d: "M2 13h20" }, { r: "press", a: 0.04, o: [12, 7.5] }],
    ["path", { d: "M6 20v-3" }, { r: "grow", d: 0.05, o: [6, 18.5] }],
  ],
});
