import { createIcon } from "../runtime/createIcon.js";

export const Rss = createIcon("Rss", "rss", {
  nodes: [
    ["path", { d: "M4 11a9 9 0 0 1 9 9" }, { r: "draw", d: 0.1, o: [8.5, 15.5] }],
    ["path", { d: "M4 4a16 16 0 0 1 16 16" }, { r: "draw", d: 0.2, o: [12, 12] }],
    ["circle", { cx: "5", cy: "19", r: "1" }, { r: "pop", o: [5, 19] }],
  ],
});
