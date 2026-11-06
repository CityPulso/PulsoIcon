import { icon } from "../icon.js";

export const RepositoryCommits = icon("RepositoryCommits", "repository-commits", {
  nodes: [
    ["path", { d: "M4 19V5a2 2 0 0 1 2-2h14v18H6a2 2 0 0 1 0-4h14" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7.5 10H10" }, { r: "growX", d: 0.15, o: [7.5, 10] }],
    ["circle", { cx: "12", cy: "10", r: "2" }, { r: "pop", d: 0.05, o: [12, 10] }],
    ["path", { d: "M14 10h2.5" }, { r: "growX", d: 0.25, o: [14, 10] }],
  ],
});
