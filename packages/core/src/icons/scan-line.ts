import { icon } from "../icon.js";

export const ScanLine = icon("ScanLine", "scan-line", {
  nodes: [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M7 12h10" }, { r: "slide", d: 0.05, y: 1, a: 4, o: [12, 12] }],
  ],
});
