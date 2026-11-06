import { icon } from "../icon.js";

export const Tower = icon("Tower", "tower", {
  nodes: [
    ["path", { d: "M5 8V3h2.5v2H10V3h4v2h2.5V3H19v5Z" }, { r: "drop", y: -1, a: 3, d: 0.1, o: [12, 5.5] }],
    ["path", { d: "M7 8v13M17 8v13" }, { r: "grow", o: [12, 21] }],
    ["path", { d: "M4 21h16" }, { r: "growX", o: [12, 21] }],
    ["path", { d: "M10 21v-3a2 2 0 0 1 4 0v3" }, { r: "pop", d: 0.25, o: [12, 19] }],
  ],
});
