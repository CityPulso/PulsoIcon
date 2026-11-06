import { icon } from "../icon.js";

export const BearSmile = icon("BearSmile", "bear-smile", {
  nodes: [
    ["path", { d: "M5.43 8.43A2.5 2.5 0 1 1 8.49 5.81a8 8 0 0 1 7.02 0 2.5 2.5 0 1 1 3.06 2.62A8 8 0 1 1 5.43 8.43Z" }, { r: "wobble", a: 5, o: [12, 20] }],
    ["path", { d: "M9 11.5v.5" }, { r: "blink", d: 0.15, o: [12, 11.75] }],
    ["path", { d: "M15 11.5v.5" }, { r: "blink", d: 0.15, o: [12, 11.75] }],
    ["path", { d: "M11 14.5h2" }, { r: "pop", d: 0.2, o: [12, 14.5] }],
    ["path", { d: "M9.5 16.5a3.5 3.5 0 0 0 5 0" }, { r: "draw", d: 0.25, o: [12, 17] }],
  ],
});
