import { createIcon } from "../runtime/createIcon.js";

export const SquareUser = createIcon("SquareUser", "square-user", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "float", d: 0.05, a: 1.5, o: [12, 10] }],
    ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }, { r: "rise", d: 0.1, a: 1, o: [12, 19] }],
  ],
});
