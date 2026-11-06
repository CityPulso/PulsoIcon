import { icon } from "../icon.js";

export const GitPullRequest = icon("GitPullRequest", "git-pull-request", {
  nodes: [
    ["circle", { cx: "18", cy: "18", r: "3" }, { r: "pop", d: 0.25, o: [18, 18] }],
    ["circle", { cx: "6", cy: "6", r: "3" }, { r: "pop", o: [6, 6] }],
    ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }, { r: "draw", d: 0.1, o: [15.5, 10.5] }],
    ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }, { r: "grow", d: 0.05, o: [6, 9] }],
  ],
});
