import { createIcon } from "../runtime/createIcon.js";

export const VideoLive = createIcon("VideoLive", "video-live", {
  nodes: [
    ["path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }, { r: "slide", d: 0.05, x: 1, a: 1, o: [19, 12] }],
    ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2" }, { r: "press", a: 0.04, o: [9, 12] }],
    ["circle", { cx: "9", cy: "12", r: "2" }, { r: "pulse", d: 0.1, a: 0.3, o: [9, 12] }],
  ],
});
