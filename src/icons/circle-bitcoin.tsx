import { createIcon } from "../runtime/createIcon.js";

export const CircleBitcoin = createIcon("CircleBitcoin", "circle-bitcoin", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M9 7h4a2.5 2.5 0 0 1 0 5H9z" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M9 12h4.5a2.5 2.5 0 0 1 0 5H9z" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M11 5v2" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M11 17v2" }, { r: "flip", o: [12, 12] }],
  ],
});
