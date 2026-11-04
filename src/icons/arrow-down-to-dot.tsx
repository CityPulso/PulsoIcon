import { createIcon } from "../runtime/createIcon.js";

export const ArrowDownToDot = createIcon("ArrowDownToDot", "arrow-down-to-dot", {
  nodes: [
    ["path", { d: "M12 2v14" }, { r: "bounce", y: 1, a: 2.5, o: [12, 9] }],
    ["path", { d: "m19 9-7 7-7-7" }, { r: "bounce", y: 1, a: 2.5, o: [12, 9] }],
    ["circle", { cx: "12", cy: "21", r: "1" }, { r: "pop", d: 0.25, o: [12, 21] }],
  ],
});
