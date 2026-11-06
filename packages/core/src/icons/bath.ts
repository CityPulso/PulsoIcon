import { icon } from "../icon.js";

export const Bath = icon("Bath", "bath", {
  nodes: [
    ["path", { d: "M10 4 8 6" }, { r: "drop", d: 0.1, o: [9, 5] }],
    ["path", { d: "M17 19v2" }, { r: "pop", d: 0.2, o: [17, 20] }],
    ["path", { d: "M2 12h20" }],
    ["path", { d: "M7 19v2" }, { r: "pop", d: 0.2, o: [7, 20] }],
    ["path", { d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" }, { r: "jelly", a: 0.08, o: [12, 19] }],
  ],
});
