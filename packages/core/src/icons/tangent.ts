import { icon } from "../icon.js";

export const Tangent = icon("Tangent", "tangent", {
  nodes: [
    ["circle", { cx: "17", cy: "4", r: "2" }, { r: "pop", d: 0.1, o: [17, 4] }],
    ["path", { d: "M15.59 5.41 5.41 15.59" }, { r: "turn", a: 20, o: [12, 12] }],
    ["circle", { cx: "4", cy: "17", r: "2" }, { r: "pop", d: 0.18, o: [4, 17] }],
    ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12" }, { r: "turn", a: 20, o: [12, 12] }],
  ],
});
