import { icon } from "../icon.js";

export const GitPullRequestDraft = icon("GitPullRequestDraft", "git-pull-request-draft", {
  nodes: [
    ["circle", { cx: "18", cy: "18", r: "3" }, { r: "pop", d: 0.1, o: [18, 18] }],
    ["circle", { cx: "6", cy: "6", r: "3" }, { r: "pop", o: [6, 6] }],
    ["path", { d: "M18 6V5" }, { r: "pop", d: 0.25, o: [18, 5.5] }],
    ["path", { d: "M18 11v-1" }, { r: "pop", d: 0.33, o: [18, 10.5] }],
    ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }, { r: "grow", d: 0.15, o: [6, 9] }],
  ],
});
