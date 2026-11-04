import { createIcon } from "../runtime/createIcon.js";

export const AudioLinesX = createIcon("AudioLinesX", "audio-lines-x", {
  nodes: [
    ["path", { d: "M10 3v18" }, { r: "grow", o: [10, 12] }],
    ["path", { d: "M14 8v6.35" }, { r: "grow", d: 0.05, o: [14, 11.175] }],
    ["path", { d: "m17 17 5 5" }, { r: "draw", d: 0.25, o: [19.5, 19.5] }],
    ["path", { d: "M18 5v8.1" }, { r: "grow", d: 0.1, o: [18, 9.05] }],
    ["path", { d: "M2 10v3" }, { r: "grow", d: 0.15, o: [2, 11.5] }],
    ["path", { d: "M22 10v3" }, { r: "grow", d: 0.2, o: [22, 11.5] }],
    ["path", { d: "m22 17-5 5" }, { r: "draw", d: 0.33, o: [19.5, 19.5] }],
    ["path", { d: "M6 6v11" }, { r: "grow", d: 0.25, o: [6, 11.5] }],
  ],
});
