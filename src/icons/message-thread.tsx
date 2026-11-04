import { createIcon } from "../runtime/createIcon.js";

export const MessageThread = createIcon("MessageThread", "message-thread", {
  nodes: [
    ["path", { d: "M18 8.5a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 12.786V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" }, { r: "float", a: 1, o: [10, 7] }],
    ["path", { d: "M9 10.5V15a3 3 0 0 0 3 3" }, { r: "draw", d: 0.1, o: [10.5, 15] }],
    ["rect", { x: "12", y: "15", width: "10", height: "6", rx: "2" }, { r: "slide", d: 0.25, x: 1, a: 1, o: [17, 18] }],
  ],
});
