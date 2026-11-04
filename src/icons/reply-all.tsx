import { createIcon } from "../runtime/createIcon.js";

export const ReplyAll = createIcon("ReplyAll", "reply-all", {
  nodes: [
    ["path", { d: "m12 17-5-5 5-5" }, { r: "slide", d: 0.08, x: -1, a: 2, o: [14.5, 12.5] }],
    ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7" }, { r: "slide", d: 0.08, x: -1, a: 2, o: [14.5, 12.5] }],
    ["path", { d: "m7 17-5-5 5-5" }, { r: "slide", x: -1, a: 2, o: [4.5, 12] }],
  ],
});
