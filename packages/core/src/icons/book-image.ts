import { icon } from "../icon.js";

export const BookImage = icon("BookImage", "book-image", {
  nodes: [
    ["path", { d: "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" }, { r: "draw", d: 0.2, o: [14.85, 14.014] }],
    ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["circle", { cx: "10", cy: "8", r: "2" }, { r: "rise", d: 0.1, a: 3, o: [10, 8] }],
  ],
});
