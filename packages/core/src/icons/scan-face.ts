import { icon } from "../icon.js";

export const ScanFace = icon("ScanFace", "scan-face", {
  nodes: [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }, { r: "draw", d: 0.15, o: [12, 15] }],
    ["path", { d: "M9 9h.01" }, { r: "blink", d: 0.05, o: [12, 9] }],
    ["path", { d: "M15 9h.01" }, { r: "blink", d: 0.05, o: [12, 9] }],
  ],
});
