import { icon } from "../icon.js";

export const GitCompare = icon("GitCompare", "git-compare", {
  nodes: [
    ["circle", { cx: "18", cy: "18", r: "3" }, { r: "pop", d: 0.08, o: [18, 18] }],
    ["circle", { cx: "6", cy: "6", r: "3" }, { r: "pop", o: [6, 6] }],
    ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }, { r: "draw", d: 0.12, o: [15.5, 10.5] }],
    ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9" }, { r: "draw", d: 0.18, o: [8.5, 13.5] }],
  ],
});
