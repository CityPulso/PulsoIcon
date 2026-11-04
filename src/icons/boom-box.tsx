import { createIcon } from "../runtime/createIcon.js";

export const BoomBox = createIcon("BoomBox", "boom-box", {
  nodes: [
    ["path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }, { r: "float", d: 0.15, a: 1, o: [12, 6] }],
    ["path", { d: "M8 8v1" }, { r: "pop", d: 0.2, o: [8, 8.5] }],
    ["path", { d: "M12 8v1" }, { r: "pop", d: 0.25, o: [12, 8.5] }],
    ["path", { d: "M16 8v1" }, { r: "pop", d: 0.3, o: [16, 8.5] }],
    ["rect", { width: "20", height: "12", x: "2", y: "9", rx: "2" }, { r: "pulse", a: 0.05, o: [12, 15] }],
    ["circle", { cx: "8", cy: "15", r: "2" }, { r: "beat", d: 0.1, o: [8, 15] }],
    ["circle", { cx: "16", cy: "15", r: "2" }, { r: "beat", d: 0.1, o: [16, 15] }],
  ],
});
