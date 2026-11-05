import { createIcon } from "../runtime/createIcon.js";

export const MusicVideoAi = createIcon("MusicVideoAi", "music-video-ai", {
  text: true,
  nodes: [
    ["path", { d: "M11 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "8", cy: "14", r: "2" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [10, 11] }],
    ["path", { d: "M10 14V7.5l4 1.5" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [10, 11] }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.2, o: [16, 19] }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.35, o: [16, 19] }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.45, o: [21, 18] }],
  ],
});
