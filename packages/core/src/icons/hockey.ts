import { icon } from "../icon.js";

export const Hockey = icon("Hockey", "hockey", {
  nodes: [
    ["path", { d: "M6 2l7.5 15.5a2 2 0 0 0 1.8 1.1H21" }, { r: "swing", a: -14, o: [6, 2] }],
    ["ellipse", { cx: "6", cy: "18", rx: "3", ry: "1.5" }, { r: "shoot", d: 0.25, x: -1, a: 4, o: [6, 19] }],
    ["path", { d: "M3 18v1.5c0 .8 1.3 1.5 3 1.5s3-.7 3-1.5V18" }, { r: "shoot", d: 0.25, x: -1, a: 4, o: [6, 19] }],
  ],
});
