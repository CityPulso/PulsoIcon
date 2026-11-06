import { icon } from "../icon.js";

export const TentTree = icon("TentTree", "tent-tree", {
  nodes: [
    ["circle", { cx: "4", cy: "4", r: "2" }, { r: "spin", a: 90, o: [4, 4] }],
    ["path", { d: "m14 5 3-3 3 3" }, { r: "sway", a: 6, o: [17, 14] }],
    ["path", { d: "m14 10 3-3 3 3" }, { r: "sway", a: 6, o: [17, 14] }],
    ["path", { d: "M17 14V2" }, { r: "sway", a: 6, o: [17, 14] }],
    ["path", { d: "M17 14H7l-5 8h20Z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M8 14v8" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "m9 14 5 8" }, { r: "press", a: 0.04, o: [12, 22] }],
  ],
});
