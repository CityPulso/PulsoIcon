import { icon } from "../icon.js";

export const MessageSquareLock = icon("MessageSquareLock", "message-square-lock", {
  nodes: [
    ["path", { d: "M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10" }, { r: "press", a: 0.04, o: [12, 12.498] }],
    ["path", { d: "M20 15v-2a2 2 0 0 0-4 0v2" }, { r: "lift", d: 0.1, o: [18, 13] }],
    ["rect", { x: "14", y: "15", width: "8", height: "5", rx: "1" }, { r: "shake", d: 0.2, a: 0.8, o: [18, 17.5] }],
  ],
});
