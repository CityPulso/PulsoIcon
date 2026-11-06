import { icon } from "../icon.js";

export const Piano = icon("Piano", "piano", {
  nodes: [
    ["path", { d: "M10 13v4" }, { r: "press", d: 0.11, a: 0.3, o: [10, 15] }],
    ["path", { d: "M14 13v4" }, { r: "press", d: 0.17, a: 0.3, o: [14, 15] }],
    ["path", { d: "M18 13v4" }, { r: "press", d: 0.23, a: 0.3, o: [18, 15] }],
    ["path", { d: "M2 13h20" }, { r: "fade", o: [12, 13] }],
    ["path", { d: "M22 11.5A3.5 3.5 0 0018.5 8a3.52 3.52 0 01-3.173-2A7 7 0 002 9v10a2 2 0 002 2h16a2 2 0 002-2z" }, { r: "press", a: 0.03, o: [12, 11.497] }],
    ["path", { d: "M6 13v4" }, { r: "press", d: 0.05, a: 0.3, o: [6, 15] }],
  ],
});
