import { icon } from "../icon.js";

export const Carrot = icon("Carrot", "carrot", {
  svg: { r: "swing", a: 10, o: [16, 4] },
  nodes: [
    ["path", { d: "M15 16a1 1 0 0 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16l-3-3" }],
    ["path", { d: "M15 9q4 4 7 0-3-4-7 0 4-4 0-7-4 3 0 7" }, { r: "sway", d: 0.1, a: 10, o: [16, 6] }],
    ["path", { d: "m8 15-2.58-2.58" }],
  ],
});
