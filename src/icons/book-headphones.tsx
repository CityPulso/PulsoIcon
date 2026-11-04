import { createIcon } from "../runtime/createIcon.js";

export const BookHeadphones = createIcon("BookHeadphones", "book-headphones", {
  nodes: [
    ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2" }, { r: "float", d: 0.1, o: [12, 9] }],
    ["circle", { cx: "15", cy: "12", r: "1" }, { r: "pop", d: 0.2, o: [15, 12] }],
    ["circle", { cx: "9", cy: "12", r: "1" }, { r: "pop", d: 0.26, o: [9, 12] }],
  ],
});
