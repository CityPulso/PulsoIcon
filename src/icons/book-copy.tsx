import { createIcon } from "../runtime/createIcon.js";

export const BookCopy = createIcon("BookCopy", "book-copy", {
  nodes: [
    ["path", { d: "M5 7a2 2 0 0 0-2 2v11" }, { r: "fade", d: 0.1, o: [9, 14.5] }],
    ["path", { d: "M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21" }, { r: "fade", d: 0.1, o: [9, 14.5] }],
    ["path", { d: "M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [15, 9.5] }],
  ],
});
