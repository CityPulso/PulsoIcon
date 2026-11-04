import { createIcon } from "../runtime/createIcon.js";

export const GitPullRequestCreate = createIcon("GitPullRequestCreate", "git-pull-request-create", {
  nodes: [
    ["circle", { cx: "6", cy: "6", r: "3" }, { r: "pop", o: [6, 6] }],
    ["path", { d: "M6 9v12" }, { r: "grow", d: 0.05, o: [6, 9] }],
    ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3" }, { r: "draw", d: 0.1, o: [15.5, 8.5] }],
    ["path", { d: "M18 15v6" }, { r: "spin", d: 0.2, a: 90, o: [18, 18] }],
    ["path", { d: "M21 18h-6" }, { r: "spin", d: 0.2, a: 90, o: [18, 18] }],
  ],
});
