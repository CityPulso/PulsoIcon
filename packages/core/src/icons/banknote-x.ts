import { icon } from "../icon.js";

export const BanknoteX = icon("BanknoteX", "banknote-x", {
  nodes: [
    ["path", { d: "M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "m17 17 5 5" }, { r: "draw", d: 0.2, o: [19.5, 19.5] }],
    ["path", { d: "M18 12h.01" }, { r: "pop", d: 0.1, o: [18.005, 12] }],
    ["path", { d: "m22 17-5 5" }, { r: "draw", d: 0.3, o: [19.5, 19.5] }],
    ["path", { d: "M6 12h.01" }, { r: "pop", d: 0.15, o: [6.005, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "shake", a: 1, o: [12, 12] }],
  ],
});
