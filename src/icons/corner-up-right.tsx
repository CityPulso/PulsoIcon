import { createIcon } from "../runtime/createIcon.js";

export const CornerUpRight = createIcon("CornerUpRight", "corner-up-right", {
  nodes: [
    ["path", { d: "m15 14 5-5-5-5" }, { r: "slide", d: 0.2, x: 1, a: 1.5, o: [17.5, 9] }],
    ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12" }, { r: "redraw", o: [12, 14.5] }],
  ],
});
