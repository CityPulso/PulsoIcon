import { icon } from "../icon.js";

export const AArrowDown = icon("AArrowDown", "a-arrow-down", {
  nodes: [
    ["path", { d: "m14 12 4 4 4-4" }, { r: "bounce", d: 0.05, y: 1, a: 2.5, o: [18, 11.5] }],
    ["path", { d: "M18 16V7" }, { r: "bounce", d: 0.05, y: 1, a: 2.5, o: [18, 11.5] }],
    ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }, { r: "press", a: 0.08, o: [6.5, 16] }],
    ["path", { d: "M3.304 13h6.392" }, { r: "press", a: 0.08, o: [6.5, 16] }],
  ],
});
