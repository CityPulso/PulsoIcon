import { icon } from "../icon.js";

export const BriefcaseConveyorBelt = icon("BriefcaseConveyorBelt", "briefcase-conveyor-belt", {
  nodes: [
    ["path", { d: "M10 20v2" }, { r: "spin", a: 180, o: [10, 21] }],
    ["path", { d: "M14 20v2" }, { r: "spin", d: 0.05, a: 180, o: [14, 21] }],
    ["path", { d: "M18 20v2" }, { r: "spin", d: 0.1, a: 180, o: [18, 21] }],
    ["path", { d: "M21 20H3" }, { r: "growX", o: [12, 20] }],
    ["path", { d: "M6 20v2" }, { r: "spin", d: 0.15, a: 180, o: [6, 21] }],
    ["path", { d: "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" }, { r: "slide", x: 1, a: 2, o: [12, 9] }],
    ["rect", { x: "4", y: "6", width: "16", height: "10", rx: "2" }, { r: "slide", x: 1, a: 2, o: [12, 9] }],
  ],
});
