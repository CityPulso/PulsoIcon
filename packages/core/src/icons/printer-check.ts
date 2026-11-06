import { icon } from "../icon.js";

export const PrinterCheck = icon("PrinterCheck", "printer-check", {
  nodes: [
    ["path", { d: "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" }, { r: "slide", d: 0.05, y: 1, a: 1.5, o: [12, 18] }],
    ["path", { d: "m16 19 2 2 4-4" }, { r: "draw", d: 0.15, o: [19, 19] }],
    ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }, { r: "press", a: 0.04, o: [12, 10] }],
  ],
});
