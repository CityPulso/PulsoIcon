import { icon } from "../icon.js";

export const Disc3 = icon("Disc3", "disc-3", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2" }, { r: "spin", a: 360, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
