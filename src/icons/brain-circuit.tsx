import { createIcon } from "../runtime/createIcon.js";

export const BrainCircuit = createIcon("BrainCircuit", "brain-circuit", {
  nodes: [
    ["path", { d: "M12 13h4" }, { r: "draw", d: 0.05, o: [10.999, 12] }],
    ["path", { d: "M12 18h6a2 2 0 012 2v1" }, { r: "draw", d: 0.09, o: [10.999, 12] }],
    ["path", { d: "M12 8h8" }, { r: "draw", d: 0.13, o: [10.999, 12] }],
    ["path", { d: "M12 9a4.17 4.17 0 01-3 4" }, { r: "draw", d: 0.17, o: [10.999, 12] }],
    ["path", { d: "M16 8V5a2 2 0 012-2" }, { r: "draw", d: 0.21, o: [10.999, 12] }],
    ["path", { d: "M6 18a4 4 0 01-2-7.465" }, { r: "draw", d: 0.25, o: [10.999, 12] }],
    ["path", { d: "M6.004 5.125a4 4 0 00-2.526 5.77" }, { r: "draw", d: 0.29, o: [10.999, 12] }],
    ["path", { d: "M6.294 6.294A3 3 0 1112 5v13a4 4 0 11-7.967-.518" }, { r: "pulse", a: 0.05, o: [8, 11.997] }],
    ["circle", { cx: "16", cy: "13", r: "0.5", fill: "currentColor" }, { r: "pop", d: 0.3, o: [16, 13] }],
    ["circle", { cx: "18", cy: "3", r: "0.5", fill: "currentColor" }, { r: "pop", d: 0.35, o: [18, 3] }],
    ["circle", { cx: "20", cy: "21", r: "0.5", fill: "currentColor" }, { r: "pop", d: 0.4, o: [20, 21] }],
    ["circle", { cx: "20", cy: "8", r: "0.5", fill: "currentColor" }, { r: "pop", d: 0.45, o: [20, 8] }],
  ],
});
