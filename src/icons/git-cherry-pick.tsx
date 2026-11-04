import { createIcon } from "../runtime/createIcon.js";

export const GitCherryPick = createIcon("GitCherryPick", "git-cherry-pick", {
  nodes: [
    ["circle", { cx: "7", cy: "12", r: "3" }, { r: "pop", o: [7, 12] }],
    ["path", { d: "M7 3v6" }, { r: "grow", o: [7, 9] }],
    ["path", { d: "M7 15v6" }, { r: "grow", o: [7, 15] }],
    ["path", { d: "M10 12h2a5 5 0 0 0 5-5V3" }, { r: "draw", d: 0.15, o: [14, 8] }],
    ["path", { d: "m14 6 3-3 3 3" }, { r: "bounce", d: 0.3, y: -1, a: 1.5, o: [17, 4.5] }],
  ],
});
