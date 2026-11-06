import { icon } from "../icon.js";

export const IdCard = icon("IdCard", "id-card", {
  nodes: [
    ["path", { d: "M13 19a4 4 0 00-8 0" }, { r: "rise", d: 0.2, a: 1, o: [9, 17] }],
    ["path", { d: "M16 10h2" }, { r: "growX", d: 0.25, o: [16, 12] }],
    ["path", { d: "M16 14h2" }, { r: "growX", d: 0.3, o: [16, 12] }],
    ["circle", { cx: "9", cy: "12", r: "3" }, { r: "pop", d: 0.15, o: [9, 12] }],
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }, { r: "flip", o: [12, 12] }],
  ],
});
