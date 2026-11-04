import { createIcon } from "../runtime/createIcon.js";

export const Reply = createIcon("Reply", "reply", {
  nodes: [
    ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4" }, { r: "redraw", d: 0.1, o: [12, 15] }],
    ["path", { d: "m9 17-5-5 5-5" }, { r: "slide", x: -1, a: 2, o: [6.5, 12] }],
  ],
});
