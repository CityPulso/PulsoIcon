import { createIcon } from "../runtime/createIcon.js";

export const Mailbox = createIcon("Mailbox", "mailbox", {
  nodes: [
    ["path", { d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["polyline", { points: "15,9 18,9 18,11" }, { r: "swing", d: 0.05, a: -30, o: [15, 11] }],
    ["path", { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" }, { r: "fade", o: [8.75, 12] }],
    ["line", { x1: "6", x2: "7", y1: "10", y2: "10" }, { r: "pop", d: 0.15, o: [6.5, 10] }],
  ],
});
