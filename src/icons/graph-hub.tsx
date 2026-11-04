import { createIcon } from "../runtime/createIcon.js";

export const GraphHub = createIcon("GraphHub", "graph-hub", {
  nodes: [
    ["circle", { cx: "12", cy: "7", r: "4" }, { r: "pop", o: [12, 7] }],
    ["circle", { cx: "4", cy: "19", r: "2" }, { r: "pop", d: 0.25, o: [4, 19] }],
    ["circle", { cx: "12", cy: "19", r: "2" }, { r: "pop", d: 0.31, o: [12, 19] }],
    ["circle", { cx: "20", cy: "19", r: "2" }, { r: "pop", d: 0.37, o: [20, 19] }],
    ["path", { d: "M8 7a4 4 0 0 0-4 4v6" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M12 11v6" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M16 7a4 4 0 0 1 4 4v6" }, { r: "draw", d: 0.2, o: [12, 12] }],
  ],
});
