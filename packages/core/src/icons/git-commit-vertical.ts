import { icon } from "../icon.js";

export const GitCommitVertical = icon("GitCommitVertical", "git-commit-vertical", {
  nodes: [
    ["path", { d: "M12 3v6" }, { r: "grow", d: 0.05, o: [12, 9] }],
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M12 15v6" }, { r: "grow", d: 0.05, o: [12, 15] }],
  ],
});
