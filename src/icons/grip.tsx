import { createIcon } from "../runtime/createIcon.js";

export const Grip = createIcon("Grip", "grip", {
  nodes: [
    ["circle", { cx: "12", cy: "5", r: "1" }, { r: "pop", d: 0.03, o: [12, 5] }],
    ["circle", { cx: "19", cy: "5", r: "1" }, { r: "pop", d: 0.06, o: [19, 5] }],
    ["circle", { cx: "5", cy: "5", r: "1" }, { r: "pop", o: [5, 5] }],
    ["circle", { cx: "12", cy: "12", r: "1" }, { r: "pop", d: 0.12, o: [12, 12] }],
    ["circle", { cx: "19", cy: "12", r: "1" }, { r: "pop", d: 0.15, o: [19, 12] }],
    ["circle", { cx: "5", cy: "12", r: "1" }, { r: "pop", d: 0.09, o: [5, 12] }],
    ["circle", { cx: "12", cy: "19", r: "1" }, { r: "pop", d: 0.21, o: [12, 19] }],
    ["circle", { cx: "19", cy: "19", r: "1" }, { r: "pop", d: 0.24, o: [19, 19] }],
    ["circle", { cx: "5", cy: "19", r: "1" }, { r: "pop", d: 0.18, o: [5, 19] }],
  ],
});
