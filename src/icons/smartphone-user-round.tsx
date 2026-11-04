import { createIcon } from "../runtime/createIcon.js";

export const SmartphoneUserRound = createIcon("SmartphoneUserRound", "smartphone-user-round", {
  nodes: [
    ["path", { d: "M10 22H6a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2v4" }, { r: "press", a: 0.04, o: [11, 12] }],
    ["path", { d: "M11 18h.01" }, { r: "press", a: 0.04, o: [11, 12] }],
    ["path", { d: "M22 22a4 4 0 00-8 0" }, { r: "rise", d: 0.1, a: 1, o: [18, 20] }],
    ["circle", { cx: "18", cy: "15", r: "3" }, { r: "float", d: 0.05, a: 1.5, o: [18, 15] }],
  ],
});
