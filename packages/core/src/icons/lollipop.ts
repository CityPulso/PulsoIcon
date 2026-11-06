import { icon } from "../icon.js";

export const Lollipop = icon("Lollipop", "lollipop", {
  nodes: [
    ["circle", { cx: "11", cy: "11", r: "8" }, { r: "spin", a: 360, o: [11, 11] }],
    ["path", { d: "m21 21-4.3-4.3" }, { r: "fade", o: [18.85, 18.85] }],
    ["path", { d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" }, { r: "spin", a: 360, o: [11, 11] }],
  ],
});
