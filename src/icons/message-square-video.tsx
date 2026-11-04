import { createIcon } from "../runtime/createIcon.js";

export const MessageSquareVideo = createIcon("MessageSquareVideo", "message-square-video", {
  nodes: [
    ["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }, { r: "press", a: 0.04, o: [12, 12.5] }],
    ["rect", { x: "6.5", y: "8", width: "7", height: "6", rx: "1.5" }, { r: "pulse", d: 0.1, a: 0.08, o: [10, 11] }],
    ["path", { d: "m13.5 10.25 4-2.25v6l-4-2.25" }, { r: "slide", d: 0.15, x: 1, a: 0.6, o: [15.5, 11] }],
  ],
});
