import { icon } from "../icon.js";

export const AudioLinesOff = icon("AudioLinesOff", "audio-lines-off", {
  nodes: [
    ["path", { d: "M10 10v11" }, { r: "grow", o: [10, 15.5] }],
    ["path", { d: "M10 3v1.35" }, { r: "grow", d: 0.04, o: [10, 3.675] }],
    ["path", { d: "M14 14v1" }, { r: "grow", d: 0.08, o: [14, 14.5] }],
    ["path", { d: "M14 8v.35" }, { r: "grow", d: 0.12, o: [14, 8.175] }],
    ["path", { d: "M18 5v7.35" }, { r: "grow", d: 0.16, o: [18, 8.675] }],
    ["path", { d: "M2 10v3" }, { r: "grow", d: 0.2, o: [2, 11.5] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.25, o: [12, 12] }],
    ["path", { d: "M22 10v3" }, { r: "grow", d: 0.24, o: [22, 11.5] }],
    ["path", { d: "M6 6v11" }, { r: "grow", d: 0.28, o: [6, 11.5] }],
  ],
});
