import { icon } from "../icon.js";

export const Shrink = icon("Shrink", "shrink", {
  nodes: [
    ["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [18, 18] }],
    ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [6, 18] }],
    ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [18, 6] }],
    ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3" }, { r: "slide", x: 1, y: 1, a: 1.5, o: [6, 6] }],
  ],
});
