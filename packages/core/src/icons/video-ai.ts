import { icon } from "../icon.js";

export const VideoAi = icon("VideoAi", "video-ai", {
  text: true,
  nodes: [
    ["rect", { x: "2", y: "3", width: "13", height: "9", rx: "2" }, { r: "press", a: 0.04, o: [8.5, 7.5] }],
    ["path", { d: "m15 9 4.2 2.6a.5.5 0 0 0 .8-.4V3.8a.5.5 0 0 0-.8-.4L15 6" }, { r: "slide", d: 0.05, x: 1, a: 1, o: [17.5, 7.5] }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.2, o: [16, 19] }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.35, o: [16, 19] }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.45, o: [21, 18] }],
  ],
});
