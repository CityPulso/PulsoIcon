import { icon } from "../icon.js";

export const Heatmap = icon("Heatmap", "heatmap", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 3v18M15 3v18M3 9h18M3 15h18" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M6 6h.01" }, { r: "pulse", d: 0.05, a: 0.6, o: [6, 6] }],
    ["path", { d: "M12 12h.01" }, { r: "pulse", d: 0.15, a: 0.6, o: [12, 12] }],
    ["path", { d: "M18 12h.01" }, { r: "pulse", d: 0.25, a: 0.6, o: [18, 12] }],
    ["path", { d: "M12 18h.01" }, { r: "pulse", d: 0.35, a: 0.6, o: [12, 18] }],
  ],
});
