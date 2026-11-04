import { createIcon } from "../runtime/createIcon.js";

export const CircleUserRound = createIcon("CircleUserRound", "circle-user-round", {
  nodes: [
    ["path", { d: "M17.925 20.056a6 6 0 0 0-11.851.001" }, { r: "rise", d: 0.1, a: 1, o: [12, 17.528] }],
    ["circle", { cx: "12", cy: "11", r: "4" }, { r: "float", a: 1.5, o: [12, 11] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
