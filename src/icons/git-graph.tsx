import { createIcon } from "../runtime/createIcon.js";

export const GitGraph = createIcon("GitGraph", "git-graph", {
  nodes: [
    ["circle", { cx: "5", cy: "6", r: "3" }, { r: "pop", o: [5, 6] }],
    ["path", { d: "M5 9v6" }, { r: "grow", d: 0.05, o: [5, 9] }],
    ["circle", { cx: "5", cy: "18", r: "3" }, { r: "pop", d: 0.1, o: [5, 18] }],
    ["path", { d: "M12 3v18" }, { r: "grow", d: 0.05, o: [12, 3] }],
    ["circle", { cx: "19", cy: "6", r: "3" }, { r: "pop", d: 0.15, o: [19, 6] }],
    ["path", { d: "M16 15.7A9 9 0 0 0 19 9" }, { r: "draw", d: 0.2, o: [17.5, 12.35] }],
  ],
});
