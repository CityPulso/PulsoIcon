import { icon } from "../icon.js";

export const BuildingComplex = icon("BuildingComplex", "building-complex", {
  nodes: [
    ["path", { d: "M10 12h4" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["path", { d: "M10 8h4" }, { r: "pop", d: 0.16, o: [12, 8] }],
    ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }, { r: "pop", d: 0.22, o: [12, 18.5] }],
    ["path", { d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" }, { r: "press", a: 0.04, o: [12, 21] }],
  ],
});
