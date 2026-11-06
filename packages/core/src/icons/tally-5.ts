import { icon } from "../icon.js";

export const Tally5 = icon("Tally5", "tally-5", {
  nodes: [
    ["path", { d: "M4 4v16" }, { r: "grow", o: [4, 12] }],
    ["path", { d: "M9 4v16" }, { r: "grow", d: 0.05, o: [9, 12] }],
    ["path", { d: "M14 4v16" }, { r: "grow", d: 0.1, o: [14, 12] }],
    ["path", { d: "M19 4v16" }, { r: "grow", d: 0.15, o: [19, 12] }],
    ["path", { d: "M22 6 2 18" }, { r: "draw", d: 0.25, o: [12, 12] }],
  ],
});
