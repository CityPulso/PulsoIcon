import { icon } from "../icon.js";

export const MessageSquareSmile = icon("MessageSquareSmile", "message-square-smile", {
  nodes: [
    ["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }, { r: "wobble", a: 6, o: [3, 21] }],
    ["path", { d: "M9 9h.01" }, { r: "blink", d: 0.1, o: [12, 9] }],
    ["path", { d: "M15 9h.01" }, { r: "blink", d: 0.1, o: [12, 9] }],
    ["path", { d: "M8.5 13s1.3 2 3.5 2 3.5-2 3.5-2" }, { r: "draw", d: 0.15, o: [12, 14] }],
  ],
});
