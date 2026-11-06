import { icon } from "../icon.js";

export const ArrowDownZA = icon("ArrowDownZA", "arrow-down-z-a", {
  text: true,
  nodes: [
    ["path", { d: "m3 16 4 4 4-4" }, { r: "bounce", y: 1, a: 2, o: [7, 12] }],
    ["path", { d: "M7 4v16" }, { r: "bounce", y: 1, a: 2, o: [7, 12] }],
    ["path", { d: "M15 4h5l-5 6h5" }, { r: "drop", o: [17.5, 7] }],
    ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }, { r: "drop", d: 0.15, o: [17.5, 17] }],
    ["path", { d: "M20 18h-5" }, { r: "drop", d: 0.15, o: [17.5, 17] }],
  ],
});
