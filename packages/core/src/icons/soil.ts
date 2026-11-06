import { icon } from "../icon.js";

export const Soil = icon("Soil", "soil", {
  nodes: [
    ["path", { d: "M2 10q2.5-2 5 0t5 0 5 0 5 0v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M6 14h.01" }, { r: "pop", d: 0.1, o: [6, 14] }],
    ["path", { d: "M12 15h.01" }, { r: "pop", d: 0.15, o: [12, 15] }],
    ["path", { d: "M18 14h.01" }, { r: "pop", d: 0.2, o: [18, 14] }],
    ["path", { d: "M9 18h.01" }, { r: "pop", d: 0.25, o: [9, 18] }],
    ["path", { d: "M15 18h.01" }, { r: "pop", d: 0.3, o: [15, 18] }],
  ],
});
