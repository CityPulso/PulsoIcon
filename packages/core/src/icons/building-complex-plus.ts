import { icon } from "../icon.js";

export const BuildingComplexPlus = icon("BuildingComplexPlus", "building-complex-plus", {
  nodes: [
    ["path", { d: "M10 12h4" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["path", { d: "M10 21v-3a2 2 0 013.05-1.702" }, { r: "pop", d: 0.15, o: [11.525, 18.5] }],
    ["path", { d: "M10 8h4" }, { r: "pop", d: 0.2, o: [12, 8] }],
    ["path", { d: "M16 19h6" }, { r: "spin", d: 0.2, a: 90, o: [19, 19] }],
    ["path", { d: "M18 7h2a2 2 0 012 2v4.355" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M19 16v6" }, { r: "spin", d: 0.2, a: 90, o: [19, 19] }],
    ["path", { d: "M6 10H4a2 2 0 00-2 2v7a2 2 0 002 2h8.535" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M6 21V5a2 2 0 012-2h8a2 2 0 012 2v7.126" }, { r: "press", a: 0.04, o: [12, 21] }],
  ],
});
