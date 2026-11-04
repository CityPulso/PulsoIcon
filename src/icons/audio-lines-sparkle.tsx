import { createIcon } from "../runtime/createIcon.js";

export const AudioLinesSparkle = createIcon("AudioLinesSparkle", "audio-lines-sparkle", {
  nodes: [
    ["path", { d: "M2 10v4" }, { r: "grow", o: [2, 12] }],
    ["path", { d: "M6 7v10" }, { r: "grow", d: 0.05, o: [6, 12] }],
    ["path", { d: "M10 4v16" }, { r: "grow", d: 0.1, o: [10, 12] }],
    ["path", { d: "M14 9v6" }, { r: "grow", d: 0.15, o: [14, 12] }],
    ["path", { d: "M18 12v4" }, { r: "grow", d: 0.2, o: [18, 14] }],
    ["path", { d: "M19 2c.4 2 1 2.6 3 3-2 .4-2.6 1-3 3-.4-2-1-2.6-3-3 2-.4 2.6-1 3-3z" }, { r: "twinkle", d: 0.25, o: [19, 5] }],
  ],
});
