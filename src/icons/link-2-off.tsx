import { createIcon } from "../runtime/createIcon.js";

export const Link2Off = createIcon("Link2Off", "link-2-off", {
  nodes: [
    ["path", { d: "M9 17H7A5 5 0 0 1 7 7" }, { r: "slide", x: -1, a: 1, o: [5.5, 12] }],
    ["path", { d: "M15 7h2a5 5 0 0 1 4 8" }, { r: "slide", x: 1, a: 1, o: [18.5, 11] }],
    ["line", { x1: "8", x2: "12", y1: "12", y2: "12" }, { r: "fade", o: [10, 12] }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", fill: "none" }, { r: "slide", x: -1, a: 1, o: [5.5, 12] }],
    ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", fill: "none" }, { r: "slide", x: 1, a: 1, o: [18.5, 11] }],
    ["line", { x1: "8", x2: "16", y1: "12", y2: "12", fill: "none" }, { r: "fade", o: [10, 12] }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
