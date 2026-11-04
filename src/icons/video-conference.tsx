import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "video-conference" (MIT, Copyright (c) 2023 Phosphor Icons).

export const VideoConference = createIcon("VideoConference", "video-conference", {
  nodes: [
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M15 4v16" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "8.5", cy: "11.5", r: "2.5" }, { r: "float", a: 1.5, o: [8.5, 11.5] }],
    ["path", { d: "M4.5 20a4.5 4.5 0 0 1 8 0" }, { r: "rise", d: 0.08, a: 1, o: [8.5, 18] }],
    ["path", { d: "M18.5 9h.01" }, { r: "flicker", d: 0.1, o: [18.5, 9] }],
    ["path", { d: "M18.5 15h.01" }, { r: "flicker", d: 0.2, o: [18.5, 15] }],
  ],
});
