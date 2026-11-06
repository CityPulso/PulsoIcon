import { icon } from "../icon.js";

export const GitBranch = icon("GitBranch", "git-branch", {
  nodes: [
    ["path", { d: "M15 6a9 9 0 0 0-9 9V3" }, { r: "draw", d: 0.08, o: [10.5, 9] }],
    ["circle", { cx: "18", cy: "6", r: "3" }, { r: "pop", d: 0.25, o: [18, 6] }],
    ["circle", { cx: "6", cy: "18", r: "3" }, { r: "pop", o: [6, 18] }],
  ],
});
