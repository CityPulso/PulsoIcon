import { createIcon } from "../runtime/createIcon.js";

export const CirclePile = createIcon("CirclePile", "circle-pile", {
  nodes: [
    ["circle", { cx: "12", cy: "19", r: "2" }, { r: "drop", d: 0.28, o: [12, 19] }],
    ["circle", { cx: "12", cy: "5", r: "2" }, { r: "drop", o: [12, 5] }],
    ["circle", { cx: "16", cy: "12", r: "2" }, { r: "drop", d: 0.16, o: [12, 12] }],
    ["circle", { cx: "20", cy: "19", r: "2" }, { r: "drop", d: 0.34, o: [12, 19] }],
    ["circle", { cx: "4", cy: "19", r: "2" }, { r: "drop", d: 0.22, o: [12, 19] }],
    ["circle", { cx: "8", cy: "12", r: "2" }, { r: "drop", d: 0.1, o: [12, 12] }],
  ],
});
