import { icon } from "../icon.js";

export const AudioDescription = icon("AudioDescription", "audio-description", {
  nodes: [
    ["path", { d: "m2 17 3-10 3 10" }, { r: "press", a: 0.06, o: [9, 12] }],
    ["path", { d: "M3 14h4" }, { r: "press", a: 0.06, o: [9, 12] }],
    ["path", { d: "M10 7v10h.5a5 5 0 0 0 0-10z" }, { r: "press", a: 0.06, o: [9, 12] }],
    ["path", { d: "M17.5 9.5a3.5 3.5 0 0 1 0 5" }, { r: "draw", d: 0.1, o: [18, 12] }],
    ["path", { d: "M20 7.5a7 7 0 0 1 0 9" }, { r: "draw", d: 0.2, o: [21, 12] }],
  ],
});
