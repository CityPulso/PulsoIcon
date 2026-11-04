import { createIcon } from "../runtime/createIcon.js";

export const InboxArrowUp = createIcon("InboxArrowUp", "inbox-arrow-up", {
  nodes: [
    ["path", { d: "M9 4H7.24a2 2 0 0 0-1.79 1.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H15" }, { r: "press", a: 0.05, o: [12, 20] }],
    ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12" }, { r: "bounce", y: -1, a: 1, o: [12, 13.5] }],
    ["path", { d: "M12 11V2" }, { r: "draw", d: 0.1, o: [12, 6.5] }],
    ["path", { d: "m8.5 5.5 3.5-3.5 3.5 3.5" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [12, 4] }],
  ],
});
