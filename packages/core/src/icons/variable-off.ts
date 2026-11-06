import { icon } from "../icon.js";

// Adapted from Tabler Icons "variable-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const VariableOff = icon("VariableOff", "variable-off", {
  text: true,
  nodes: [
    ["path", { d: "M4.675 4.68c-2.17 4.776 -2.062 9.592 .325 15.32" }, { r: "slide", x: -1, a: 1, o: [4, 12] }],
    ["path", { d: "M19 4c1.959 3.917 2.383 7.834 1.272 12.232m-.983 3.051c-.093 .238 -.189 .477 -.289 .717" }, { r: "slide", x: 1, a: 1, o: [20, 12] }],
    ["path", { d: "M11.696 11.696c.095 .257 .2 .533 .32 .831c.984 2.473 .984 3.473 1.984 3.473h1" }, { r: "pop", d: 0.2, o: [12, 12] }],
    ["path", { d: "M8 16c1.5 0 3 -2 4 -3.5m2.022 -2.514c.629 -.582 1.304 -.986 1.978 -.986" }, { r: "pop", d: 0.2, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M8 21s-4-3-4-9 4-9 4-9", fill: "none" }, { r: "slide", x: -1, a: 1, o: [4, 12] }],
    ["path", { d: "M16 3s4 3 4 9-4 9-4 9", fill: "none" }, { r: "slide", x: 1, a: 1, o: [20, 12] }],
    ["line", { x1: "15", x2: "9", y1: "9", y2: "15", fill: "none" }, { r: "pop", d: 0.2, o: [12, 12] }],
    ["line", { x1: "9", x2: "15", y1: "9", y2: "15", fill: "none" }, { r: "pop", d: 0.2, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
