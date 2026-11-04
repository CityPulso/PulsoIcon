import { createIcon } from "../runtime/createIcon.js";

export const HandleBottomRight = createIcon("HandleBottomRight", "handle-bottom-right", {
  nodes: [
    ["path", { d: "M21 8 8 21" }, { r: "fade", o: [14.5, 14.5] }],
    ["path", { d: "m21 15-6 6" }, { r: "slide", x: 1, y: 1, a: 1.5, o: [18, 18] }],
  ],
});
