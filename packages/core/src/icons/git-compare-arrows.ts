import { icon } from "../icon.js";

export const GitCompareArrows = icon("GitCompareArrows", "git-compare-arrows", {
  nodes: [
    ["circle", { cx: "5", cy: "6", r: "3" }, { r: "pop", o: [5, 6] }],
    ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [15.5, 9] }],
    ["path", { d: "m15 9-3-3 3-3" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [15.5, 9] }],
    ["circle", { cx: "19", cy: "18", r: "3" }, { r: "pop", d: 0.1, o: [19, 18] }],
    ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [8.5, 15] }],
    ["path", { d: "m9 15 3 3-3 3" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [8.5, 15] }],
  ],
});
