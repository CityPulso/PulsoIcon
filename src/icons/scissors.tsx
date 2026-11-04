import { createIcon } from "../runtime/createIcon.js";

export const Scissors = createIcon("Scissors", "scissors", {
  nodes: [
    ["circle", { cx: "6", cy: "6", r: "3" }, { r: "turn", a: -12, o: [12, 12] }],
    ["path", { d: "M8.12 8.12 12 12" }, { r: "turn", a: -12, o: [12, 12] }],
    ["path", { d: "M20 4 8.12 15.88" }, { r: "turn", a: -12, o: [12, 12] }],
    ["circle", { cx: "6", cy: "18", r: "3" }, { r: "turn", a: 12, o: [12, 12] }],
    ["path", { d: "M14.8 14.8 20 20" }, { r: "turn", a: 12, o: [12, 12] }],
  ],
});
