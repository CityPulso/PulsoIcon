import { icon } from "../icon.js";

export const Microphone2Ai = icon("Microphone2Ai", "microphone-2-ai", {
  text: true,
  nodes: [
    ["circle", { cx: "15", cy: "7.5", r: "4.5" }, { r: "tilt", a: 10, o: [5, 19] }],
    ["path", { d: "M11.5 10.3 3.9 18.1a1.5 1.5 0 0 0 2 2l7.8-7.6" }, { r: "tilt", a: 10, o: [5, 19] }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.2, o: [16, 19] }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.35, o: [16, 19] }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.45, o: [21, 18] }],
  ],
});
