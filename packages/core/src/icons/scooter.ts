import { icon } from "../icon.js";

export const Scooter = icon("Scooter", "scooter", {
  nodes: [
    ["path", { d: "M21 4h-3.5l2 11.05" }, { r: "slide", x: 1, a: 1, o: [13.975, 10.5] }],
    ["path", { d: "M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009" }, { r: "slide", x: 1, a: 1, o: [13.975, 10.5] }],
    ["circle", { cx: "19.5", cy: "17.5", r: "2.5" }, { r: "spin", a: 360, o: [19.5, 17.5] }],
    ["circle", { cx: "4.5", cy: "17.5", r: "2.5" }, { r: "spin", a: 360, o: [4.5, 17.5] }],
  ],
});
