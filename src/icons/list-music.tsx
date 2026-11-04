import { createIcon } from "../runtime/createIcon.js";

export const ListMusic = createIcon("ListMusic", "list-music", {
  nodes: [
    ["path", { d: "M16 5H3" }, { r: "growX", o: [3, 12] }],
    ["path", { d: "M11 12H3" }, { r: "growX", d: 0.05, o: [3, 12] }],
    ["path", { d: "M11 19H3" }, { r: "growX", d: 0.1, o: [3, 12] }],
    ["path", { d: "M21 16V5" }, { r: "bounce", d: 0.15, y: -1, a: 2, o: [18, 12] }],
    ["circle", { cx: "18", cy: "16", r: "3" }, { r: "bounce", d: 0.15, y: -1, a: 2, o: [18, 12] }],
  ],
});
