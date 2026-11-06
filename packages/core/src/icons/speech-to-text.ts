import { icon } from "../icon.js";

export const SpeechToText = icon("SpeechToText", "speech-to-text", {
  nodes: [
    ["path", { d: "M3 10v4" }, { r: "grow", d: 0, o: [3, 12] }],
    ["path", { d: "M6 7v10" }, { r: "grow", d: 0.08, o: [6, 12] }],
    ["path", { d: "M9 9.5v5" }, { r: "grow", d: 0.16, o: [9, 12] }],
    ["path", { d: "m12 9.5 2.5 2.5-2.5 2.5" }, { r: "slide", d: 0.2, x: 1, a: 1, o: [13, 12] }],
    ["path", { d: "M17 7h5" }, { r: "draw", d: 0.3, o: [19.5, 7] }],
    ["path", { d: "M19.5 7v10" }, { r: "draw", d: 0.4, o: [19.5, 12] }],
  ],
});
