import { createIcon } from "../runtime/createIcon.js";

export const LocateFixed = createIcon("LocateFixed", "locate-fixed", {
  nodes: [
    ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "7" }, { r: "spin", a: 90, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "pop", d: 0.1, o: [12, 12] }],
  ],
});
