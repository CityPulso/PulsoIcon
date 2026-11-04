import { createIcon } from "../runtime/createIcon.js";

export const GitCommitHorizontal = createIcon("GitCommitHorizontal", "git-commit-horizontal", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "spin", a: 180, o: [12, 12] }],
    ["line", { x1: "3", x2: "9", y1: "12", y2: "12" }, { r: "growX", d: 0.05, o: [9, 12] }],
    ["line", { x1: "15", x2: "21", y1: "12", y2: "12" }, { r: "growX", d: 0.05, o: [15, 12] }],
  ],
});
