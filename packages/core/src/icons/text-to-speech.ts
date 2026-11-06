import { icon } from "../icon.js";

export const TextToSpeech = icon("TextToSpeech", "text-to-speech", {
  nodes: [
    ["path", { d: "M2 7h5" }, { r: "draw", o: [4.5, 7] }],
    ["path", { d: "M4.5 7v10" }, { r: "draw", d: 0.1, o: [4.5, 12] }],
    ["path", { d: "m9.5 9.5 2.5 2.5-2.5 2.5" }, { r: "slide", d: 0.2, x: 1, a: 1, o: [10.5, 12] }],
    ["path", { d: "M15 9.5v5" }, { r: "grow", d: 0.3, o: [15, 12] }],
    ["path", { d: "M18 7v10" }, { r: "grow", d: 0.38, o: [18, 12] }],
    ["path", { d: "M21 10v4" }, { r: "grow", d: 0.46, o: [21, 12] }],
  ],
});
