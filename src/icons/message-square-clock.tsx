import { createIcon } from "../runtime/createIcon.js";

export const MessageSquareClock = createIcon("MessageSquareClock", "message-square-clock", {
  nodes: [
    ["path", { d: "M22 10V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10" }, { r: "press", a: 0.04, o: [12, 12.5] }],
    ["circle", { cx: "17", cy: "17", r: "5" }],
    ["path", { d: "M17 14.5V17l1.5 1" }, { r: "turn", d: 0.1, a: 40, o: [17, 17] }],
  ],
});
