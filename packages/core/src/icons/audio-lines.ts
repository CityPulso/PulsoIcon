import { icon } from "../icon.js";

export const AudioLines = icon("AudioLines", "audio-lines", {
  nodes: [
    ["path", { d: "M2 10v3" }, { r: "grow", o: [2, 11.5] }],
    ["path", { d: "M6 6v11" }, { r: "grow", d: 0.05, o: [6, 11.5] }],
    ["path", { d: "M10 3v18" }, { r: "grow", d: 0.1, o: [10, 12] }],
    ["path", { d: "M14 8v7" }, { r: "grow", d: 0.15, o: [14, 11.5] }],
    ["path", { d: "M18 5v13" }, { r: "grow", d: 0.2, o: [18, 11.5] }],
    ["path", { d: "M22 10v3" }, { r: "grow", d: 0.25, o: [22, 11.5] }],
  ],
});
