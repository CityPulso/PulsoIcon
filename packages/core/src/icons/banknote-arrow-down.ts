import { icon } from "../icon.js";

export const BanknoteArrowDown = icon("BanknoteArrowDown", "banknote-arrow-down", {
  nodes: [
    ["path", { d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }, { r: "slide", x: -1, a: 1, o: [12, 12] }],
    ["path", { d: "m16 19 3 3 3-3" }, { r: "bounce", d: 0.15, y: 1, a: 2, o: [19, 19] }],
    ["path", { d: "M18 12h.01" }, { r: "pop", d: 0.1, o: [18.005, 12] }],
    ["path", { d: "M19 16v6" }, { r: "bounce", d: 0.15, y: 1, a: 2, o: [19, 19] }],
    ["path", { d: "M6 12h.01" }, { r: "pop", d: 0.15, o: [6.005, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "slide", x: -1, a: 1, o: [12, 12] }],
  ],
});
