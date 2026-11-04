import { createIcon } from "../runtime/createIcon.js";

export const Link2 = createIcon("Link2", "link-2", {
  nodes: [
    ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2" }, { r: "slide", x: -1, a: 1.5, o: [5.5, 12] }],
    ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2" }, { r: "slide", x: 1, a: 1.5, o: [18.5, 12] }],
    ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }, { r: "growX", d: 0.1, o: [12, 12] }],
  ],
});
