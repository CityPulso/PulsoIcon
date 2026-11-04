import { createIcon } from "../runtime/createIcon.js";

export const Forward = createIcon("Forward", "forward", {
  nodes: [
    ["path", { d: "m15 17 5-5-5-5" }, { r: "slide", x: 1, a: 2, o: [17.5, 12] }],
    ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12" }, { r: "redraw", d: 0.1, o: [12, 15] }],
  ],
});
