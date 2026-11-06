import { icon } from "../icon.js";

export const MusicVideo = icon("MusicVideo", "music-video", {
  nodes: [
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "10", cy: "15", r: "2" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M12 15V8l4 1.5" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [12, 12] }],
  ],
});
