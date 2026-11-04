import { createIcon } from "../runtime/createIcon.js";

export const BookLock = createIcon("BookLock", "book-lock", {
  nodes: [
    ["path", { d: "M18 6V4a2 2 0 1 0-4 0v2" }, { r: "lift", d: 0.1, o: [16, 4] }],
    ["path", { d: "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["rect", { x: "12", y: "6", width: "8", height: "5", rx: "1" }],
  ],
});
