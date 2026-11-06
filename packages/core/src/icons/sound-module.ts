import { icon } from "../icon.js";

export const SoundModule = icon("SoundModule", "sound-module", {
  nodes: [
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "7", cy: "10", r: "1.5" }, { r: "pulse", a: 0.2, o: [7, 10] }],
    ["circle", { cx: "12", cy: "10", r: "1.5" }, { r: "pulse", d: 0.08, a: 0.2, o: [12, 10] }],
    ["circle", { cx: "17", cy: "10", r: "1.5" }, { r: "pulse", d: 0.16, a: 0.2, o: [17, 10] }],
    ["path", { d: "M6 15h12" }, { r: "growX", d: 0.2, o: [6, 15] }],
  ],
});
