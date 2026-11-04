import { createIcon } from "../runtime/createIcon.js";

export const Maximize2 = createIcon("Maximize2", "maximize-2", {
  nodes: [
    ["path", { d: "M15 3h6v6" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [17.5, 6.5] }],
    ["path", { d: "m21 3-7 7" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [17.5, 6.5] }],
    ["path", { d: "m3 21 7-7" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [6.5, 17.5] }],
    ["path", { d: "M9 21H3v-6" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [6.5, 17.5] }],
  ],
});
