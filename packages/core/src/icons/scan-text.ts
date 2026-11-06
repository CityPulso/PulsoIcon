import { icon } from "../icon.js";

export const ScanText = icon("ScanText", "scan-text", {
  nodes: [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M7 8h8" }, { r: "growX", d: 0.05, o: [7, 12] }],
    ["path", { d: "M7 12h10" }, { r: "growX", d: 0.11, o: [7, 12] }],
    ["path", { d: "M7 16h6" }, { r: "growX", d: 0.17, o: [7, 12] }],
  ],
});
