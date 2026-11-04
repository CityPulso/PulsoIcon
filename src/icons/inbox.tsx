import { createIcon } from "../runtime/createIcon.js";

export const Inbox = createIcon("Inbox", "inbox", {
  nodes: [
    ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12" }, { r: "bounce", d: 0.05, y: 1, a: 1.5, o: [12, 13.5] }],
    ["path", { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }, { r: "press", a: 0.05, o: [12, 12] }],
  ],
});
