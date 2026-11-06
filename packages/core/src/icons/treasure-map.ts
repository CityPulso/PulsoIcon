import { icon } from "../icon.js";

export const TreasureMap = icon("TreasureMap", "treasure-map", {
  nodes: [
    ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }, { r: "fold", d: 0.05, o: [12, 10] }],
    ["path", { d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" }, { r: "fold", d: 0.05, o: [12, 10] }],
    ["path", { d: "M9.5 14h.01" }, { r: "pop", d: 0.15, o: [9.5, 14] }],
    ["path", { d: "M11 11.5h.01" }, { r: "pop", d: 0.22, o: [11, 11.5] }],
    ["path", { d: "M13 9.5h.01" }, { r: "pop", d: 0.29, o: [13, 9.5] }],
    ["path", { d: "m14 5.5 3 3" }, { r: "draw", d: 0.36, o: [15.5, 7] }],
    ["path", { d: "m17 5.5-3 3" }, { r: "draw", d: 0.44, o: [15.5, 7] }],
  ],
});
