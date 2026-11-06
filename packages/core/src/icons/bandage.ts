import { icon } from "../icon.js";

export const Bandage = icon("Bandage", "bandage", {
  nodes: [
    ["path", { d: "M10 10.01h.01" }, { r: "pop", d: 0.15, o: [10.005, 10.01] }],
    ["path", { d: "M10 14.01h.01" }, { r: "pop", d: 0.2, o: [10.005, 14.01] }],
    ["path", { d: "M14 10.01h.01" }, { r: "pop", d: 0.25, o: [14.005, 10.01] }],
    ["path", { d: "M14 14.01h.01" }, { r: "pop", d: 0.3, o: [14.005, 14.01] }],
    ["path", { d: "M18 6v12" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M6 6v12" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["rect", { x: "2", y: "6", width: "20", height: "12", rx: "2" }, { r: "jelly", a: 0.12, o: [12, 12] }],
  ],
});
