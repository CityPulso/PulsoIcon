import { createIcon } from "../runtime/createIcon.js";

export const Grape = createIcon("Grape", "grape", {
  nodes: [
    ["path", { d: "M22 5V2l-5.89 5.89" }, { r: "sway", a: 10, o: [16, 4] }],
    ["circle", { cx: "16.6", cy: "15.89", r: "3" }, { r: "pop", d: 0.23, o: [16.6, 15.89] }],
    ["circle", { cx: "8.11", cy: "7.4", r: "3" }, { r: "pop", d: 0.09, o: [8.11, 7.4] }],
    ["circle", { cx: "12.35", cy: "11.65", r: "3" }, { r: "pop", d: 0.15, o: [12.35, 11.65] }],
    ["circle", { cx: "13.91", cy: "5.85", r: "3" }, { r: "pop", d: 0.05, o: [13.91, 5.85] }],
    ["circle", { cx: "18.15", cy: "10.09", r: "3" }, { r: "pop", d: 0.13, o: [18.15, 10.09] }],
    ["circle", { cx: "6.56", cy: "13.2", r: "3" }, { r: "pop", d: 0.19, o: [6.56, 13.2] }],
    ["circle", { cx: "10.8", cy: "17.44", r: "3" }, { r: "pop", d: 0.25, o: [10.8, 17.44] }],
    ["circle", { cx: "5", cy: "19", r: "3" }, { r: "pop", d: 0.29, o: [5, 19] }],
  ],
});
