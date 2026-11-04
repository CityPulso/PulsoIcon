import { createIcon } from "../runtime/createIcon.js";

export const Skateboard = createIcon("Skateboard", "skateboard", {
  nodes: [
    ["path", { d: "M2 11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" }, { r: "slide", x: 1, a: 1.5, o: [12, 15] }],
    ["circle", { cx: "7", cy: "17", r: "2" }, { r: "roll", x: 1, a: 1.5, o: [7, 17] }],
    ["circle", { cx: "17", cy: "17", r: "2" }, { r: "roll", x: 1, a: 1.5, o: [17, 17] }],
  ],
});
