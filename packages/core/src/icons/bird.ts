import { icon } from "../icon.js";

export const Bird = icon("Bird", "bird", {
  svg: { r: "float", a: 2 },
  nodes: [
    ["path", { d: "M16 7h.01" }, { r: "blink", d: 0.3, o: [16, 7] }],
    ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" }],
    ["path", { d: "m20 7 2 .5-2 .5" }],
    ["path", { d: "M10 18v3" }],
    ["path", { d: "M14 17.75V21" }],
    ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61" }, { r: "swing", d: 0.05, a: -15, o: [8, 8] }],
  ],
});
