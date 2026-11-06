import { icon } from "../icon.js";

export const MusicAi = icon("MusicAi", "music-ai", {
  text: true,
  nodes: [
    ["circle", { cx: "7", cy: "17", r: "3" }, { r: "bounce", y: -1, a: 2, o: [10, 12] }],
    ["path", { d: "M10 17V3l6 3.5" }, { r: "bounce", y: -1, a: 2, o: [10, 12] }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.2, o: [16, 19] }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.35, o: [16, 19] }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.45, o: [21, 18] }],
  ],
});
