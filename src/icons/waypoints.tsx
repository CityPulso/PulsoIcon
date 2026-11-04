import { createIcon } from "../runtime/createIcon.js";

export const Waypoints = createIcon("Waypoints", "waypoints", {
  nodes: [
    ["path", { d: "m10.586 5.414-5.172 5.172" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "m18.586 13.414-5.172 5.172" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M6 12h12" }, { r: "draw", d: 0.2, o: [12, 12] }],
    ["circle", { cx: "12", cy: "20", r: "2" }, { r: "pop", d: 0.18, o: [12, 20] }],
    ["circle", { cx: "12", cy: "4", r: "2" }, { r: "pop", o: [12, 4] }],
    ["circle", { cx: "20", cy: "12", r: "2" }, { r: "pop", d: 0.12, o: [20, 12] }],
    ["circle", { cx: "4", cy: "12", r: "2" }, { r: "pop", d: 0.06, o: [4, 12] }],
  ],
});
