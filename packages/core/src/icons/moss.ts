import { icon } from "../icon.js";

export const Moss = icon("Moss", "moss", {
  nodes: [
    ["path", { d: "M3 20a3 3 0 0 1 3.5-3.5 4 4 0 0 1 7.5-1.5 3.5 3.5 0 0 1 6.5 2.5A2 2 0 0 1 21 20Z" }, { r: "pulse", a: 0.05, o: [12, 20] }],
    ["path", { d: "M9 14.5 8 10" }, { r: "sway", d: 0.05, a: 10, o: [9, 14.5] }],
    ["path", { d: "M13 13V8" }, { r: "sway", d: 0.1, a: -10, o: [13, 13] }],
    ["path", { d: "M17 15l1-3.5" }, { r: "sway", d: 0.15, a: 10, o: [17, 15] }],
  ],
});
