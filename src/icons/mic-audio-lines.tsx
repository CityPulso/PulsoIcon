import { createIcon } from "../runtime/createIcon.js";

export const MicAudioLines = createIcon("MicAudioLines", "mic-audio-lines", {
  nodes: [
    ["path", { d: "M10 3v2.341" }, { r: "grow", d: 0.05, o: [10, 4.171] }],
    ["path", { d: "M12 17v4" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M14 5v.341" }, { r: "grow", d: 0.09, o: [14, 5.171] }],
    ["path", { d: "M18 5v13" }, { r: "grow", d: 0.13, o: [18, 11.5] }],
    ["path", { d: "M2 10v3" }, { r: "grow", d: 0.17, o: [2, 11.5] }],
    ["path", { d: "M22 10v3" }, { r: "grow", d: 0.21, o: [22, 11.5] }],
    ["path", { d: "M6 6v11" }, { r: "grow", d: 0.25, o: [6, 11.5] }],
    ["path", { d: "M9 21h6" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["rect", { width: "4", height: "8", x: "10", y: "9", rx: "2" }, { r: "press", a: 0.04, o: [12, 21] }],
  ],
});
